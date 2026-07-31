// // const express = require("express");
// // const cors = require("cors");
// // require("dotenv").config();

// // const app = express();

// // app.use(cors());
// // app.use(express.json());

// // app.get("/", (req, res) => {
// //     res.send("Startup Failure Detection API Running");
// // });

// // const PORT = process.env.PORT || 5000;

// // app.listen(PORT, () => {
// //     console.log(`Server running on port ${PORT}`);
// // });
// const analysisRoutes = require("./routes/analysisRoutes");
// const projectRoutes = require("./routes/projectRoutes");
// const aiRoutes = require("./routes/aiRoutes");

// const express = require("express");
// const cors = require("cors");
// require("dotenv").config();
// console.log("GROQ KEY:", process.env.GROQ_API_KEY);
// const app = express();

// app.use(cors());
// app.use(express.json());



// app.use("/api/projects", projectRoutes);
// app.use("/api", analysisRoutes);
// app.use("/api/ai", aiRoutes);

// app.get("/", (req, res) => {
//     res.send("Startup Failure Detection API Running");
// });

// const PORT = process.env.PORT || 5000;

// app.listen(PORT, () => {
//     console.log(`Server running on port ${PORT}`);
// });

require("dotenv").config();

const express = require("express");
const cors = require("cors");

const analysisRoutes = require("./routes/analysisRoutes");
const projectRoutes = require("./routes/projectRoutes");
const aiRoutes = require("./routes/aiRoutes");



const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/projects", projectRoutes);
app.use("/api", analysisRoutes);
app.use("/api/ai", aiRoutes);

app.get("/", (req, res) => {
    res.send("Startup Failure Detection API Running");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});