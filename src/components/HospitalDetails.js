import React from "react";
import { useParams } from "react-router-dom";

function HospitalDetails({renderedHospitalsOnSearch}){
    const {id}= useParams(); // destructures the params in the url
    const focusedHospital = renderedHospitalsOnSearch.find(hospital=>hospital.id === parseInt(id)); //Get the hospital matching the url param

    return(
    <div className="HospitalDetails">This is part to sho3 sho3 details 
     <h1>{focusedHospital.name}</h1>
     <img src={focusedHospital.image} />        
    </div>
    )
}

export default HospitalDetails;