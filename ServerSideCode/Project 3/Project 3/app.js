let express = require('express');
let app = express();
let bodyParser = require('body-parser');

app.set('port', process.env.PORT || 3000);
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

let handlebars = require('express-handlebars')
            .create({defaultLayout:'main'});
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

/*Data Storage*/
let instruments = require('./data/instruments.json');
let instructors = require('./data/instructors.json');
let schedules = require('./data/schedules.json');

//Home Page
app.get('/', function(req, res){ 
    res.render('home', {instruments});
});

//Lessons Page
app.get('/lessons/:id', function(req, res){
    let instructorList = instructors.filter((instructor) =>{
        return instructor.instruments.find((element) => {
            return element.code === req.params.id;
        });
    });
    res.render('lessons', {instructorList});
});

//Schedule Page
app.get('/lessons/schedule/:id', function(req, res){
    res.render('schedule', {instructorId: req.params.id});
});

//Submit Form
app.post('/lessons/*', function(req, res){
    schedules.push(req.body);
    res.render('home', {instruments});
});

//List Page
app.get('/list', function(req, res){ 
    res.render('list', {schedules});
});

//404 Page
app.use(function(req, res){
    res.type('text/plain');
    res.status(404);
    res.send('404 - Not Found');
});

//500 Page
app.use(function(err, req, res, next){
    console.error(err.stack);
    res.type('text/plain');
    res.status(500);
    res.send('500 - Server Error');
});

app.listen(app.get('port'), function(){
    console.log('Express started on http://localhost:' +
    app.get('port') + '; press Ctrl-C to terminate.' );
});
