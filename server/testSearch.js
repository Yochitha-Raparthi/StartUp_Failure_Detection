require("dotenv").config();

const { searchStartupInfo } = require("./services/searchService");

async function test() {

    const project = {

        industry: "Healthcare",

        businessmodel: "SaaS",

        budget: "1500000",

        targetmarket: "Hospitals",

        description: "AI based disease prediction platform"

    };

    const result = await searchStartupInfo(project);

    console.log(JSON.stringify(result, null, 2));

}

test();