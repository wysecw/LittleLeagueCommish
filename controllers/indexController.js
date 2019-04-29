//controller pages hold the functions, queries etc.
const League = require("../models/league");
const Team = require("../models/team");
let Users = require("../models/users");
const express = require("express");
const bcrypt = require("bcrypt");
const fetch = require("node-fetch");

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
