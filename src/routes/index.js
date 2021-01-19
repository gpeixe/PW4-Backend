const express = require("express");
const router = express.Router();

const championRoute = require('./championRoute')
const summonerRoute = require('./summonerRoute')

router.use('/champion', championRoute)
router.use('/summoner', summonerRoute)

module.exports = router