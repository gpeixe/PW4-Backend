const axios = require("axios");

exports.get_champion_by_name = async function (req, res){
    const { championName } = req.params

    const champion = await axios.get(`http://ddragon.leagueoflegends.com/cdn/10.21.1/data/pt_BR/champion/${championName}.json`)
        .then(resp => Object.values(resp.data.data).pop())
        .catch(err => err)


   champion['skins'].forEach( skin => {
      skin['skinImage'] = `http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champion.name}_${skin.num}.jpg`
    });

   champion['tileImage'] = `http://ddragon.leagueoflegends.com/cdn/img/champion/tiles/${champion.name}_0.jpg`
   champion['splashImage'] = `http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champion.name}_0.jpg`
    
   res.json(champion)
}


exports.get_all_champions = async function (req, res){
    const championsObject = await axios.get(`http://ddragon.leagueoflegends.com/cdn/10.21.1/data/pt_BR/champion.json`)
        .then(resp => resp.data.data)
        .catch(err => err)

    const championsArray = Object.values(championsObject)

    const championsWithCardImage = championsArray.map((champion) => {
      const name = champion.name

      return {
        champion,
        image: `http://ddragon.leagueoflegends.com/cdn/img/champion/tiles/${name}_0.jpg`,
      }
  })

    res.json(championsWithCardImage)
}
