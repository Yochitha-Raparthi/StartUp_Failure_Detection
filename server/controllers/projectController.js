const pool = require("../config/db");

const submitProject = async (req, res) => {

    try {

        const {
            startupName,
            industry,
            businessModel,
            targetMarket,
            budget,
            description
        } = req.body;

        const query = `
            INSERT INTO projects
            (
                startup_name,
                industry,
                business_model,
                target_market,
                budget,
                description
            )
            VALUES($1,$2,$3,$4,$5,$6)
            RETURNING *;
        `;

        const values = [
            startupName,
            industry,
            businessModel,
            targetMarket,
            budget,
            description
        ];

        const result = await pool.query(query, values);

        res.status(201).json({
            success: true,
            message: "Project stored successfully!",
            data: result.rows[0]
        });

    } catch (error) {

        console.error(error);

        res.status(500).json({
            success: false,
            message: "Database Error"
        });

    }

};

module.exports = {
    submitProject
};