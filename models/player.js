const mongoose = require("mongoose");


let playerSchema = new mongoose.Schema({
name: String,
parentName: String,
address: String,
dob: Date,
age: Number //calculated??
});

module.exports = mongoose.model('Player', playerSchema);
