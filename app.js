//imports
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const homeRouter = require('./routes/home');
const coachRouter = require('./routes/coach');
const leagueRouter = require('./routes/league');
const playerRouter = require('./routes/player');
const teamRouter = require('./routes/team');

//set-up express
let app = express();

//tell express to use body-parser for the http request body(req.body)
app.use(bodyParser.urlencoded({extended: false}));

// Set up mongoose connection to mongoDB
const conn = 'mongodb://farquad:capstone2019@ds121026.mlab.com:21026/little-league-commish';
const options = { useNewUrlParser: true };
mongoose.connect(conn, options).then(
	() => {console.log('Mongo Connection Successful')},
	err => {console.log(err)}
);

// set up handlebars view engine
let handlebars = require('express-handlebars')
	.create({ defaultLayout:'main' });
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');
//set the port
app.set('port', process.env.PORT || 5500);
//set the working directory
app.use(express.static(__dirname + '/public'));
//attach routers to end points
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/home', homeRouter);
app.use('/coach', coachRouter);
app.use('/league', leagueRouter);
app.use('/player', playerRouter);
app.use('/team', teamRouter);

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
