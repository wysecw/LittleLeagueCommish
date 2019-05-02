const mongoose = require("mongoose");
let Schema = mongoose.Schema;

/**
 * Model for creating player documents
 */

let PlayerSchema = new Schema({
  first_name: String,
  last_name: String,
  parent_name: String,
  address: String,
  phone_number: String, //TODO validator or helper
  dob: Date,
  age: Number //TODO calculated with virtual helper at later date
});

//virtual function for full name

//virtual function for age

//virtual for team url

module.exports = mongoose.model("Player", PlayerSchema);
