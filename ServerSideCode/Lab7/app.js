const express = require('express');

let bunyan = require('bunyan');
let log = bunyan.createLogger({name: "myapp"});
log.level("debug");

// Disaster helpers
let disasters = require("./Helpers/disasters.js");

let app = express();

// set up handlebars view engine
let handlebars = require('express-handlebars')
	.create({ defaultLayout:'main' });
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

app.set('port', process.env.PORT || 3000);

app.use(express.static(__dirname + '/public'));

// Middleware to make sure we have a intensity specified
const intenstityEnforcer = function(req, res, next){
	if(req.query.intensity) {
	  log.debug("Intensity was found, sending to routes.");
	  next();
	} else {
	  log.debug("No intensity found, logging an error.");
	  res.render("error");
	}
};

app.get('/earthquake', intenstityEnforcer, disasters.earthquake);
app.get('/tornado', intenstityEnforcer, disasters.tornado);
app.get('/hurricane', disasters.hurricane);

// 404 catch-all handler (middleware)
app.use(function(req, res, next){``
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
