//router page, tells express what to do based on the end point and GET or POST
const express = require('express');
const router = express.Router();

// GET coach page.
router.get('/coach', function(req, res) {
  res.redirect('/coach');
});

module.exports = router;