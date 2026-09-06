const axios = require("axios");

const TAVILY_API_KEY = process.env.TAVILY_API_KEY;

async function searchStartupInfo(project) {

    const query = `
Startup Industry: ${project.industry}

Business Model: ${project.businessModel}

Budget: ${project.budget}

Target Market: ${project.targetMarket}

Description:
${project.description}

Find:

1. Current market size
2. Market growth
3. Top competitors
4. Current investment trends
5. Industry challenges
6. Opportunities
`;

    try {

        const response = await axios.post(
            "https://api.tavily.com/search",
            {
                api_key: TAVILY_API_KEY,
                query,
                search_depth: "advanced",
                max_results: 5
            }
        );

        return response.data;

    } catch (error) {

        console.log(error.response?.data || error.message);

        throw error;

    }

}

module.exports = {
    searchStartupInfo
};