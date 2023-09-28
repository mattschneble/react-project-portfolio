// import required components and modules
import Project from "../components/Projects"
import projects from "../utils/projectinfo.json"

// create and export Portfolio page
export default function Portfolio() {
    return (
        <div>
            <h1 className="text-center">Portfolio</h1>
            <div className="container">
                <div className="row">
                    {projects.map((project) => (
                        <Project
                            key={project.id}
                            name={project.name}
                            image={project.image}
                            description={project.description}
                            github={project.github}
                            deployed={project.deployed}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}