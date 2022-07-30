import React from "react";
import { NavLink } from "react-router-dom";


function Navbar(){

const linkStyles ={
    margin:'20px'
}
return (<nav>
<NavLink to={'/'} style={linkStyles}> Home </NavLink>
<NavLink to={'/hospitals'} style={linkStyles}>Hospitals</NavLink>
<NavLink to={'/healthjournals/'} style={linkStyles}>Health Journals</NavLink>
</nav>)
}

export default Navbar;