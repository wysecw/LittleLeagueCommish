const express = require('express');
const bodyParser = require('body-parser');

let app = express();

app.use(bodyParser.urlencoded({extended: false}));

let mongoose = require('mongoose');
//mongoose options
const options= ({server: {socketOptions: {keepAlive: 1}}});

// Set up first mongoose connection
let db1 = mongoose.createConnection('mongodb://ballotRO:XooRqtLAxe9ZKK@ds143953.mlab.com:43953/project5', options);
let Race = require('./models/race.js')(db1);

//Set up second mongoose connection
let db2 = mongoose.createConnection('mongodb://serverside:group16@ds163156.mlab.com:63156/project4_voter', options);
let Vote = require('./models/vote.js')(db2);

// Open the connections
db1.on('error', console.error.bind(console, 'connection error:'));
db1.once('open', function() { console.log("db1 connected"); });

db2.on('error', console.error.bind(console, 'connection error:'));
db2.once('open', function() { console.log("db2 connected"); });

// set up handlebars view engine
let handlebars = require('express-handlebars')
	.create({ defaultLayout:'main' });
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

app.set('port', process.env.PORT || 3000);

app.use(express.static(__dirname + '/public'));


app.get('/', function(req, res) {
	res.render('home');
});

Vote.find({}).then(function(votes){
	
	console.log(votes);
});

//getapplication races and render the ballot
//expects a form submission with district and voter id
app.post('/ballot', function(req,res){
	
	//make sure the form contains a district and voter id
	if(req.body.district && req.body.voterId){
		const districtInt = parseInt(req.body.district);
		
		
		
	/*	if(Vote.find().exists({voterId: req.body.voterId})){
			console.log("Sorry you already voted");
			res.render('home');
		}else{*/
		
			Race.find({districts: { $in: [ 0, districtInt] }}).then(function(races){
				res.render('ballot', {
					voterId: req.body.voterId,
					district: districtInt,
					races: races
				
				});
			
				}).catch(function(err){
				console.log(err);
				res.redirect("/");//actually should be an error page
			});
			
	}else{//otherwise redirect the user to home screen
		res.redirect('home');
	}

});

//handle votes from the user
app.post('/vote', function(req, res){
	
	if(req.body.voterId){
		console.log(req.body);
		//make a copy of the req body
		const votes = Object.assign({}, req.body);
		delete votes.voterId;
		delete votes.district;
		
		new Vote({
		  voterId: req.body.voterId,
	    district: req.body.district,
	    votes: votes
		}).save().then(function(savedVote){
			
		});
		res.render("home", {message:"Your Vote has been recorded."})
	}else{
		res.render("home")
	}
	
})



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
