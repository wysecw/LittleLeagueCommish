const express = require('express');
const credentials = require("./credentials.js");
const bodyParser = require("body-parser");

let app = express();

// Set up our body parser
app.use( bodyParser.urlencoded( {extended: false} ) );

// Set up cookie parser
app.use( require('cookie-parser')(credentials.cookieSecret) );

// Set up session management
app.use(require("express-session")({
	resave: false,
	saveUnitialized: false,
	secret: credentials.cookieSecret
}));

// set up handlebars view engine
let handlebars = require('express-handlebars')
	.create({ defaultLayout:'main' });
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

app.set('port', process.env.PORT || 3000);

app.use(express.static(__dirname + '/public'));

// If they are logged in, show a secret page, otherwise redirect to the login page
app.get('/', function(req, res) {
	if(req.session && req.session.user && req.session.user.username) {
			res.render('secret', {username: req.session.user.username});
	} else {
			res.redirect('/login');
	}
});

// Login screen should display the form
app.get('/login', function(req, res) {
	res.render("login");
});

// Process form submission
app.post('/login', function(req, res) {
	console.log(req.body);
	
	if(req.body && req.body.password && req.body.password === "asdfasdf") {
		console.log("Successful login");
		req.session.user = {
			username: req.body.username
		};
	} else {
		console.log("Incorrect login");
	}
	
	// Redirect the user to the home page
	res.redirect('/');
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
