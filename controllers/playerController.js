//controller pages hold the functions, queries etc.

const Player = require('../models/player');

//display a list of all players
exports.player_list = function(req, res){
    //db query goes here, same for all of these
    res.send("NOT IMPLEMENTED: PLayer List");
};

// Display detail page for a player.
exports.player_detail = function(req, res) {
    res.send('NOT IMPLEMENTED: Player detail: ' + req.params.id);
};

// Display Player create form on GET.
exports.player_create_get = function(req, res) {
    res.send('NOT IMPLEMENTED: Player create GET');
};

// Handle Player create form on POST.
exports.player_create_post = function(req, res) {
    res.send('NOT IMPLEMENTED: Player create POST');
};

// Display Player delete form on GET.
exports.player_delete_get = function(req, res) {
    res.send('NOT IMPLEMENTED: Player delete GET');
};

// Handle Player delete on POST.
exports.player_delete_post = function(req, res) {
    res.send('NOT IMPLEMENTED: Player delete POST');
};

// Display Player update form on GET.
exports.player_update_get = function(req, res) {
    res.send('NOT IMPLEMENTED: Player update GET');
};

// Handle Player update on POST.
exports.player_update_post = function(req, res) {
    res.send('NOT IMPLEMENTED: Player update POST');
};

