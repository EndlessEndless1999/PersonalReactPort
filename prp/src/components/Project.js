
const Project = ({title, description, git, site, tech, symbol}) => {
    return (
        <div className="project">
            <i className={symbol}></i>
            <h3 className="project-title">{title}</h3>
            <p className="project-description">{description}</p>
            <button className="project-site-button">See Live Site</button>
            <button className="project-git-button">See Source Code</button>
            <p className="project-tech">{tech}</p>
        </div>
    )
}


export default Project;