import React from "react";

function HealthJournal({hospitals}){
  return (
    <div className="healthjournal">
      <article>
        <section>
        {hospitals.map(hospital=>{
          return <div key={hospital.id}>
            
            <p>{hospital.name} <br/> {hospital.health_journal}</p>
          </div>
        })}
        </section>
      </article>
    </div>
  )
}

export default HealthJournal;