//controller pages hold the functions, queries etc.

const game = require('../models/game');

//display a list of all games
exports.game_list = function(req, res, next){
    /*game.find({},function (err, list_game) {
      if (err) { console.log(err) }
      res.render('team', { book_list:  list_game});
    });*/
};

// Display detail page for a specific game.
exports.game_detail = function(req, res) {
    res.send('NOT IMPLEMENTED: game detail: ' + req.params.id);
};

// Display game create form on GET.
exports.game_create_get = function(req, res) {
    res.send('NOT IMPLEMENTED: game create GET');
};

// Handle game create on POST.
exports.game_create_post = function(req, res) {
    res.send('NOT IMPLEMENTED: game create POST');
};

// Display game delete form on GET.
exports.game_delete_get = function(req, res) {
    res.send('NOT IMPLEMENTED: game delete GET');
};

// Handle game delete on POST.
exports.game_delete_post = function(req, res) {
    res.send('NOT IMPLEMENTED: game delete POST');
};

// Display game update form on GET.
exports.game_update_get = function(req, res) {
    res.send('NOT IMPLEMENTED: game update GET');
};

// Handle game update on POST.
exports.game_update_post = function(req, res) {
    res.send('NOT IMPLEMENTED: game update POST');
};