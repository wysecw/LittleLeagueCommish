const express = require('express');
const router = express.Router();
const league_controller = require('../controllers/leagueController');

// GET league page.
router.get('/league', league_controller.league_list);


module.exports = router;