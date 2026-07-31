const express = require("express");

const router = express.Router();

const {

    getMarketAnalysis,

    getCompetitors

} = require("../controllers/analysisController");

router.get("/market/:industry", getMarketAnalysis);

router.get("/competitors/:industry", getCompetitors);

module.exports = router;