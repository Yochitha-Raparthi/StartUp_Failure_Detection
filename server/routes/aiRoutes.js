const express = require("express");
const router = express.Router();

const { generateAnalysis } = require("../controllers/aiController");
const {
    generateRecommendations
} = require("../controllers/recommendationController");
router.post("/analyze", generateAnalysis);
router.post(
    "/recommend",
    generateRecommendations
);
module.exports = router;






