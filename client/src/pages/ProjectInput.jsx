import ProjectForm from "../components/ProjectForm";
import "../styles/projectInput.css";

function ProjectInput() {
  return (
    <div className="project-page">

      <div className="page-title">
        <h2>Project Input</h2>
        <p>
          Enter your startup information to begin market analysis,
          competitor intelligence, and risk prediction.
        </p>
      </div>

      <ProjectForm />

    </div>
  );
}

export default ProjectInput;