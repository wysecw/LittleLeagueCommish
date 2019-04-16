//router page, tells express what to do based on the end point and GET or POST
const express = require('express');
const router = express.Router();
const team_controller = require('../controllers/teamController');

// GET team page.
router.get('/team/:team_name', team_controller.team_detail);
router.get('/team', team_controller.team_list);




module.exports = router;