const express = require("express");
const axios = require("axios");
const { apiKey }= require("./../../../secrets.json")
let router = express.Router();

router.get('/:summonerName', async (req, res) => {
    const summoner = await getSummonerByName(req.params.summonerName, apiKey)
    const summonerInfo = await getSummonerInfoById(summoner.id, apiKey)

    const allSummonerInfo = {
        "summoner": summoner,
        "flex": summonerInfo[0],
        "solo": summonerInfo[1],
    }

    res.send(allSummonerInfo)
})

router.get('/', (req, res) => {
    res.send("Summoner Page")
})

async function getSummonerByName(name, apiKey){
    const resp = await axios.get(`https://br1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${name}?api_key=${apiKey}`)
        .then(resp => resp.data)
        .catch(err => err)

    return resp
}

async function getSummonerInfoById(id, apiKey){
    const resp = await axios.get(`https://br1.api.riotgames.com/lol/league/v4/entries/by-summoner/${id}?api_key=${apiKey}`)
        .then(resp => resp.data)
        .catch(err => err)

    return resp
}

module.exports = router;
