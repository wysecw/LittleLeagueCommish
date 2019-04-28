//controller pages hold the functions, queries etc.

const Team = require("../models/team");

//display a list of all teams
exports.team_list = function(req, res, next) {
  //this query works, use it as an example
  Team.find({}) //return all records from the team collection
    .populate("head_coach") //head_coach is stored here as just a key pointing to the coach record, populate gets all the coach info
    .populate("roster") //same for roster, just keys pointing to players, roster is an array so acces it with roster.<key>
    .exec(function(err, result) {
      //execute the query and pass the call back function that says what to do with the results
      if (err) {
        console.log(err);
      } //catch any errors
      res.render("team", { team_list: result }); //http response to render the team page, assign the the query result to team_list and send it to the page
    });
};

// Display detail page for a specific team.
exports.team_detail = function(req, res, next) {
  //get team info from database using team name passed in URL
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

// Display team create form on GET.
exports.team_create_get = function(req, res) {
  res.send("NOT IMPLEMENTED: Team create GET");
};

// Handle team create on POST.
exports.team_create_post = function(req, res) {
  res.send("NOT IMPLEMENTED: team create POST");
};

// Display team delete form on GET.
exports.team_delete_get = function(req, res) {
  res.send("NOT IMPLEMENTED: team delete GET");
};

// Handle team delete on POST.
exports.team_delete_post = function(req, res) {
  res.send("NOT IMPLEMENTED: team delete POST");
};

// Display team update form on GET.
exports.team_update_get = function(req, res) {
  res.send("NOT IMPLEMENTED: team update GET");
};

// Handle team update on POST.
exports.team_update_post = function(req, res) {
  res.send("NOT IMPLEMENTED: team update POST");
};
