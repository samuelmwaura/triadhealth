import React from "react";
import { useParams } from "react-router-dom";

function JournalContent({hospitals}){
const{id}=useParams();

const currentJournal = hospitals.find(hospital=>{
    return id ? hospital.id === parseInt(id):hospital})

 return currentJournal ? 
    <div className="journalcontent">
    <h2>{currentJournal.name}</h2>    
   {currentJournal.health_journal}
    </div> :<h2 className="journalcontent">Seems like there are no hospitals that wrote any journals.</h2>
}

export default JournalContent;