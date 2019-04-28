//router page, tells express what to do based on the end point and GET or POSt
const express = require("express");
const router = express.Router();
const index_controller = require("../controllers/indexController");
const team_controller = require("../controllers/teamController");
const league_controller = require("../controllers/leagueController");
const accountController = require("../controllers/accountController");
// GET home page.

router.use(index_controller.dropdown_list);

router.get("/", index_controller.getHomePage);

router.get("/login", index_controller.getLoginPage);

router.get("/signup", index_controller.getSignUpPage);

router.post("/account", accountController.createAccount);

router.post("/account/:username", accountController.confirmLogin);

router.get("/team/:team_name", team_controller.team_detail);

router.get("/league/:name", league_controller.league_detail);

module.exports = router;
