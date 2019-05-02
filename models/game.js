const mongoose = require("mongoose");
let Schema = mongoose.Schema;

/**
 * Model for creating game documents
 */
let GameSchema = new Schema({
  game_date: {
    type: Date,
    get: date => date.toDateString()
  },
  game_time: String,
  field_number: Number,
  visitors: {
    team: { type: Schema.Types.ObjectId, ref: "Team" },
    score: Number
  },
  home: {
    team: { type: Schema.Types.ObjectId, ref: "Team" },
    score: Number
  }
});

//virtual function to calc winner/loser

module.exports = mongoose.model("Game", GameSchema);
