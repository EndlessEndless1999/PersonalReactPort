import Project from "./Project";
import SectionTitle from "./SectionTitle";



const Projects = () => {
    return (
        <div className="project-wrapper">
            <SectionTitle title={'Projects'}/>
            <div className="projects">
                <Project
                    symbol={"fa-solid fa-martini-glass"}
                    title={"Cocktail Bar"}
                    description={"Website utilising the DrinksDB API to relay cocktail recipe information to the end user."}
                    site={"https://endlessendless1999.github.io/CocktailBar/"}
                    git={"https://github.com/EndlessEndless1999/CocktailBar"}
                    tech={"JS BootStrap RapidAPI"}
                />
                <div className="space"></div>
                <Project
                    symbol={"fa-solid fa-martini-glass"}
                    title={"Cocktail Bar"}
                    description={"Website utilising the DrinksDB API to relay cocktail recipe information to the end user."}
                    site={"https://endlessendless1999.github.io/CocktailBar/"}
                    git={"https://github.com/EndlessEndless1999/CocktailBar"}
                    tech={"JS BootStrap RapidAPI"}
                />
                <div className="space"></div>
                <Project 
                    symbol={"fa-solid fa-martini-glass"}
                    title={"Cocktail Bar"}
                    description={"Website utilising the DrinksDB API to relay cocktail recipe information to the end user."}
                    site={"https://endlessendless1999.github.io/CocktailBar/"}
                    git={"https://github.com/EndlessEndless1999/CocktailBar"}
                    tech={"JS BootStrap RapidAPI"}
                />
            </div>
        </div>
    )
}


export default Projects;