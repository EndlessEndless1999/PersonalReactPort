import React from "react";
import NavItem from "./NavItem";

const NavBar = () => {
    return (
        <nav className="navbar">
            <NavItem text="01. About" link="about"></NavItem>
            <NavItem text="02. Projects" link="project"></NavItem>
            <NavItem text="03. Contact" link="contact"></NavItem>
            <NavItem className="resumeitem" text="Resume" link="resume"></NavItem>
        </nav>
    )
}



export default NavBar;