import React from "react";

function HospitalCard({hospital}){
return(
    <div className="hospitalcard">
    <p>{hospital.name}</p>
    <img src={hospital.image} alt=''/>
    <p>{hospital.ministry_rank}</p>
    <u>{hospital.services.map((service,index)=><li key={index}>{service}</li>)}</u>
    
    </div>
)
}

export default HospitalCard;