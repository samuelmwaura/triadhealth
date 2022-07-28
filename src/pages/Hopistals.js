import React from "react";
import HospitalCard from "../components/HospitalCard";
import SearchPanel from "../components/SearchPanel";
import { Outlet} from "react-router-dom";

function Hospitals({filterCriteria,searchText,setfilterCriteria,setSearchText,renderedHospitalsOnSearch}){

return (
 <div className="hospitals">
     <h2>Featured Hospitals.</h2>
     <div className="hospitallist">
     <SearchPanel filterCriteria={filterCriteria} searchText={searchText} setfilterCriteria={setfilterCriteria} setSearchText={setSearchText} />
    {renderedHospitalsOnSearch.map(hospital=><HospitalCard key={hospital.id} hospital={hospital}/>)}
    </div>

    <Outlet />
 
 </div>
 )
}

export default Hospitals;