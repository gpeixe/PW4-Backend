const express = require("express");
const router = express.Router();

//Rotas
const summonerRoute = require("./summoner/summoner.js")
const championRoute = require("./champion/champion.js")

router.use("/summoner", summonerRoute)
router.use("/champion", championRoute)
router.use("/", (req, res) => res.send("Home Page!"))

module.exports = router
