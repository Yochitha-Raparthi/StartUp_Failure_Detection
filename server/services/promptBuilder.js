function buildPrompt(project, market, competitors) {

    return `
You are an expert Startup Business Consultant and Market Intelligence AI.

Analyze the startup professionally.

=========================
PROJECT DETAILS
=========================

Startup Name:
${project.startupname}

Industry:
${project.industry}

Business Model:
${project.businessmodel}

Target Market:
${project.targetmarket}

Budget:
${project.budget}

Description:
${project.description}

=========================
MARKET INFORMATION
=========================

Market Size:
${market.market_size}

Growth Rate:
${market.growth_rate}

Competition:
${market.competition}

Investment Trend:
${market.investment}

TAM:
${market.tam}

SAM:
${market.sam}

SOM:
${market.som}

Market Maturity:
${market.maturity}

=========================
COMPETITOR INFORMATION
=========================

${competitors.map(c => `
Competitor:
${c.competitor_name}

Market Share:
${c.market_share}

Strength:
${c.strength}

Weakness:
${c.weakness}
`).join("\n")}

=========================
TASK
=========================

Analyze everything carefully.

Budget should affect:

• Market Opportunity

• Investment Score

• Success Probability

• Financial Risk

• Recommendation

Target Market should affect:

• Competition

• Opportunity

• Recommendation

Business Model should affect:

• Risk

• Scalability

Description should affect:

• AI Suggestions

• Innovation Score

Return ONLY JSON.

{
  "marketAnalysis": {
    "marketOpportunity":"",
    "growthPotential":"",
    "competitionLevel":"",
    "investmentTrend":"",
    "marketFitScore":0
  },

  "competitorAnalysis": {
    "mainCompetitor":"",
    "competitiveScore":0,
    "advantages":[],
    "disadvantages":[]
  },

  "riskAssessment": {
    "financialRisk":0,
    "marketRisk":0,
    "technicalRisk":0,
    "overallRisk":0
  },

  "dashboard": {
    "successProbability":0,
    "investmentScore":0,
    "innovationScore":0
  },

  "recommendations":[
  ]
}

Do not write explanations.

Return valid JSON only.
`;
}

module.exports = buildPrompt;