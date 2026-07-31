const db = require("../config/db");

// Get Market Analysis
exports.getMarketAnalysis = async (req, res) => {
    try {

        const industry = req.params.industry;

        const result = await db.query(
            "SELECT * FROM market_data WHERE industry = $1",
            [industry]
        );

        if (result.rows.length === 0) {
            return res.status(404).json({
                message: "No Market Data Found"
            });
        }

        res.json(result.rows[0]);

    } catch (err) {

        console.log(err);

        res.status(500).json({
            message: "Server Error"
        });

    }
};


// Get Competitors

exports.getCompetitors = async (req, res) => {

    try {

        const industry = req.params.industry;

        const result = await db.query(

            "SELECT * FROM competitors WHERE industry=$1",

            [industry]

        );

        res.json(result.rows);

    } catch (err) {

        console.log(err);

        res.status(500).json({

            message: "Server Error"

        });

    }

};