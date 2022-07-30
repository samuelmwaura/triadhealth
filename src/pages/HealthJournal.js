import React from "react";
import { NavLink,Outlet } from "react-router-dom";

function HealthJournal({hospitals}){
  return (
    <div className="healthjournal">
      <div className="journalist">
      {hospitals.map(hospital=><NavLink key={hospital.id} to={`${hospital.id}`}>{hospital.service} <br/> </NavLink>          
        )}
      </div>
     
     <Outlet />
       
       
    </div>
  )
}

export default HealthJournal;