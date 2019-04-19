//controller pages hold the functions, queries etc.
const League = require("../models/league");
const Team = require("../models/team");




exports.dropdown_list = async function(req, res, next) {
  res.locals.teams = await getTeamList();
  res.locals.leagues = await getLeagueList();
  next();
}

exports.getHomePage = function (req, res, next) {
  res.render('home');
}

function getTeamList() {
  return Team.find({}, "team_name").exec();
};

function getLeagueList() {
  return League.find({}, "name").exec();
};




