const axios = require("axios");

exports.get_champion_by_name = async function (req, res){
    const { championName } = req.params

    const champion = await axios.get(`http://ddragon.leagueoflegends.com/cdn/10.21.1/data/pt_BR/champion/${championName}.json`)
        .then(resp => resp.data)
        .catch(err => err)

   res.json(resp)
}


exports.get_all_champions = async function (req, res){
    const championsObject = await axios.get(`http://ddragon.leagueoflegends.com/cdn/10.21.1/data/pt_BR/champion.json`)
        .then(resp => resp.data.data)
        .catch(err => err)

    const championsArray = Object.values(championsObject)

    const championsWithImages = championsArray.map((champion) => {
      return {
        champion,
        championImage: `http://ddragon.leagueoflegends.com/cdn/img/champion/tiles/${champion.name}_0.jpg`
      }
  })

    res.json(championsWithImages)
}
