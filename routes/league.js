const express = require('express');
const router = express.Router();

// GET league page.
router.get('/league', function(req, res) {
  res.redirect('/league');
});

module.exports = router;