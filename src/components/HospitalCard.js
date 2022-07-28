import React from "react";
import { NavLink } from "react-router-dom";

function HospitalCard({hospital}){
return(
    <div className="hospitalcard">
    <h3>{hospital.name}</h3>
    <img src={hospital.image} alt=''/>
    <p>Ministry Level {hospital.ministry_rank}     <NavLink to={`${hospital.id}`}>See more</NavLink></p>
    </div>
)
}

export default HospitalCard;