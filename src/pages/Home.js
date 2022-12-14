import React from "react";
import { Link } from "react-router-dom";

function Home({hospitals}){
    return(
        <div className="home">
        <div className="logos">
        <h1>Triad <br/>Health</h1>    
        <span>+</span>      
        </div>
        <div id="services">
            <ul className="incard">
            <p >The bulk stops at us!!<br/>We are an accredited,health services reasearch organisation and connector. Here you can be able to:"</p>
                <li>Pursue a Specialised service Hospital.</li>
                <li>View the hospital details.</li>
                <li>Book an appointment in Hospital.</li>
                <li>Read a specialised service journal.</li>
                <li>Explore a myriad of hospitals.</li>
            </ul>

        <ul className="incard" id="incard">
        Our Assortment of services.
           {hospitals.map(hospital=><li key={hospital.key}><Link to={`/hospitals/${hospital.id}`}>{hospital.service}</Link></li>)}
        </ul>
        </div>
            
        </div>
    )
}

export default Home;
