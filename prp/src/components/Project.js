import LinkButton from "./LinkButton";


const Project = ({title, description, git, site, tech, symbol}) => {
    return (
        <div className="project">
            <i className={symbol}></i>
            <h3 className="project-title">{title}</h3>
            <p className="project-description">{description}</p>
            <LinkButton className="project-site-button" link={site} text="See Live Site"/>
            <LinkButton className="project-git-button" link={git} text="See Source Code"/>
            <p className="project-tech">{tech}</p>
        </div>
    )
}


export default Project;