const express = require('express');
const cors = require("cors")

const app = express();
const summonerRoute = require("./routes/summoner/summoner.js")
const championRoute = require("./routes/champion/champion.js")

app.use(cors())

app.listen(3000, console.log("Listening on 8080"))

app.get("/", (req, res) => {
    res.send("Home Page")
})

app.use("/summoner", summonerRoute)
app.use("/champion", championRoute)
