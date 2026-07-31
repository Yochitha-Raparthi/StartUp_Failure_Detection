// import { createContext, useState } from "react";

// export const ProjectContext = createContext();

// export function ProjectProvider({ children }) {

//     const [project, setProject] = useState(null);

//     return (
//         <ProjectContext.Provider
//             value={{ project, setProject }}
//         >
//             {children}
//         </ProjectContext.Provider>
//     );
// }


//new code
import { createContext, useState } from "react";

export const ProjectContext = createContext();

export const ProjectProvider = ({ children }) => {

    const [project, setProject] = useState(null);

    const [analysis, setAnalysis] = useState(null);

    return (

        <ProjectContext.Provider
            value={{
                project,
                setProject,
                analysis,
                setAnalysis
            }}
        >

            {children}

        </ProjectContext.Provider>

    );

};