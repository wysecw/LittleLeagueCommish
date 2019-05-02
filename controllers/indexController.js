//controller pages hold the functions, queries etc.
const League = require("../models/league");
const Team = require("../models/team");
let Users = require("../models/users");
const express = require("express");
const bcrypt = require("bcrypt");
const fetch = require("node-fetch");

/**
 * Returns list of teams and leagues from the database to populate nav bar dropdowns
 */
exports.dropdown_list = async function(req, res, next) {
  res.locals.teams = await getTeamList();
  res.locals.leagues = await getLeagueList();
  next();
};
/**
 * diplay home page
 */
exports.getHomePage = function(req, res, next) {
  res.render("home");
};
/**
 * display login page
 */
exports.getLoginPage = function(req, res, next) {
  res.render("login");
};
/**
 * display signup page
 */
exports.getSignUpPage = function(req, res, next) {
  res.render("signup");
};
/**
 * display admin page
 */
exports.getAdminPage = function(req, res, next) {
  res.render("admin");
};
/**
 * Get list of teams from database
 */
function getTeamList() {
  return Team.find({}, "team_name").exec();
}
/**
 * Get list of leagues from database
 */
function getLeagueList() {
  return League.find({}, "name").exec();
}
