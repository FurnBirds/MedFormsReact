import React from "react";
import { NavLink } from "react-router-dom";


function NavBar() {
    return (
        <nav>
            <NavLink exact to="/">Home</NavLink>
            <NavLink exact to="/medprofiles">Medical Profiles</NavLink>
            <NavLink exact to="/medprofiles/newptpfrofile">New Patient Profile</NavLink>
        </nav>
    );
}

export default NavBar;
