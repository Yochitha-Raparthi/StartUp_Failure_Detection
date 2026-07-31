
const express = require("express");

const router = express.Router();

const {
    submitProject
} = require("../controllers/projectController");

router.post("/submit", submitProject);

module.exports = router;