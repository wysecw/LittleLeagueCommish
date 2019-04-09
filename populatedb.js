let Player = require('./models/player');
let Coach = require('./models/coach');
let Team = require('./models/team');
let League = require('./models/league');
let Game = require('./models/game');
let async = require('async');
// Set up mongoose connection
let mongoose = require('mongoose');
let conString = 'mongodb://farquad:capstone2019@ds121026.mlab.com:21026/little-league-commish';

mongoose.connect(conString, { useNewUrlParser: true }).then(
	() => {console.log('Mongo Connection Successful')},
	err => {console.log(err)}
); 
/*
let players = [];
let coaches = [];
let teams = [];
let leagues = [];
let games = [];

function playerCreate(first_name, last_name, parent_name, address, phone_number, dob, age){

    playerDetail = {first_name: first_name,
                    last_name: last_name,
                    parent_name: parent_name,
                    address: address,
                    phone_number: phone_number,
                    dob: dob,
                    age: age};

    let player = new Player(playerDetail);

    player.save(function(err){
        if (err){
            return console.log(err);
        }
        console.log('New Player: ' + player);
        players.push(player);
    });
                
}

function coachCreate(first_name, last_name, address, phone_number){

    coachDetail = {first_name: first_name,
                    last_name: last_name,
                    address: address,
                    phone_number: phone_number};

    let coach = new Coach(coachDetail);

    coach.save(function(err){
        if (err){
            return console.log(err);
        }
        console.log('New Coach: ' + coach);
        coaches.push(coach);
    });
                
}

function gameCreate(date, time, field){

    let gameDetail = {  game_date: date,
                    game_time: time,
                    field_number: field
                    };

    let game = new Game(gameDetail);

    game.save(function(err){
        if (err){
            return console.log(err);
        }
        console.log('New Game: ' + game);
        //games.push(game);
    });
                
}

function teamCreate(team_name, head_coach, assistant_coach){

    let teamDetail = {  team_name: team_name,
                    head_coach: head_coach,
                    assistant_coach: assistant_coach
                    };

    let team = new Team(teamDetail);

    team.save(function(err){
        if (err){
            return console.log(err);
        }
        console.log('New Team: ' + team);
        //teams.push(team);
    });
                
}

function leagueCreate(name, director){

    leagueDetail = {  name: name,
                      director: director
                    };

    let league = new League(leagueDetail);

    league.save(function(err){
        if (err){
            return console.log(err);
        }
        console.log('New League: ' + league);
        leagues.push(league);
    });
                
}



function createPlayers(){
    playerCreate("Test1", "Player1", "Test Parent1", "1 Test St. Test, FL", "111-1111", 2010-1-1, 11);
    playerCreate("Test2", "Player2", "Test Parent2", "2 Test St. Test, FL", "222-2222", 2010-2-2, 12);
    playerCreate("Test3", "Player3", "Test Parent3", "3 Test St. Test, FL", "333-3333", 2010-3-3, 13);
    playerCreate("Test4", "Player4", "Test Parent4", "4 Test St. Test, FL", "444-4444", 2010-4-4, 14);
    playerCreate("Test5", "Player5", "Test Parent5", "5 Test St. Test, FL", "555-5555", 2010-5-5, 15);
    playerCreate("Test6", "Player6", "Test Parent6", "6 Test St. Test, FL", "666-6666", 2010-6-6, 16);
    playerCreate("Test7", "Player7", "Test Parent7", "7 Test St. Test, FL", "777-7777", 2010-7-7, 17);
    playerCreate("Test8", "Player8", "Test Parent8", "8 Test St. Test, FL", "888-8888", 2010-8-8, 18);
}

function createCoaches(){
    coachCreate("Test9", "Coach1", "9 Test St. Test, FL", "999-9999");
    coachCreate("Test10", "Coach2", "10 Test St. Test, FL", "101-0101");
    coachCreate("Test11", "Coach3", "11 Test St. Test, FL", "111-1111");
    coachCreate("Test12", "Coach4", "12 Test St. Test, FL", "121-2121");
    coachCreate("Test13", "Coach5", "13 Test St. Test, FL", "131-3131");
    coachCreate("Test14", "Coach6", "14 Test St. Test, FL", "141-4141");
    coachCreate("Test15", "Coach7", "15 Test St. Test, FL", "151-5151");
    coachCreate("Test16", "Coach8", "16 Test St. Test, FL", "161-6161");
}

function createGames(){
    gameCreate(2019-01-01, "5:30 pm", 1);
    gameCreate(2019-01-01, "7:00 pm", 2);
    gameCreate(2019-01-02, "5:30 pm", 1);
    gameCreate(2019-01-02, "7:00 pm", 2);
}

function createTeams(){
    Coach.find({}, function(err, coaches){
        if(err){return console.log(err)};
        teamCreate("Test Team1", coaches[0], coaches[1]);
        teamCreate("Test Team2", coaches[2], coaches[3]);
        teamCreate("Test Team3", coaches[4], coaches[5]);
        teamCreate("Test Team4", coaches[6], coaches[7]);
    });
}

function createLeagues(){
    leagueCreate("Test League1", "Test Director1");
    leagueCreate("Test League2", "Test Director2");
}

//createPlayers();
//createCoaches();
createGames();
createTeams();
//createLeagues();
*/




//return team and add players
 /*async.parallel({
     team: function(callback){
         Team.find({})
         .exec(callback)
         },
     players: function(callback){
         Player.find({})
         .exec(callback);
        },
    }, function(err, results){
         if(err){return console.log(err)};
         let j = 0;
         for(let k = 0; k < results.team.length; k++){
            for(let i = 0; i < 2; i++){
                results.team[k].roster.push(results.players[j]);
                j++;
            }
            results.team[k].save(function(err){
                if (err){
                    return console.log(err);
                }
                console.log('Great Success');
             })
         }
    })*/

    /*async.parallel({
         team: function(callback){
             Team.find({})
             .exec(callback)
             },
         league: function(callback){
             League.find({})
             .exec(callback)
         }
     },function(err, results){
          if(err){return console.log(err)};
         results.league[0].teams.push(results.team[0]);
         results.league[0].teams.push(results.team[1]);
         results.league[1].teams.push(results.team[2]);
         results.league[1].teams.push(results.team[3]);
         results.league[0].save(function(err){
             if(err){return console.log(err)};
             console.log("League 1 success");
         });
         results.league[1].save(function(err){
             if(err){return console.log(err)};
             console.log("League 2 success");
         });
     })*/
    
 async.parallel({
     team: function(callback){
         Team.find({})
         .exec(callback)
         },
     game: function(callback){
         Game.find({})
         .exec(callback);
        },
    }, function(err, results){
         if(err){return console.log(err)};
         let i =0;
         results.team.forEach(function(elem){
             elem.schedule.push(results.game[i]);
             i++;
             elem.save(function(err){
                if (err){
                    return console.log(err);
                }
                console.log('saved');
              });
         });
         
    })
     
 




