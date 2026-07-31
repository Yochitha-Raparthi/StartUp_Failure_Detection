const express = require("express");
const router = express.Router();

const { generateAnalysis } = require("../controllers/aiController");

router.post("/analyze", generateAnalysis);

module.exports = router;


