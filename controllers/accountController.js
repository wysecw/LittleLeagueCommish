//imports
const Users = require("../models/users");
const bcrypt = require("bcrypt");

/**
 * User login- finds user name in database and verifies password
 */
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
      res.redirect("/account/" + req.body.username);
    } else {
      res.render("login", { pwError: "Incorrect Password" }); //redirects to password error page
    }
  });
};
/**
 * After login credentials have been verified retrieves account info and sends it to account page for rendering.
 */
exports.displayAccount = function(req, res, next) {
  Users.findOne({ username: req.params.username }, function(err, result) {
    if (err) {
      console.log(err);
      res.render("500");
    }
    res.render("account", { body: result });
  });
};
/**
 * Takes new user information, creates a new user doc, checks if username is taken, then saves user document to database
 */
exports.createAccount = async function(req, res, next) {
  let newUser = new Users({
    username: req.body.username,
    password: req.body.password,
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    email: req.body.email,
    phone_number: req.body.phone_number,
    address: req.body.address,
    city: req.body.city,
    state: req.body.state,
    zip: req.body.zip,
    admin: false
  });
  const userExists = await Users.exists(req.body.username);

  if (userExists) {
    res.render("signup", { body: newUser });
  } else {
    await newUser.save((err, user) => {
      if (err) res.status(500).send(err);
      res.render("account", { message: "Account created successfully" });
    });
  }
};
