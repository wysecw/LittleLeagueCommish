const mongoose = require("mongoose");
let Schema = mongoose.Schema;
let TeamSchema = new Schema({
    team_name: String,
    coaches:{
        head_coach: {type: Schema.Types.ObjectId, ref: 'Coach'},
        assistant_coach: {type: Schema.Types.ObjectId, ref: 'Coach'}
    },
    schedule: [{type: Schema.Types.ObjectId, ref: 'Game'}],
    wins: Number,
    losses: Number,
    roster: [{type: Schema.Types.ObjectId, ref: 'Player'}]
    });
    





module.exports = mongoose.model('Team', TeamSchema);