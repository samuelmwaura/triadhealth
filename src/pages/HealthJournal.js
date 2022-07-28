import React from "react";

function HealthJournal({renderedHospitalsOnSearch}){
  return (
    <div className="healthjournal">
      <article>
        <section>
        {renderedHospitalsOnSearch.map(hospital=>{
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