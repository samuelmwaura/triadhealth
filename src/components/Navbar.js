import React from "react";
import { NavLink } from "react-router-dom";
import Services from "./Services";


function Navbar(){

const linkStyles ={
    margin:'20px'
}
return (<nav>
<NavLink to={'/'} style={linkStyles}> Home </NavLink>
<NavLink to={'/hospitals'} style={linkStyles}>Hospitals</NavLink>
<Services style={linkStyles} />
<NavLink to={'/healthjournals'} style={linkStyles}>Health Journals</NavLink>
</nav>)
}

export default Navbar;