// const express = require("express");

// const router = express.Router();

// router.post("/submit", (req, res) => {

//     console.log("Received Project Data:");

//     console.log(req.body);

//     res.status(200).json({
//         success: true,
//         message: "Project received successfully!"
//     });

// });

// module.exports = router;
const express = require("express");

const router = express.Router();

const {
    submitProject
} = require("../controllers/projectController");

router.post("/submit", submitProject);

module.exports = router;