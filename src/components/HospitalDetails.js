import React, { useState } from "react";
import { useParams } from "react-router-dom";

function HospitalDetails({renderedHospitalsOnSearch}){
    const {id}= useParams(); // destructures the params in the url
    const focusedHospital = renderedHospitalsOnSearch.find(hospital=>hospital.id === parseInt(id)); //Get the hospital matching the url param
    const [appointmentData,setAppointmentData] = useState({
        firstname:'',
        secondname:'',
        frequent:'',
        service:'',
        date:''
    });

    function handleOnchange(event){ 
       setAppointmentData({...appointmentData,[event.target.name]:event.target.value})
    }

    function handleAppointmentSubmit(event){
    event.preventDefault()
    const newArray=[...focusedHospital.appointments,appointmentData]
    fetch(`http://localhost:4000/hospitals/${focusedHospital.id}`,{
        method:'PATCH',
        headers:{
            'Content-Type':'Application/json',
            'Accept':'Application/json'
        },
        body:JSON.stringify({appointments:  newArray})
    })
    .then(response=>response.json())
    .then(data=>setAppointmentData({firstname:'',secondname:'',frequent:'',service:'',date:''}))
    .catch(error=>console.log(error))
    }

    return(
    <div className="hospitalDetails">
     <div>
     <h1>{focusedHospital.name}</h1> 
     <img src={focusedHospital.image} alt=''/> <br/>
     <h4>.Approved Pricing Model</h4>{focusedHospital.pricing_model}
     <h4>.Treatment Schedule</h4>{focusedHospital.treatment_schedule}
     <h4>.Services Reviews</h4>
     {focusedHospital.reviews? focusedHospital.reviews.map((review,index)=><p key={index}>{review}</p>):"There are currently no reviews for this hospital."}
      <h4>Active Appointments</h4>{focusedHospital.appointments.length}
     </div>
     <form className='addhospital' onSubmit={handleAppointmentSubmit}>
       <h4>Book an Appointment</h4>
        <label>First Name</label><input name="firstname" onChange={handleOnchange} placeholder='First Name'/><br/>
        <label>Second Name</label><input name="secondname" onChange={handleOnchange} placeholder='Second Name   '/><br/>
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
        <label>Appointment Date</label><input type='date' name="date" onChange={handleOnchange}/><br/>
        <input type='submit' />
     </form>

    </div>
    )
}

export default HospitalDetails;