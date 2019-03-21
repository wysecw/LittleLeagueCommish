const express = require('express');
const bodyParser = require('body-parser');

let app = express();

app.use(bodyParser.urlencoded({extended: false}));

let mongoose = require('mongoose');
//mongoose options
const options= ({server: {socketOptions: {keepAlive: 1}}});

// Set up first mongoose connection
let db1 = mongoose.connect('mongodb://farquad:capstone2019@ds121026.mlab.com:21026/little-league-commish', options);
let Player = require('./models/player.js')(db1);

// Open the connections
//db1.on('error', console.error.bind(console, 'connection error:'));
//db1.once('open', function() { console.log("db1 connected"); });

// set up handlebars view engine
let handlebars = require('express-handlebars')
	.create({ defaultLayout:'main' });
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

app.set('port', process.env.PORT || 3000);

app.use(express.static(__dirname + '/public'));

//set home page
app.get('/', function(req, res) {
	res.render('home');
});

//insert all other pages here

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
