const mongoose = require("mongoose");
let Schema = mongoose.Schema;

/**
 * Model for creating coach documents
 */

let CoachSchema = new Schema({
  first_name: String,
  last_name: String,
  address: String,
  phone_number: String //TODO validator or helper
});

//TODO virtual function for full name

module.exports = mongoose.model("Coach", CoachSchema);
