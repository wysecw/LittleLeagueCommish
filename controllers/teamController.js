//imports
const Team = require("../models/team");

/**
 * display a list of all teams
 */
exports.team_list = function(req, res, next) {
  Team.find({})
    .populate("head_coach")
    .populate("roster")
    .exec(function(err, result) {
      if (err) {
        console.log(err);
      } //catch any errors
      res.render("team", { team_list: result });
    });
};

/**
 * Display detail page for a specific team.
 * get team info from database using team name passed in URL
 *  */

exports.team_detail = function(req, res, next) {
  Team.find({ team_name: req.params.team_name })
    .populate("head_coach")
    .populate("roster")
    .populate("schedule")
    .populate("assistant_coach")
    .exec(function(err, result) {
      if (err) {
        console.log(err);
      }
      res.render("team", { result: result });
    });
};

//TODO Display team create form on GET.
exports.team_create_get = function(req, res) {
  res.send("NOT IMPLEMENTED: Team create GET");
};

//TODO Handle team create on POST.
exports.team_create_post = function(req, res) {
  res.send("NOT IMPLEMENTED: team create POST");
};

//TODO Display team delete form on GET.
exports.team_delete_get = function(req, res) {
  res.send("NOT IMPLEMENTED: team delete GET");
};

//TODO Handle team delete on POST.
exports.team_delete_post = function(req, res) {
  res.send("NOT IMPLEMENTED: team delete POST");
};

//TODO Display team update form on GET.
exports.team_update_get = function(req, res) {
  res.send("NOT IMPLEMENTED: team update GET");
};

//TODO Handle team update on POST.
exports.team_update_post = function(req, res) {
  res.send("NOT IMPLEMENTED: team update POST");
};
