# Smart Failure Detection System

## Overview

Smart Failure Detection System is an AI-powered web application that helps entrepreneurs evaluate startup ideas before implementation. The application analyzes market conditions, competitor information, business risks, SWOT factors, project feasibility, and generates AI-powered strategic recommendations to support better business decisions.

The application is built using React, Node.js, Express.js, PostgreSQL (Neon), Groq AI, and LangGraph.

---

## Features

### Project Submission

- Submit startup information
- Industry selection
- Business model selection
- Budget estimation
- Target market
- Project description

### Market Analysis

- Market growth analysis
- TAM, SAM and SOM visualization
- Market opportunity score
- Market trend charts
- AI-generated market insights

### Competitor Analysis

- Competitor comparison table
- Competition level
- Market share visualization
- Competitor score charts
- AI competitor analysis

### Risk Assessment

- Overall risk score
- Success probability
- Financial risk assessment
- Market risk assessment
- Technical risk assessment
- Execution risk assessment
- AI-based project risk evaluation

### SWOT Analysis

- AI-generated Strengths analysis
- AI-generated Weaknesses analysis
- AI-generated Opportunities analysis
- AI-generated Threats analysis
- Startup-specific SWOT evaluation based on project information

### Project Feasibility Assessment

- Technical feasibility assessment
- Financial feasibility assessment
- Market feasibility assessment
- Operational feasibility assessment
- Overall project feasibility classification

### AI Recommendations

- AI-generated recommendations based on project analysis
- Recommendations based on market conditions, competition, risks, and feasibility
- Problem identification based on project analysis
- Risk mitigation strategies
- Project improvement suggestions
- Strategic recommendations
- Priority-based recommendation generation

### Strategic Reasoning with LangGraph

The system uses a LangGraph-based workflow to perform structured multi-step strategic reasoning.

The recommendation workflow consists of four sequential stages:

1. **Problem Identification**
   - Identifies the major problems affecting the startup.
   - Uses project information, risk assessment, SWOT analysis, and feasibility results.

2. **Risk Mitigation**
   - Generates practical strategies to reduce or control identified risks.
   - Prioritizes risks based on their impact.

3. **Improvement Suggestions**
   - Generates project-specific improvements.
   - Uses identified problems, SWOT factors, and feasibility results.

4. **Strategic Recommendations**
   - Combines the identified problems, mitigation strategies, and improvement suggestions.
   - Generates final actionable recommendations for the startup.

The workflow follows:

```text
Project Information
        |
        v
Existing Project Analysis
        |
        v
Problem Identification
        |
        v
Risk Mitigation Strategies
        |
        v
Improvement Suggestions
        |
        v
Strategic Recommendations
