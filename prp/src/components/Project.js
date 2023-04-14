import { Button } from "@mui/material";
import LinkButton from "./LinkButton";


const Project = ({title, description, git, site, tech, symbol}) => {
    return (
        <div className="project widget-border">
            <i className={symbol}></i>
            <h3 className="project-title">{title}</h3>
            <p className="project-description">{description}</p>
            <div className="project-buttons">
                <Button variant="outlined" sx={{color: 'white', borderColor: 'white'}}>Git</Button>
                <Button variant="outlined" sx={{color: 'white', borderColor: 'white'}}>Site</Button>
                <Button variant="outlined" sx={{color: 'white', borderColor: 'white'}}>Info</Button>
            </div>
            <p className="project-tech">{tech}</p>
        </div>
    )
}


export default Project;