const express = require("express");
const axios = require("axios");
let router = express.Router();

router.get('/:championName', async (req, res) => {
    const resp = await getChampionByName(req.params.championName)
    res.send(resp)
})

router.get('/', async (req, res) => {
    const resp = await getAllChampions()
    res.send(resp)
})

async function getChampionByName(championName){
    const resp = await axios.get(`http://ddragon.leagueoflegends.com/cdn/10.21.1/data/pt_BR/champion/${championName}.json`)
        .then(resp => resp.data)
        .catch(err => err)
    return resp
}

async function getAllChampions(){
    const resp = await axios.get(`http://ddragon.leagueoflegends.com/cdn/10.21.1/data/pt_BR/champion.json`)
        .then(resp => resp.data)
        .catch(err => err)

    console.log(resp)
    return resp
}

module.exports = router;