const axios = require("axios");
const { riotApiKey }= require("./../../secrets.json")

exports.get_summoner_profile_by_name = async function (req,  res){

    const { summonerName }= req.params

    const summoner = await axios.get(`https://br1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${summonerName}?api_key=${riotApiKey}`)
        .then(resp => resp.data)
        .catch(err => err)

    summoner["iconImage"] = `http://ddragon.leagueoflegends.com/cdn/11.2.1/img/profileicon/${summoner.profileIconId}.png`

    const rankedQueues = await axios.get(`https://br1.api.riotgames.com/lol/league/v4/entries/by-summoner/${summoner.id}?api_key=${riotApiKey}`)
        .then(resp => resp.data)
        .catch(err => err)

        const flexQueue =  rankedQueues[0]
        const soloQueue = rankedQueues[1]
    
        
        const profile = {
            summoner,
            flexQueue,
            soloQueue,
        }

    res.json(profile)
}
