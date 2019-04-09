//controller pages hold the functions, queries etc.

const Team = require('../models/team');

//display a list of all teams
exports.team_list = function(req, res, next){
    //  Team.find({}, function(err, result){
    //         if(err){console.log(err);}
    //         console.log(result);
           res.render('team');
    
};

// Display detail page for a specific team.
exports.team_detail = function(req, res) {
    res.send('NOT IMPLEMENTED: team detail: ' + req.params.id);
};

// Display team create form on GET.
exports.team_create_get = function(req, res) {
    res.send('NOT IMPLEMENTED: Team create GET');
};

// Handle team create on POST.
exports.team_create_post = function(req, res) {
    res.send('NOT IMPLEMENTED: team create POST');
};

// Display team delete form on GET.
exports.team_delete_get = function(req, res) {
    res.send('NOT IMPLEMENTED: team delete GET');
};

// Handle team delete on POST.
exports.team_delete_post = function(req, res) {
    res.send('NOT IMPLEMENTED: team delete POST');
};

// Display team update form on GET.
exports.team_update_get = function(req, res) {
    res.send('NOT IMPLEMENTED: team update GET');
};

// Handle team update on POST.
exports.team_update_post = function(req, res) {
    res.send('NOT IMPLEMENTED: team update POST');
};

