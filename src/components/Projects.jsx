// create project component

const Projects = ({title, image, link, repo}) => {
    return(
        <div>
            <div className="card col-3">
            <img src={image} class="card-img-top" style={{"height" : "75%", "width" : "75%"}}/>
            <a className="btn btn-primary" href={link} target="_blank">{title} Visit the Site!</a>
            <a className="btn btn-primary" href={repo} target="_blank">{title} GitHub Repo</a>
            </div>
        </div>
    )
}

// export project component
export default Projects;