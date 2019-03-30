const express = require('express');
const router = express.Router();

// GET player page.
router.get('/player', function(req, res) {
  res.redirect('/player');
});

module.exports = router;