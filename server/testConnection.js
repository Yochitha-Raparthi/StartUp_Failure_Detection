const pool = require("./config/db");

async function testConnection() {
    try {
        await pool.query("SELECT NOW()");
        console.log("✅ PostgreSQL Connected Successfully!");
    } catch (err) {
        console.error("❌ Connection Error:", err.message);
    } finally {
        process.exit();
    }
}

testConnection();