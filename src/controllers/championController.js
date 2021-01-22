const axios = require("axios");

exports.get_champion_by_name = async function (req, res){
    const { championName } = req.params

    let champion = await axios.get(`http://ddragon.leagueoflegends.com/cdn/10.21.1/data/pt_BR/champion/${championName}.json`)
        .then(resp => resp.data.data)
        .catch(err => err)

   champion = champion[championName]

   champion['skins'].forEach( skin => {
      skin['skinImage'] = `http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champion.name}_${skin.num}.jpg`
    });

   champion['tileImage'] = `http://ddragon.leagueoflegends.com/cdn/img/champion/tiles/${champion.name}_0.jpg`
   champion['splashImage'] = `http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champion.name}_0.jpg`

   res.json(champion)
}


exports.get_all_champions = async function (req, res){
    const champions = await axios.get(`http://ddragon.leagueoflegends.com/cdn/10.21.1/data/pt_BR/champion.json`)
        .then(resp => Object.values(resp.data.data))
        .catch(err => err)

    const championsDTO = champions.map((champion) => {
      return {
        name: champion.name,
        key: champion.key,
        image: `http://ddragon.leagueoflegends.com/cdn/img/champion/tiles/${champion.name}_0.jpg`,
        title: champion.title,
        blurb: champion.blurb,
        tags: champion.tags
      }
    })

    res.json(championsDTO)
}
