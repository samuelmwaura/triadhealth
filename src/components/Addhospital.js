import React from "react";

function  Addhospital (){
return (
 <form className="addhospital">
    <h3>Add a Hospital.</h3>
    <div>
     <label>Hospital Name: </label><input type='text' name="name" placeholder="Hospital Name"/><br/>
     <label>Hospital Image: </label><input type='text' name="image"placeholder="Enter the image Url"/><br/>
     <label>Ministry Rank: </label><input type='number' name="ministry_rank" placeholder="0"/><br/>
     <label>Main Service: </label><input type='text' name="service" placeholder="Hospital main service"/><br/>
     <label>Treatment Schedule </label>
     <select  name="treatment_schedule">
        <option>Normal Day</option>
        <option>Prenight</option>
        <option>24 hrs</option>
        <option>Normal day and prenight.</option>
     </select><br/>
     <label>Pricing_model:</label>
     <select  name="pricing_model" >
        <option>Cash</option>
        <option>Statutory company cards</option>
        <option>NHIF</option>
        <option>All</option>
     </select><br/>
     <label>Hospital Journals: </label><textarea name="health_journal" placeholder="Type the journal snippet here"/><br/>
     <input type="submit"/ >


     </div>

     

 </form>
)
}

export default Addhospital