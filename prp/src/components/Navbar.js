import React from "react";
import NavItem from "./NavItem";

const NavBar = () => {
    return (
        <nav className="navbar">
            <NavItem text="01. About"></NavItem>
            <NavItem text="02. Projects"></NavItem>
            <NavItem text="03. Contact"></NavItem>
            <NavItem className="resumeitem" text="Resume"></NavItem>
        </nav>
    )
}



export default NavBar;