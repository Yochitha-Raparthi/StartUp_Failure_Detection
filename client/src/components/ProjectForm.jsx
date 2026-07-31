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

    // Success Banner
    const [success, setSuccess] = useState(false);

    // Load previous values
    useEffect(() => {
        if (project) {
            setFormData(project);
        }
    }, [project]);

    // Input Change
    const handleChange = (e) => {

        const updatedData = {
            ...formData,
            [e.target.name]: e.target.value,
        };

        setFormData(updatedData);

        setProject(updatedData);
    };

    // Reset
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

    // Submit
    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            // Save to PostgreSQL
            await axios.post(
                "https://startup-failure-detection.onrender.com/api/projects/submit",
                formData
            );

            // AI Analysis
            const aiResponse = await axios.post(
                "https://startup-failure-detection.onrender.com/api/ai/analyze",
                formData
            );

            setProject(formData);

            setAnalysis(aiResponse.data);

            console.log(aiResponse.data);

            // Success Banner
            setSuccess(true);

            setTimeout(() => {

                setSuccess(false);

            }, 3000);

        }

        catch (error) {

            console.log(error);

        }

    };

    return (

        <div className="form-container">

            <h2>Project Submission</h2>

            {success && (

                <div className="success-banner">
    <span>✔</span>
    <span>AI Analysis Completed Successfully</span>
</div>

            )}

            <form onSubmit={handleSubmit}>

                <div className="project-grid">

                    {/* Startup Name */}

                    <div className="form-group">

                        <label>Startup Name</label>

                        <input
                            type="text"
                            name="startupName"
                            placeholder="Enter Startup Name"
                            value={formData.startupName}
                            onChange={handleChange}
                            required
                        />

                    </div>

                    {/* Industry */}

                    <div className="form-group">

                        <label>Industry</label>

                        <select
                            name="industry"
                            value={formData.industry}
                            onChange={handleChange}
                            required
                        >

                            <option value="">Select Industry</option>
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

                    {/* Business Model */}

                    <div className="form-group">

                        <label>Business Model</label>

                        <select
                            name="businessModel"
                            value={formData.businessModel}
                            onChange={handleChange}
                            required
                        >

                            <option value="">Select Business Model</option>
                            <option>B2B</option>
                            <option>B2C</option>
                            <option>C2C</option>
                            <option>SaaS</option>
                            <option>Marketplace</option>
                            <option>Subscription</option>
                            <option>Freemium</option>

                        </select>

                    </div>

                    {/* Target Market */}

                    <div className="form-group">

                        <label>Target Market</label>

                        <input
                            type="text"
                            name="targetMarket"
                            placeholder="Students, Hospitals..."
                            value={formData.targetMarket}
                            onChange={handleChange}
                            required
                        />

                    </div>

                    {/* Budget */}

                    <div className="form-group">

                        <label>Estimated Budget (₹)</label>

                        <input
                            type="number"
                            name="budget"
                            placeholder="Enter Budget"
                            value={formData.budget}
                            onChange={handleChange}
                            required
                        />

                    </div>

                    {/* Description */}

                    <div className="form-group full-width">

                        <label>Project Description</label>

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

                <div className="button-row">

                    <button
                        type="button"
                        className="reset-btn"
                        onClick={handleReset}
                    >
                        Reset
                    </button>

                    <button
                        type="submit"
                        className="submit-btn"
                    >
                        Analyze Project
                    </button>

                </div>

            </form>

        </div>

    );

}

export default ProjectForm;