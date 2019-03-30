//imports
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const homeRouter = require('./routes/home');

//set-up express
let app = express();

//tell express to use body-parser for the http request body(req.body)
app.use(bodyParser.urlencoded({extended: false}));

// Set up mongoose connection to mongoDB
let db = mongoose.connect('mongodb://farquad:capstone2019@ds121026.mlab.com:21026/little-league-commish', { useNewUrlParser: true });
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// set up handlebars view engine
let handlebars = require('express-handlebars')
	.create({ defaultLayout:'main' });
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

app.set('port', process.env.PORT || 3000);

app.use(express.static(__dirname + '/public'));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/home', homeRouter);
app.use('/home', homeRouter);
app.use('/home', homeRouter);

//set home page
app.get('/', function(req, res) {
	res.render('home');
});

//insert all other pages here
app.get('/team', function(req, res) {
	res.render('team');
});

app.get('/league', function(req, res) {
	res.render('league');
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
