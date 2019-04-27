//controller pages hold the functions, queries etc.
const League = require("../models/league");
const Team = require("../models/team");

const express = require('express');
const bcrypt = require("bcrypt");

let users = require('../data/users');

exports.dropdown_list = async function(req, res, next) {
  res.locals.teams = await getTeamList();
  res.locals.leagues = await getLeagueList();
  next();
}

exports.getHomePage = function (req, res, next) {
  res.render('home');
}

exports.getLoginPage = function (req, res, next) {
  res.render('login');
}

// exports.confirmLogin = function (req, res, next) {

//   if(users[req.body.username]) {
// 		//Check Password with bcrypt
// 		if(bcrypt.compareSync(req.body.password, users[req.body.username].password)){
// 			//req.session.user = {username: req.body.username};
// 			res.render('home');
// 		}else{
// 			res.render('login', {pwError : "Incorrect Password"});//redirects to password error page
// 		}
	
// 	}else{
// 		res.render('login', {nameError : "Incorrect Username"});//redirects to username error page
// 	}
// }

exports.getSignUpPage = function (req, res, next) {
  res.render('signup');
}


exports.getAdminPage = function (req, res, next) {
  res.render('admin');
}

function getTeamList() {
  return Team.find({}, "team_name").exec();
};

function getLeagueList() {
  return League.find({}, "name").exec();
};




