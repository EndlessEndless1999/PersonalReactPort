import Project from "./Project";
import SectionTitle from "./SectionTitle";



const Projects = () => {
    return (
        <div className="project-wrapper" id="project">
            <SectionTitle title={'Projects:'}/>
            <div className="projects">
                <Project
                    symbol={"fa-solid fa-martini-glass"}
                    title={"BookWorms"}
                    description={"Full Stack social-media site based around reading. Utilises React for Front-End and Firebase for backend."}
                    site={"https://storied-brigadeiros-6e4c58.netlify.app/"}
                    git={"https://github.com/EndlessEndless1999/Library-Viewer"}
                    tech={"React MaterialUI Firebase"}
                />
                <div className="space"></div>
                <Project
                    symbol={"fa-solid fa-book"}
                    title={"Cocktail Bar"}
                    description={"Website utilising the DrinksDB API to relay cocktail recipe information to the end user."}
                    site={"https://endlessendless1999.github.io/CocktailBar/"}
                    git={"https://github.com/EndlessEndless1999/CocktailBar"}
                    tech={"JS BootStrap RapidAPI"}
                />
                <div className="space"></div>
                <Project 
                    symbol={"fa-solid fa-martini-glass"}
                    title={"Tala Diamanti"}
                    description={"Website for client allowing them to advertise their luxury rental property in Cyprus."}
                    site={"https://endlessendless1999.github.io/tala-diamanti/"}
                    git={"https://github.com/EndlessEndless1999/tala-diamanti"}
                    tech={"JS BootStrap"}
                />
            </div>
        </div>
    )
}


export default Projects;