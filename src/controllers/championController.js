const axios = require("axios");

exports.get_champion_by_name = async function (req, res){
    const { championName } = req.params

    let champion = await axios.get(`http://ddragon.leagueoflegends.com/cdn/10.21.1/data/en_US/champion/${championName}.json`)
        .then(resp => resp.data.data)
        .catch(err => err)

   champion = champion[championName]

   champion['skins'].forEach( skin => {
      skin['skinImage'] = `http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${champion.id}_${skin.num}.jpg`
    });

   champion['tileImage'] = `http://ddragon.leagueoflegends.com/cdn/img/champion/tiles/${champion.id}_0.jpg`
   champion['splashImage'] = `http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champion.id}_0.jpg`

   champion["spells"].forEach (spell => {
      const spellKey = spell.id.split("").pop()
      spell["image"] = `http://ddragon.leagueoflegends.com/cdn/11.2.1/img/spell/${champion.id}${spellKey}.png`
  })

  const championDTO = {
    id: champion.id,
    name: champion.name,
    title: champion.title,
    skins: champion.skins,
    tileImage: champion.tileImage,
    splashImage: champion.splashImage,
    spells: champion.spells,
    lore: champion.lore,
    allytips: champion.allytips ,
    enemytips: champion.enemytips,
    tags: champion.tags,
    info: champion.info,
    stats:champion.stats
  }

   res.json(championDTO)

}


exports.get_all_champions = async function (req, res){
    const champions = await axios.get(`http://ddragon.leagueoflegends.com/cdn/10.21.1/data/en_US/champion.json`)
        .then(resp => Object.values(resp.data.data))
        .catch(err => err)

    const championsDTO = champions.map((champion) => {
      return {
        id: champion.id,
        name: champion.name,
        key: champion.key,
        image: `http://ddragon.leagueoflegends.com/cdn/img/champion/tiles/${champion.id}_0.jpg`,
        title: champion.title,
        blurb: champion.blurb,
        tags: champion.tags
      }
    })

    res.json(championsDTO)
}
