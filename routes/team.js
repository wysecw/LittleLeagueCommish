const express = require('express');
const router = express.Router();

// GET team page.
router.get('/team', function(req, res) {
    console.log("show team");
  res.redirect('team');
});

module.exports = router;