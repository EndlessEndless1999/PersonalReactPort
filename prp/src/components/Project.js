import { Button } from "@mui/material";
import LinkButton from "./LinkButton";


const Project = ({title, description, git, site, tech, symbol}) => {
    return (
        <div className="project widget-border">
            <i className={symbol}></i>
            <h3 className="project-title"><mark>{title}</mark></h3>
            <div className="hl" />
            <p className="project-description">{description}</p>
            <div className="project-buttons">
                <Button variant="outlined" sx={{borderColor: 'white'}}><mark>Git</mark></Button>
                <Button variant="outlined" sx={{borderColor: 'white'}}><mark>Site</mark></Button>
                <Button variant="outlined" sx={{borderColor: 'white'}}><mark>Info</mark></Button>
            </div>
            <div className="hl" />
            <p className="project-tech">{tech}</p>
        </div>
    )
}


export default Project;