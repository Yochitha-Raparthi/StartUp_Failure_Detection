require("dotenv").config();

const { generateAIAnalysis } = require("./services/groqService");

async function test() {

    const result = await generateAIAnalysis(
        "Say Hello in JSON."
    );

    console.log(result);

}

test();