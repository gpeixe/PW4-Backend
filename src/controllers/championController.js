const axios = require("axios");

exports.get_champion_by_name = async function getChampionByName(req, res){
    const { championName } = req.params

    const resp = await axios.get(`http://ddragon.leagueoflegends.com/cdn/10.21.1/data/pt_BR/champion/${championName}.json`)
        .then(resp => resp.data)
        .catch(err => err)

   res.json(resp)
}


exports.get_all_champions = async function (req, res){
    const resp = await axios.get(`http://ddragon.leagueoflegends.com/cdn/10.21.1/data/pt_BR/champion.json`)
        .then(resp => resp.data)
        .catch(err => err)

         res.json(resp)
}
