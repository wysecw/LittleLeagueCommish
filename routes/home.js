//router page, tells express what to do based on the end point and GET or POST
const express = require('express');
const router = express.Router();

//import controllers
const player_controller = require('../controllers/playerController');
const team_controller = require('../controllers/teamController');
const league_controller = require('../controllers/leagueController');
const coach_controller = require('../controllers/coachController');
const game_controller = require('../controllers/gameController');


//get the home page
router.get('/', function(req, res, next) {
	res.render('home');
})

//player routes
//GET request for creating player
router.get('/player/create', player_controller.player_create_get);
//POST request for creating player
router.post('/player/create', player_controller.player_create_post);
// GET request to delete player.
router.get('/player/:id/delete', player_controller.player_delete_get);
// POST request to delete player.
router.post('/player/:id/delete', player_controller.player_delete_post);
// GET request to update player.
router.get('/player/:id/update', player_controller.player_update_get);
// POST request to update player.
router.post('/player/:id/update', player_controller.player_update_post);
// GET request for one player.
router.get('/player/:id', player_controller.player_detail);
// GET request for list of all players.
router.get('/player', player_controller.player_list);

//coach routes
//GET request for creating coach
router.get('/coach/create', coach_controller.coach_create_get);
//POST request for creating coach
router.post('/coach/create', coach_controller.coach_create_post);
// GET request to delete coach.
router.get('/coach/:id/delete', coach_controller.coach_delete_get);
// POST request to delete coach.
router.post('/coach/:id/delete', coach_controller.coach_delete_post);
// GET request to update coach.
router.get('/coach/:id/update', coach_controller.coach_update_get);
// POST request to update coach.
router.post('/coach/:id/update', coach_controller.coach_update_post);
// GET request for one coach.
router.get('/coach/:id', coach_controller.coach_detail);
// GET request for list of all coachs.
router.get('/coach', coach_controller.coach_list);

//team routes
//GET request for creating team
router.get('/team/create', team_controller.team_create_get);
//POST request for creating team
router.post('/team/create', team_controller.team_create_post);
// GET request to delete team.
router.get('/team/:id/delete', team_controller.team_delete_get);
// POST request to delete team.
router.post('/team/:id/delete', team_controller.team_delete_post);
// GET request to update team.
router.get('/team/:id/update', team_controller.team_update_get);
// POST request to update Book.
router.post('/team/:id/update', team_controller.team_update_post);
// GET request for one team.
router.get('/team/:id', team_controller.team_detail);
// GET request for list of all teams.
router.get('/team', team_controller.team_list);

//league routes
//GET request for creating league
router.get('/league/create', league_controller.league_create_get);
//POST request for creating league
router.post('/league/create', league_controller.league_create_post);
// GET request to delete league.
router.get('/league/:id/delete', league_controller.league_delete_get);
// POST request to delete league.
router.post('/league/:id/delete', league_controller.league_delete_post);
// GET request to update league.
router.get('/league/:id/update', league_controller.league_update_get);
// POST request to update Book.
router.post('/league/:id/update', league_controller.league_update_post);
// GET request for one league.
router.get('/league/:id', league_controller.league_detail);
// GET request for list of all leagues.
router.get('/league', league_controller.league_list);

//game routes
//GET request for creating game
router.get('/game/create', game_controller.game_create_get);
//POST request for creating game
router.post('/game/create', game_controller.game_create_post);
// GET request to delete game.
router.get('/game/:id/delete', game_controller.game_delete_get);
// POST request to delete game.
router.post('/game/:id/delete', game_controller.game_delete_post);
// GET request to update game.
router.get('/game/:id/update', game_controller.game_update_get);
// POST request to update Book.
router.post('/game/:id/update', game_controller.game_update_post);
// GET request for one game.
router.get('/game/:id', game_controller.game_detail);
// GET request for list of all games.
router.get('/game', game_controller.game_list);

module.exports = router;



