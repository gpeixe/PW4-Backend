const express = require("express");
const router = express.Router();

const summoner_controller =  require('../controllers/summonerController')

router.get("/:summonerName", summoner_controller.get_summoner_profile_by_name)

module.exports = router