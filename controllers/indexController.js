//controller pages hold the functions, queries etc.
const League = require('../models/league');
const Team = require('../models/team');

exports.dropdown_list = function(req, res, next){
    Team.find({}, 'team_name', function(err,result){
        if(err){console.log(err)};
        return result;
    }).then(League.find({}, 'name',function(err, result){
        if(err){console.log(err)};
        return result;
    })).then(result=>
        res.render('home', {result: result})
    );
};