/**Imports */
const express = require("express");
const handlebars = require("express-handlebars");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const indexRouter = require("./routes/index");
const session = require("express-session");
const credential = require("./credentials");
//const homeRouter = require("./routes/home");

//create an instance of express
let app = express();

//tell express to use body-parser for the http request body(req.body)
app.use(bodyParser.urlencoded({ extended: false }));

// Set up mongoose connection to mongoDB
//mongoDB connection string
const conn = credential.mongo.development.db1.connectionString;
//connection options
const options = { useNewUrlParser: true };
//make the connection to the database and log any errors to console
mongoose.connect(conn, options).then(
  () => {
    console.log("Mongo Connection Successful");
  },
  err => {
    console.log(err);
  }
);
// set up handlebars view engine and default layout
app.engine(
  "handlebars",
  handlebars({
    defaultLayout: "main",
    extname: ".handlebars",
    layoutsDir: "views/layouts"
  })
);

app.set("view engine", "handlebars");
//set the port
app.set("port", process.env.PORT || 3000);
//set the working directory
app.use(express.static("public"));
app.use(express.static("views"));

//send all requests to the router
app.use("/", indexRouter);

//no router or handling necessary, just render it
//edit about page directly in about.handlebars
app.get("/about", function(req, res) {
  res.render("about");
});

// 404 catch-all handler (middleware)
app.use(function(req, res, next) {
  res.status(404);
  res.render("404");
});

// 500 error handler (middleware)
app.use(function(err, req, res, next) {
  console.error(err.stack);
  res.status(500);
  res.render("500");
});

//tell express to start listening
app.listen(app.get("port"), function() {
  console.log(
    "Express started on http://localhost:" +
      app.get("port") +
      "; press Ctrl-C to terminate."
  );
});
