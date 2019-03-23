const mongoose = require("mongoose");
let Schema = mongoose.Schema;
let LeagueSchema = new Schema({
    name: String,
    teams: [{type: Schema.Types.ObjectId, ref: 'Team'}],
    director: String //name of the league director
    });
    
//helper for league standings????

//helper for url


module.exports = mongoose.model('League', LeagueSchema);