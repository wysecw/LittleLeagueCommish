const express = require('express');
const credentials = require('./credentials.js');

let app = express();
let courses = require('./data/courses.json');
let users = require('./data/users.json');
let bcrypt = require('bcryptjs');
const error = require('./Helpers/errors.js');

// Set up cookie parser
app.use( require('cookie-parser')(credentials.cookieSecret) );

// Set up session management
app.use(require("express-session")({
	resave: false,
	saveUninitialized: false,
	secret: credentials.cookieSecret
}));

// for holding the completed lessons
let lessonTracker = {
	pmatthews: 1,
	japple: 1,
	creynolds: 1,
	yspiegelman: 1
};

// Set up body parser for post submissions
let bodyParser = require('body-parser');
app.use( bodyParser.urlencoded( {extended: false} ) );

// set up handlebars view engine
let handlebars = require('express-handlebars')
	.create({ defaultLayout:'main' });
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

app.set('port', process.env.PORT || 3000);

app.use(express.static(__dirname + '/public'));

//Catches all requests to check for session
app.get('/', function(req, res) {
	
	// Checking for session, session has user, and user has username
	if(req.session && req.session.user && req.session.user.username) {//should be in middleware 
		
		res.redirect('/lesson/' + req.session.user.username);
		
	} else {
		
		res.redirect('login');
	}
});
//Login Page
app.get('/login', function(req, res) {
	
	res.render('login');
	
});

//Login Page submit
app.post('/login', function(req, res) {
	
	// Checking username
	if(users[req.body.username]) {
		//Check Password with bcrypt
		if(bcrypt.compareSync(req.body.password, users[req.body.username].password)){
			req.session.user = {username: req.body.username};
			res.redirect('/lesson/' + req.body.username);
		}else{
			res.redirect('incorrectPassword');//redirects to password error page
		}
	
	}else{
		res.redirect('userNameNotFound');//redirects to username error page
	}
	
	
});
//Retrieves login page with error message
app.get('/userNameNotFound', error.userNameNotFound);
app.get('/incorrectPassword', error.incorrectPassword);

//Lesson Page
app.get('/lesson/*', function(req, res){
	let user = users[req.session.user.username];
	
	// Checks lesson number, redirects if free lessons are done 
		if(lessonTracker[user.username] > 3) {
				res.redirect('/payup');
		} else {
			//If free lessons remain, load lesson information
			let course = courses[user.instrument];
			let lessonNumber = lessonTracker[user.username];
			let description  = course.description;
			let pages = course[lessonNumber-1].pages;
			res.render('lesson', {lessonNumber: lessonNumber, description: description, pages: pages});
		}
});

//Increment the lesson tracker when lesson complete is clicked
app.get('/lessonComplete', function(req, res){
	lessonTracker[req.session.user.username] ++;
	res.redirect('/');
});

//Pay page
app.get('/payup', function(req, res) {
	res.render('payup');	
});

// 404 catch-all handler (middleware)
app.use(function(req, res, next){
	res.status(404);
	res.render('404');
});

// 500 error handler (middleware)
app.use(function(err, req, res, next){
	console.error(err.stack);
	res.status(500);
	res.render('500');
});

app.listen(app.get('port'), function(){
  console.log( 'Express started on http://localhost:' +
    app.get('port') + '; press Ctrl-C to terminate.' );
});
