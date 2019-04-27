const mongoose = require("mongoose");
let Schema = mongoose.Schema;

let UserSchema = new Schema({
  username: String,
  password: String,
  firstname: String,
  lastname: String,
  email: String,
  phone_number: String,
  address: String,
  admin: Boolean
});

//virtual function for full name

//virtual function for age

//virtual for team url

module.exports = mongoose.model("User", UserSchema);
