let Users = require("../models/users");
const bcrypt = require("bcrypt");
//TODO username param and make unigue

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
      res.redirect("/account/" + req.body.username);
    } else {
      res.render("login", { pwError: "Incorrect Password" }); //redirects to password error page
    }
  });
};

exports.displayAccount = function(req, res, next) {
  Users.findOne({ username: req.params.username }, function(err, result) {
    if (err) {
      console.log(err);
      res.render("500");
    }
    res.render("account", { body: result });
  });
};

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
