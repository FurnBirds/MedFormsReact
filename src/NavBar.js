import React from "react";
import { NavLink } from "react-router-dom";

function NavBar({ onChangePage }) {
    
    function handleLinkClick(e) {
        e.preventDefault()
        onChangePage(e.target.pathname)
    }
    
    return (
        <div>
        
            <a onClick={handleLinkClick} href="/">Home</a>
            <a onClick={handleLinkClick} href="/medicalprofile">Medical Profile</a>

        </div>
    );
}

// function NavBar() {
//     return (
//         <nav>
//             <Link exact="true" to="/">Home</Link>
//             <Link exact="true" to="/medprofiles">Medical Profiles</Link>
//             <Link exact="true" to="/medprofiles/newptpfrofile">New Patient Profile</Link>
//         </nav>
//     );
// }

export default NavBar;
