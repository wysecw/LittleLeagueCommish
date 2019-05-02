//imports
const League = require("../models/league");

/**
 * display a list of all leagues from the database
 *  */
exports.league_list = function(req, res, next) {
  League.find({}, function(err, result) {
    if (err) {
      console.log(err);
    }
    res.render("league", { league_list: result });
  });
};

//TODO edit league options
exports.set_league_options = function() {
  League.find({}, "name", function(err, result) {
    if (err) {
      console.log(err);
    }
    return result;
  });
};

/**
 * Display detail page for a specific league.
 *  */

exports.league_detail = function(req, res, next) {
  League.find({ name: req.params.name })
    .populate("teams")
    .exec(function(err, result) {
      if (err) {
        console.log(err);
      }
      res.render("league", { result: result });
    });
};

// TODO Display league create form on GET.
exports.league_create_get = function(req, res) {
  res.send("NOT IMPLEMENTED: league create GET");
};

//  TODO Handle league create on POST.
exports.league_create_post = function(req, res) {
  res.send("NOT IMPLEMENTED: league create POST");
};

// TODO Display league delete form on GET.
exports.league_delete_get = function(req, res) {
  res.send("NOT IMPLEMENTED: league delete GET");
};

// TODO Handle league delete on POST.
exports.league_delete_post = function(req, res) {
  res.send("NOT IMPLEMENTED: league delete POST");
};

// TODO Display league update form on GET.
exports.league_update_get = function(req, res) {
  res.send("NOT IMPLEMENTED: league update GET");
};

// TODO Handle league update on POST.
exports.league_update_post = function(req, res) {
  res.send("NOT IMPLEMENTED: league update POST");
};
