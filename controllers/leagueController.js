//controller pages hold the functions, queries etc.

const league = require('../models/league');

//display a list of all leagues
exports.league_list = function(req, res){
    //db query goes here, same for all of these
    res.render('league', {message: "NOT IMPLEMENTED: league List"});
};

// Display detail page for a specific league.
exports.league_detail = function(req, res) {
    res.send('NOT IMPLEMENTED: league detail: ' + req.params.id);
};

// Display league create form on GET.
exports.league_create_get = function(req, res) {
    res.send('NOT IMPLEMENTED: league create GET');
};

// Handle league create on POST.
exports.league_create_post = function(req, res) {
    res.send('NOT IMPLEMENTED: league create POST');
};

// Display league delete form on GET.
exports.league_delete_get = function(req, res) {
    res.send('NOT IMPLEMENTED: league delete GET');
};

// Handle league delete on POST.
exports.league_delete_post = function(req, res) {
    res.send('NOT IMPLEMENTED: league delete POST');
};

// Display league update form on GET.
exports.league_update_get = function(req, res) {
    res.send('NOT IMPLEMENTED: league update GET');
};

// Handle league update on POST.
exports.league_update_post = function(req, res) {
    res.send('NOT IMPLEMENTED: league update POST');
};