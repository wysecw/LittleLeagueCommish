const express = require('express');
const router = express.Router();

// GET coach page.
router.get('/coach', function(req, res) {
  res.redirect('/coach');
});

module.exports = router;