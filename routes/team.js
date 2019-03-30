const express = require('express');
const router = express.Router();
const team_controller = require('../controllers/teamController');

// GET team page.
router.get('/team', team_controller.team_list);


module.exports = router;