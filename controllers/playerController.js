//controller pages hold the functions, queries etc.

const Player = require('../models/player');

//const { body,validationResult } = require('express-validator/check');
//const { sanitizeBody } = require('express-validator/filter');

//display a list of all players
exports.player_list = function(req, res){
    //db query goes here, same for all of these
    Player.find({})
    .exec(function (err, result) {
    if (err) {
        console.log(err);
      } //catch any errors
      res.render("team", { player_list: result });
    });
};

// Display detail page for a player.
exports.player_detail = function(req, res) {
    Player.find({first_name: req.params.first_name})
    .exec(function (err, result) {
    if (err) {
        console.log(err);
      } //catch any errors
      res.render("team", { spec_player: result });
    });
};

// Display league create form on GET.
exports.player_create_get = function (req, res) {
    res.send('NOT IMPLEMENTED: league create GET');
};

// Handle league create on POST.
exports.player_create_post = function (req, res) {
    res.send('NOT IMPLEMENTED: league create POST');
};

// Display Player create form on GET.
//exports.player_create_get = function(req, res) {
   //  res.render('player_form', { title: 'Create Player' });
//};

// Handle Player create form on POST.
/*exports.player_create_post = [

    // Process request 
    (req, res, next) => {
        
        // Create Player object 
        var player = new Player(
            {
                first_name: req.body.first_name,
                last_name: req.body.last_name,
                parent_name: req.body.parent_name,
                address: req.body.address,
                phone_number: req.body.phone_number,
                dob: req.body.dob,
                age: req.body.age,
            }
        );

        
            

            // Save player.
            player.save(function (err) {
                if (err) { return next(err); }
                // Successful - redirect to new author record.
                res.redirect(player.url);
            });
        
    }
];*/

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

