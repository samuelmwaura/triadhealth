import React, { useEffect, useState} from "react";
import HospitalCard from "../components/HospitalCard";
import SearchPanel from "../components/SearchPanel";
import HospitalDetails from '../components/HospitalDetails'
import { Route, Routes } from "react-router-dom";

function Hospitals({filterCriteria,searchText,setfilterCriteria,setSearchText,renderedHospitalsOnSearch}){


return (
 <div className="hospitals">
     <h2>Featured Hospitals.</h2>
     <div className="hospitallist">
     <SearchPanel filterCriteria={filterCriteria} searchText={searchText} setfilterCriteria={setfilterCriteria} setSearchText={setSearchText} />
    {renderedHospitalsOnSearch.map(hospital=><HospitalCard key={hospital.id} hospital={hospital}/>)}
    </div>
    <Routes>
    <Route path="/hospitals/:id" element={<HospitalCard />} />  
    <Route path='/hospitals' element={<h3>Select a hospital to view the details.</h3>}/>      
    </Routes>
 </div>
 )
}

export default Hospitals;