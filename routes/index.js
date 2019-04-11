//router page, tells express what to do based on the end point and GET or POST

let express = require('express');
let router = express.Router();
const index_controller = require('../controllers/indexController');

// GET home page.
router.get('/', index_controller.dropdown_list);

module.exports = router;