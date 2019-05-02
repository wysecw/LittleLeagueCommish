//imports
const coach = require("../models/coach");

/**
 * Retrieves a list of coaches from the database
 */
exports.coach_list = function(req, res) {
  coach.find({}).exec(function(err, result) {
    if (err) {
      console.log(err);
    }
    res.render("team", { coach_list: result });
  });
};

/**
 * Display details for a specific coach.
 * */

exports.coach_detail = function(req, res) {
  coach.find({ coach_name: req.params.coach_name }).exec(function(err, result) {
    if (err) {
      console.log(err);
    } //catch any errors
    res.render("team", { coach_player: result });
  });
};

// TODO get add new coach form
exports.coach_create_get = function(req, res) {};

//TODO  POST process new coach form.
exports.coach_create_post = function(req, res) {
  res.send("NOT IMPLEMENTED: coach create POST");
};

// TODO Display coach delete form on GET.
exports.coach_delete_get = function(req, res) {
  res.send("NOT IMPLEMENTED: coach delete GET");
};

// TODO Handle coach delete on POST.
exports.coach_delete_post = function(req, res) {
  res.send("NOT IMPLEMENTED: coach delete POST");
};

// TODO Display coach update form on GET.
exports.coach_update_get = function(req, res) {
  res.send("NOT IMPLEMENTED: coach update GET");
};

// TODO Handle coach update on POST.
exports.coach_update_post = function(req, res) {
  res.send("NOT IMPLEMENTED: coach update POST");
};
