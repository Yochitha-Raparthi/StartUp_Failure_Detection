import { useState, useContext, useEffect } from "react";
import axios from "axios";
import "../styles/projectForm.css";
import { ProjectContext } from "../context/ProjectContext";

function ProjectForm() {

    const {
        project,
        setProject,
        setAnalysis
    } = useContext(ProjectContext);

    const [formData, setFormData] = useState({
        startupName: "",
        industry: "",
        businessModel: "",
        targetMarket: "",
        budget: "",
        description: "",
    });

    const [success, setSuccess] = useState(false);
    const [loading, setLoading] = useState(false);


    // ==========================================
    // LOAD PREVIOUS PROJECT
    // ==========================================

    useEffect(() => {

        if (project) {
            setFormData(project);
        }

    }, [project]);


    // ==========================================
    // INPUT CHANGE
    // ==========================================

    const handleChange = (e) => {

        const updatedData = {
            ...formData,
            [e.target.name]: e.target.value,
        };

        setFormData(updatedData);
        setProject(updatedData);

    };


    // ==========================================
    // RESET
    // ==========================================

    const handleReset = () => {

        const emptyProject = {
            startupName: "",
            industry: "",
            businessModel: "",
            targetMarket: "",
            budget: "",
            description: "",
        };

        setFormData(emptyProject);
        setProject(null);
        setAnalysis(null);
        setSuccess(false);

    };


    // ==========================================
    // SUBMIT PROJECT
    // ==========================================

    const handleSubmit = async (e) => {

        e.preventDefault();

        setLoading(true);
        setSuccess(false);

        try {

            console.log("=================================");
            console.log("PROJECT SUBMISSION STARTED");
            console.log("=================================");

            console.log("Project Data:");
            console.log(formData);


            // ==========================================
            // 1. GENERATE MAIN AI ANALYSIS
            // ==========================================

            console.log("=================================");
            console.log("STARTING MAIN AI ANALYSIS");
            console.log("=================================");

            const aiResponse = await axios.post(
                "http://localhost:5000/api/ai/analyze",
                formData
            );

            const aiAnalysis = aiResponse.data;

            console.log("=================================");
            console.log("MAIN AI ANALYSIS RECEIVED");
            console.log("=================================");

            console.log(aiAnalysis);


            // ==========================================
            // 2. STORE PROJECT
            // ==========================================

            setProject(formData);


            // ==========================================
            // 3. GENERATE STRATEGIC RECOMMENDATIONS
            // ==========================================

            console.log("=================================");
            console.log("STARTING LANGGRAPH RECOMMENDATIONS");
            console.log("=================================");

            const recommendationResponse = await axios.post(
                "http://localhost:5000/api/ai/recommend",
                {
                    project: formData,

                    market_analysis:
                        aiAnalysis.market_analysis,

                    competitor_analysis:
                        aiAnalysis.competitor_analysis,

                    risk_assessment:
                        aiAnalysis.risk_assessment,

                    swot_analysis:
                        aiAnalysis.swot_analysis,

                    feasibility_assessment:
                        aiAnalysis.feasibility_assessment
                }
            );

            const recommendationData =
                recommendationResponse.data;

            console.log("=================================");
            console.log("LANGGRAPH RECOMMENDATIONS RECEIVED");
            console.log("=================================");

            console.log(recommendationData);


            // ==========================================
            // 4. COMBINE ALL ANALYSIS
            // ==========================================

            const finalAnalysis = {

                ...aiAnalysis,

                problem_identification:
                    recommendationData.problem_identification,

                mitigation_strategies:
                    recommendationData.mitigation_strategies,

                improvement_suggestions:
                    recommendationData.improvement_suggestions,

                strategic_recommendations:
                    recommendationData.strategic_recommendations

            };


            // ==========================================
            // 5. STORE COMPLETE ANALYSIS
            // ==========================================

            setAnalysis(finalAnalysis);


            // ==========================================
            // 6. DISPLAY FINAL RESULT
            // ==========================================

            console.log("=================================");
            console.log("FINAL ANALYSIS");
            console.log("=================================");

            console.log(
                JSON.stringify(
                    finalAnalysis,
                    null,
                    2
                )
            );


            // ==========================================
            // 7. SUCCESS MESSAGE
            // ==========================================

            setSuccess(true);

            setTimeout(() => {

                setSuccess(false);

            }, 3000);

        } catch (error) {

            console.error("=================================");
            console.error("PROJECT ANALYSIS ERROR");
            console.error("=================================");

            console.error(error);

            if (error.response) {

                console.error(
                    "Backend Response:",
                    error.response.data
                );

            }

        } finally {

            setLoading(false);

        }

    };


    return (

        <div className="form-container">

            <h2>Project Submission</h2>


            {/* ==========================================
                SUCCESS MESSAGE
            ========================================== */}

            {success && (

                <div className="success-banner">

                    <span>✔</span>

                    <span>
                        AI Analysis Completed Successfully
                    </span>

                </div>

            )}


            {/* ==========================================
                LOADING MESSAGE
            ========================================== */}

            {loading && (

                <div className="success-banner">

                    <span>
                        Generating AI analysis and recommendations...
                    </span>

                </div>

            )}


            <form onSubmit={handleSubmit}>

                <div className="project-grid">


                    {/* ==========================================
                        STARTUP NAME
                    ========================================== */}

                    <div className="form-group">

                        <label>
                            Startup Name
                        </label>

                        <input
                            type="text"
                            name="startupName"
                            placeholder="Enter Startup Name"
                            value={formData.startupName}
                            onChange={handleChange}
                            required
                        />

                    </div>


                    {/* ==========================================
                        INDUSTRY
                    ========================================== */}

                    <div className="form-group">

                        <label>
                            Industry
                        </label>

                        <select
                            name="industry"
                            value={formData.industry}
                            onChange={handleChange}
                            required
                        >

                            <option value="">
                                Select Industry
                            </option>

                            <option>Technology</option>
                            <option>Healthcare</option>
                            <option>Education</option>
                            <option>Finance</option>
                            <option>E-Commerce</option>
                            <option>Agriculture</option>
                            <option>Retail</option>
                            <option>Food Delivery</option>

                        </select>

                    </div>


                    {/* ==========================================
                        BUSINESS MODEL
                    ========================================== */}

                    <div className="form-group">

                        <label>
                            Business Model
                        </label>

                        <select
                            name="businessModel"
                            value={formData.businessModel}
                            onChange={handleChange}
                            required
                        >

                            <option value="">
                                Select Business Model
                            </option>

                            <option>B2B</option>
                            <option>B2C</option>
                            <option>C2C</option>
                            <option>SaaS</option>
                            <option>Marketplace</option>
                            <option>Subscription</option>
                            <option>Freemium</option>

                        </select>

                    </div>


                    {/* ==========================================
                        TARGET MARKET
                    ========================================== */}

                    <div className="form-group">

                        <label>
                            Target Market
                        </label>

                        <input
                            type="text"
                            name="targetMarket"
                            placeholder="Students, Hospitals..."
                            value={formData.targetMarket}
                            onChange={handleChange}
                            required
                        />

                    </div>


                    {/* ==========================================
                        BUDGET
                    ========================================== */}

                    <div className="form-group">

                        <label>
                            Estimated Budget (₹)
                        </label>

                        <input
                            type="number"
                            name="budget"
                            placeholder="Enter Budget"
                            value={formData.budget}
                            onChange={handleChange}
                            required
                        />

                    </div>


                    {/* ==========================================
                        DESCRIPTION
                    ========================================== */}

                    <div className="form-group full-width">

                        <label>
                            Project Description
                        </label>

                        <textarea
                            rows="6"
                            name="description"
                            placeholder="Describe your startup idea..."
                            value={formData.description}
                            onChange={handleChange}
                            required
                        />

                    </div>

                </div>


                {/* ==========================================
                    BUTTONS
                ========================================== */}

                <div className="button-row">

                    <button
                        type="button"
                        className="reset-btn"
                        onClick={handleReset}
                        disabled={loading}
                    >
                        Reset
                    </button>


                    <button
                        type="submit"
                        className="submit-btn"
                        disabled={loading}
                    >

                        {loading
                            ? "Analyzing..."
                            : "Analyze Project"
                        }

                    </button>

                </div>

            </form>

        </div>

    );

}

export default ProjectForm;