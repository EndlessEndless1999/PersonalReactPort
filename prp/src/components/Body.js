import React from "react";
import Hero from "./Hero";
import About from "./About";
import Projects from "./Projects";



const Body = () => {
    return (
        <div className="body">
            <Hero />
            <About />   
            <Projects />
            
        </div>
    )
}


export default Body;