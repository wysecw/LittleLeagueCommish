/**Imports */
const express = require("express");
const router = express.Router();
const index_controller = require("../controllers/indexController");
const team_controller = require("../controllers/teamController");
const league_controller = require("../controllers/leagueController");
const accountController = require("../controllers/accountController");
const player_controller = require("../controllers/playerController");
const coach_controller = require("../controllers/coachController");
const game_controller = require("../controllers/gameController");

/**
 * Router- calls controller function based on end point
 */
router.use(index_controller.dropdown_list);

router.get("/", index_controller.getHomePage);

router.get("/login", index_controller.getLoginPage);

router.post("/login", accountController.confirmLogin);

router.get("/signup", index_controller.getSignUpPage);

router.post("/signup", accountController.createAccount);

router.get("/account/:username", accountController.displayAccount);

router.get("/team/:team_name", team_controller.team_detail);

router.get("/league/:name", league_controller.league_detail);

module.exports = router;
