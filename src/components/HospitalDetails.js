import React, { useState } from "react";
import { useParams } from "react-router-dom";

function HospitalDetails({hospitals,setHospitals}){
    const {id}= useParams(); // destructures the params in the url
    const currentHospital = hospitals.find(hospital=>hospital.id === parseInt(id)); //Get the hospital matching the url param from all hospitals
     
    const [appointmentData,setAppointmentData] = useState({firstname:'',secondname:'',frequent:'',service:'', date:''});

    function handleOnchange(event){ 
       setAppointmentData({...appointmentData,[event.target.name]:event.target.value})
    }

    function handleAppointmentSubmit(event){
    event.preventDefault()
    const newArray=[...currentHospital.appointments,appointmentData]
    fetch(`http://localhost:4000/hospitals/${currentHospital.id}`,{
        method:'PATCH',
        headers:{
            'Content-Type':'Application/json',
            'Accept':'Application/json'
        },
        body:JSON.stringify({appointments:  newArray})
    })
    .then(response=>response.json())
    .then(data=>{
        //Updating the global state of all hospitals to enable a rerender.
        setHospitals(()=>{  //The thing is that you hve to have new array that you will update state with
           return  hospitals.map(hospital=>{// After PATCH a new array is generated using map.
                if(hospital.id === data.id) return data;
                return hospital;
            });
        })
        setAppointmentData({firstname:'',secondname:'',frequent:'',service:'',date:''})})
    .catch(error=>console.log(error))
    }

    if(!currentHospital) return <p>Loading Hospital Details</p>
    return(
    <div className="hospitalDetails">
     <div>
     <h1>{currentHospital.name}</h1> 
     <img src={currentHospital.image} alt=''/> <br/>     
     </div>
     <form className='addhospital' onSubmit={handleAppointmentSubmit}>
       <h4>Book an Appointment</h4>
        <label>First Name</label><input name="firstname" onChange={handleOnchange} value={appointmentData.firstname} placeholder='First Name'/><br/>
        <label>Second Name</label><input name="secondname" onChange={handleOnchange} value={appointmentData.secondname} placeholder='Second Name   '/><br/>
        <label>Service</label>
        <select name="service" onChange={handleOnchange} value={appointmentData.service}>
        <option value='specialisation'>Specialisation</option>
        <option value='other'>other Service</option>
        </select><br/>
        <label>Frequent Mode</label>
        <select name="frequent" onChange={handleOnchange} value={appointmentData.frequent}>
        <option value='firsttime'>First Time</option>
        <option value='repeat'>Repeat</option>
        </select><br/>
        <label>Appointment Date</label><input type='date' name="date" onChange={handleOnchange} value={appointmentData.date}/><br/>
        <label></label><input type='submit' />
     </form>
     <section id="hospitalproperties">
     <section><h3>Level {currentHospital.ministry_rank}</h3><h3>Our Specialisation</h3>{currentHospital.service}</section>
     <section><h4>Approved Pricing Model</h4>{currentHospital.pricing_model}</section>
     <section><h4>Treatment Schedule</h4>{currentHospital.treatment_schedule}</section>
     <section>
      <h4>Active Appointments</h4>{currentHospital.appointments.length?currentHospital.appointments.length:0}
      </section>
     <section style={{overflowY:"scroll"}}><h4>Services Reviews</h4>
     {currentHospital.reviews? currentHospital.reviews.map((review,index)=><p key={index}>{review}</p>):"There are currently no reviews for this hospital."}
     </section>
           
     </section>

    </div>
    )
}

export default HospitalDetails;