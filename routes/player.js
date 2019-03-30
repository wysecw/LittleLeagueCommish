//router page, tells express what to do based on the end point and GET or POST
const express = require('express');
const router = express.Router();

// GET player page.
router.get('/player', function(req, res) {
  res.redirect('/player');
});

module.exports = router;