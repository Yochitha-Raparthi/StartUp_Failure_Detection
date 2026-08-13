# Smart Failure Detection System

## Overview

Smart Failure Detection System is an AI-powered web application that helps entrepreneurs evaluate startup ideas before implementation. The application analyzes market conditions, competitor information, business risks, SWOT factors, project feasibility, and generates AI-powered recommendations to support better business decisions.

The application is built using React, Node.js, Express.js, PostgreSQL (Neon), and the Groq AI API.

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
- AI-generated recommendations based on the project analysis
- Recommendations based on market conditions, competition, risks, and feasibility

### Dashboard
- Overall project score
- Market readiness score
- Innovation score
- Investment score
- Summary of the project evaluation

---

## Technology Stack

### Frontend
- React.js
- Vite
- React Router
- Axios
- Recharts
- CSS

### Backend
- Node.js
- Express.js

### Database
- PostgreSQL
- Neon Database

### AI Integration
- Groq API
- Llama 3.3 70B

### Deployment
- Vercel (Frontend)
- Render (Backend)

---

## Project Structure

```text
StartUp_Failure_Detection
│
├── client
│   ├── src
│   ├── public
│   └── package.json
│
├── server
│   ├── config
│   ├── controllers
│   ├── routes
│   ├── services
│   ├── server.js
│   └── package.json
│
├── database.sql
├── README.md
└── .gitignore
