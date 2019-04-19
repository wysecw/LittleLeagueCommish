const express = require('express');

let app = express();

// getting-started.js
let mongoose = require('mongoose');
mongoose.connect('mongodb://cww22:braves08@ds139138.mlab.com:39138/lab_8');

let Kitten = require('./models/kitten.js');

// set up handlebars view engine
let handlebars = require('express-handlebars')
	.create({ defaultLayout:'main' });
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("we're connected!")
});

app.set('port', process.env.PORT || 3000);

app.use(express.static(__dirname + '/public'));


app.get('/:catname', function(req, res) {
	
	let cat = new Kitten({ name: 'Crazy Cat' });
	

	cat.save().then(function(savedCat){
		console.log(savedCat.name);
		res.render('home');
	})
});

app.get('/list/:catname', function(req, res) {
	
	Kitten.find({ name: req.params.catname }).then(function(foundCats){
		console.log(foundCats);
		res.render('home', {cats: foundCats});
	});
	
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
