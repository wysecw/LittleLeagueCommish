//controller pages hold the functions, queries etc.

const Team = require('../models/team');
const League = require('../models/league');

exports.dropdown_list = function(req, res, next){
    Team.find({}, 'team_name', function(err, result){
        if(err){console.log(err)};
        res.render('/', {league_list: result});
    }
)};