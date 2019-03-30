//router page, tells express what to do based on the end point and GET or POST
var express = require('express');
var router = express.Router();

// GET users listing.
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;