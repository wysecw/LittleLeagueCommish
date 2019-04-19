const express = require('express');
const mongoose = require('mongoose');

let app = express();

app.set('port', process.env.PORT || 3000);

app.use(express.static(__dirname + '/public'));

//set up database
let options = {server: {socketOptions: {keepAlive: 1}}};
mongoose.connect('mongodb://cww22:braves08@ds163226.mlab.com:63226/lab12', options);
let Event = require('./models/event.js');

//Import our helpers
let eventHelpers = require('./helpers/event.js')({Event: Event});
//let attendeeHelpers = require('./helpers/attendee.js')({Event: Event})
app.get('/event', eventHelpers.getAllEvents);
app.get('/event/:id', eventHelpers.getEventById);

// 404 catch-all handler (middleware)
app.use(function(req, res, next){
	res.status(404);
	res.send('404');
});

// 500 error handler (middleware)
app.use(function(err, req, res, next){
	console.error(err.stack);
	res.status(500);
	res.send('500');
});

app.listen(app.get('port'), function(){
  console.log( 'Express started on http://localhost:' +
    app.get('port') + '; press Ctrl-C to terminate.' );
});
