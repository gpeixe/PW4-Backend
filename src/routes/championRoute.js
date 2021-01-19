const express = require("express");
const router = express.Router();

const champion_controller =  require('../controllers/championController')

router.get("/",  champion_controller.get_all_champions)
router.get("/:championName", champion_controller.get_champion_by_name)

module.exports = router