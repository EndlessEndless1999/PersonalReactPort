import React from "react";
import Hero from "./Hero";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";
import Footer from "./Footer";
import LeftSide from "./LeftSide";
import RightSide from "./RightSide";




const Body = () => {
    return (
        <div className="body">
            <Hero />
            <About />   
            <Projects />
            <Contact />
            <Footer />
            <LeftSide />
            <RightSide />
        </div>
    )
}


export default Body;