//controller pages hold the functions, queries etc.
const League = require("../models/league");
const Team = require("../models/team");
let Users = require("../models/users");
const express = require("express");
const bcrypt = require("bcrypt");

exports.dropdown_list = async function(req, res, next) {
  res.locals.teams = await getTeamList();
  res.locals.leagues = await getLeagueList();
  next();
};

exports.getHomePage = function(req, res, next) {
  res.render("home");
};

exports.getLoginPage = function(req, res, next) {
  res.render("login");
};

exports.confirmLogin = function(req, res, next) {
  Users.findOne({ username: req.body.username }, function(err, result) {
    if (err) {
      console.log(err);
      res.render("500");
    }
    if (!result) {
      res.render("login", { nameError: "User Name not found" });
    }
    if (bcrypt.compareSync(req.body.password, result.password)) {
      //req.session.user = {username: req.body.username};
      res.render("account", {
        message: "Welcome back, " + result.firstname
      });
    } else {
      res.render("login", { pwError: "Incorrect Password" }); //redirects to password error page
    }
  });
};

exports.getSignUpPage = function(req, res, next) {
  res.render("signup");
};

exports.getAdminPage = function(req, res, next) {
  res.render("admin");
};

function getTeamList() {
  return Team.find({}, "team_name").exec();
}

function getLeagueList() {
  return League.find({}, "name").exec();
}
