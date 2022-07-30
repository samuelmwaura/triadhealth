import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function  Addhospital ({hospitals,setHospitals}){
const[newHospitalData,setNewHospitalData]=useState({
   
name: "",
image: "",
ministry_rank:0,
service: "",
treatment_schedule:"",
pricing_model:"",
health_journal: ""
})

const navigate = useNavigate();

function handleFormInputChange(event){
setNewHospitalData({...newHospitalData,[event.target.name]:event.target.value});
}

function handleSubmit(event){
event.preventDefault()
fetch('https://triadhealthsonserver.herokuapp.com/hospitals',{
   method:'POST',
   headers:{
      'Content-Type':'Application/json',
      'Accept':'Application/json'
   },
 body:JSON.stringify(newHospitalData)
})
.then(response=>response.json())
.then(data=>{
   navigate('/hospitals')
   setHospitals([...hospitals,data] )
   //setNewHospitalData({name: "",image: "",ministry_rank:0, service: "",treatment_schedule:"", pricing_model:"",health_journal: ""})
   
   console.log(data)})
   
.catch(error=>console.log(error))
}
return (
 <form className="addhospital" onSubmit={handleSubmit}>
    <h3>Add a Hospital.</h3>
    <div>
     <label>Hospital Name: </label><input type='text' name="name" placeholder="Hospital Name" onChange={handleFormInputChange} value={newHospitalData.name}/><br/>
     <label>Hospital Image: </label><input type='text' name="image"placeholder="Enter the image Url" onChange={handleFormInputChange} value={newHospitalData.image}/><br/>
     <label>Ministry Rank: </label>
     <select  name="ministry_rank" onChange={handleFormInputChange} value={newHospitalData.ministry_rank}>
        <option value='1'>Level 1</option>
        <option value='2'>Level 2</option>
        <option value='3'>Level 3</option>
        <option value='4'>Level 4</option>
     </select><br/>     
     <label>Main Service: </label><input type='text' name="service" placeholder="Hospital main service" onChange={handleFormInputChange} value={newHospitalData.service}/><br/>
     <label>Treatment Schedule </label>
     <select  name="treatment_schedule" onChange={handleFormInputChange} value={newHospitalData.treatment_schedule}>
        <option value='Normal Day'>Normal Day</option>
        <option value='Prenight'>Prenight</option>
        <option value='24 hrs'>24 hrs</option>
        <option value='Normal day and prenight'>Normal day and prenight</option>
     </select><br/>
     <label>Pricing_model:</label>
     <select  name="pricing_model"  onChange={handleFormInputChange} value={newHospitalData.pricing_model} >
        <option value='Cash'>Cash</option>
        <option value='Statutory company cards'>Statutory company cards</option>
        <option value='NHIF'>NHIF</option>
        <option value='All'>All</option>
     </select><br/>
     <label>Hospital Journals: </label><textarea name="health_journal" placeholder="Type the journal snippet here" onChange={handleFormInputChange} value={newHospitalData.health_journal}/><br/>
     <label></label><input type="submit"/>


     </div>

     

 </form>
)
}

export default Addhospital