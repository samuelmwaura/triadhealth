import React from "react";
import { useParams } from "react-router-dom";

function JournalContent({hospitals}){
const{id}=useParams();

const currentJournal = hospitals.find(hospital=>{
    return id ? hospital.id === parseInt(id):hospital})
 return(
    <div className="journalcontent">
    <h2>{currentJournal.name}</h2>    
   {currentJournal.health_journal}
    </div>
 )
}

export default JournalContent;