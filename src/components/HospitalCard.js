import React from "react";
import { Link } from "react-router-dom";

function HospitalCard({hospital}){
return(
    <div className="hospitalcard">
    <h3>{hospital.name}</h3>
    <img src={hospital.image} alt=''/>
    <p>Ministry Level {hospital.ministry_rank}     <Link to={`${hospital.id}`}>See more</Link></p>
    </div>
)
}

export default HospitalCard;