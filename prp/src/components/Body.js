import React from "react";
import Hero from "./Hero";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";
import Footer from "./Footer";



const Body = () => {
    return (
        <div className="body">
            <Hero />
            <About />   
            <Projects />
            <Contact />
            <Footer />
        </div>
    )
}


export default Body;