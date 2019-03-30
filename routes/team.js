const express = require('express');
const router = express.Router();

// GET team page.
router.get('/team', function(req, res) {
  res.redirect('/team');
});

module.exports = router;