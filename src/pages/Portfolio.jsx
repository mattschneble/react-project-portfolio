// import required components and modules
import Project from "../components/Projects"
import projects from "../utils/projectinfo.json"

// create and export Portfolio page
export default function Portfolio() {
    return (
        <div>
            <h1 className="text-center">Portfolio</h1>
            <div className="container justify-content-center">
                <div className="row">
                    {projects.map((project) => (
                        <div className="Project">
                            <Project
                            {...project}/>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}