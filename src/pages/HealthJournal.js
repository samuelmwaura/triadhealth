import React from "react";
import { NavLink,Outlet } from "react-router-dom";

function HealthJournal({hospitals}){
  return (
    <div className="healthjournal">
      <div>
      {hospitals.map(hospital=><NavLink key={hospital.id} to={`${hospital.id}`}>{hospital.name} <br/> </NavLink>          
        )}
      </div>
     
     <Outlet />
       
       
    </div>
  )
}

export default HealthJournal;