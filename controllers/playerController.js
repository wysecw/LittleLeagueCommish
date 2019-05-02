//imports
const Player = require("../models/player");

/**
 * display a list of all players
 */
exports.player_list = function(req, res) {
  Player.find({}).exec(function(err, result) {
    if (err) {
      console.log(err);
    } //catch any errors
    res.render("team", { player_list: result });
  });
};

/**
 * Display detail page for a player.
 */

exports.player_detail = function(req, res) {
  Player.find({ first_name: req.params.first_name }).exec(function(
    err,
    result
  ) {
    if (err) {
      console.log(err);
    } //catch any errors
    res.render("team", { spec_player: result });
  });
};

// TODO Display league create form on GET.
exports.player_create_get = function(req, res) {
  res.send("NOT IMPLEMENTED: league create GET");
};

// TODO Handle league create on POST.
exports.player_create_post = function(req, res) {
  res.send("NOT IMPLEMENTED: league create POST");
};

// TODO Display Player create form on GET.
exports.player_create_get = function(req, res) {
  res.render("player_form", { title: "Create Player" });
};

// Handle Player create form on POST.
/*exports.player_create_post = 
            player.save(function (err) {
                if (err) { return next(err); }
                // Successful - redirect to new author record.
                res.redirect(player.url);
            });
        
    }
];*/

// TODO Display Player delete form on GET.
exports.player_delete_get = function(req, res) {
  res.send("NOT IMPLEMENTED: Player delete GET");
};

// TODO Handle Player delete on POST.
exports.player_delete_post = function(req, res) {
  res.send("NOT IMPLEMENTED: Player delete POST");
};

// TODO Display Player update form on GET.
exports.player_update_get = function(req, res) {
  res.send("NOT IMPLEMENTED: Player update GET");
};

// TODO Handle Player update on POST.
exports.player_update_post = function(req, res) {
  res.send("NOT IMPLEMENTED: Player update POST");
};
