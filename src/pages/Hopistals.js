import React, { useEffect, useState } from "react";
import HospitalCard from "../components/HospitalCard";
import SearchPanel from "../components/SearchPanel";
import HospitalDetails from '../components/HospitalDetails'

function Hospitals(){
const [hospitals,setHospitals]= useState([]);
const [searchData, setSearchData]=useState({name:'',service:'',rank:''});


useEffect((()=>{
 fetch('http://localhost:4000/hospitals')
 .then(response=>response.json())
 .then(data=>setHospitals(data))
 .catch(error=>console.log(error))
}),[]);

const renderedHospitals = hospitals.filter(hospital=>{
  if(searchData.name === ''&& searchData.service === '' && searchData.rank === '') return hospital
  for(const key in searchData){
  if(searchData[key]!=='') return hospital[key].includes(searchData[key].toLowerCase());
  }
  }
)

return (
 <div className="hospitals">
     <h2>Featured Hospitals.</h2>
     <div className="hospitallist">
     <SearchPanel searchData={searchData} setSearchData={setSearchData}/>
    {renderedHospitals.map(hospital=><HospitalCard key={hospital.id} hospital={hospital}/>)}
    </div>
    <HospitalDetails />
 </div>
 )
}

export default Hospitals;