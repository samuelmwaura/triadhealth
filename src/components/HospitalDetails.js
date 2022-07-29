import React, { useState } from "react";
import { useParams } from "react-router-dom";

function HospitalDetails({renderedHospitalsOnSearch}){
    const {id}= useParams(); // destructures the params in the url
    const focusedHospital = renderedHospitalsOnSearch.find(hospital=>hospital.id === parseInt(id)); //Get the hospital matching the url param
    const [appointMentData,setAppointmentData] = useState({
        firstname:'',
        secondname:'',
        frequent:'',
        service:'',
    });

    function handleOnchange(event){ 
        console.log(event.target.name, event.target.value)
    }
    return(
    <div className="HospitalDetails">
     <div>
     <h1>{focusedHospital.name}</h1>
     <img src={focusedHospital.image} /> 
     Approved Pricing Model:<h4>{focusedHospital.pricing_model}</h4>
     Treatment Schedule:<h4>{focusedHospital.treatment_schedule}</h4>
     {focusedHospital.reviews? focusedHospital.reviews.map((review,index)=><p key={index}>{review}</p>):"There are currently no reviews for this hospital."}

     </div>
     <form>
        <h3>Book an Appointment</h3>
        <label>First Name</label><input name="firstname" onChange={handleOnchange}/><br/>
        <label>Second Name</label><input name="secondname" onChange={handleOnchange}/><br/>
        <label>Service</label>
        <select name="service" onChange={handleOnchange}>
        <option value='specialisation'>Specialisation</option>
        <option value='other'>other Service</option>
        </select><br/>
        <label>Frequent Mode</label>
        <select name="frequent" onChange={handleOnchange}>
        <option value='firsttime'>First Time</option>
        <option value='repeat'>Repeat</option>
        </select><br/>
        <input type='date' /><br/>
        <label></label><input name="firstName" onChange={handleOnchange}/><br/>
        <input type='submit' />
     </form>

    </div>
    )
}

export default HospitalDetails;