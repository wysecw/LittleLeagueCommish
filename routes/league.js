//router page, tells express what to do based on the end point and GET or POST

const express = require('express');
const router = express.Router();
const league_controller = require('../controllers/leagueController');

// GET league page.
router.get('/league', league_controller.league_list);


module.exports = router;