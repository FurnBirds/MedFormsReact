import React from "react";
import { NavLink } from "react-router-dom";


function NavBar() {
    return (
        <nav>
            <NavLink exact="true" to="/">Home</NavLink>
            <NavLink exact="true" to="/MedicalProfiles">Medical Profiles</NavLink>
            <NavLink exact="true" to="/MedicalProfiles/NewProfile">New Patient Profile</NavLink>
        </nav>
    );
}
export default NavBar;
