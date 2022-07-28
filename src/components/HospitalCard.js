import React from "react";

function HospitalCard({hospital}){
return(
    <div className="hospitalcard">
    <p>{hospital.name}</p>
    <img src={hospital.image} alt=''/>
    <p>{hospital.ministry_rank}</p>
    </div>
)
}

export default HospitalCard;