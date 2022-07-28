import React,{useState,useEffect} from "react";
import { BrowserRouter,Routes,Route,NavLink} from "react-router-dom";
import HealthJournal from "../pages/HealthJournal";
import Home from '../pages/Home';
import Hospitals from "../pages/Hopistals";
import Addhospital from "./Addhospital";
import HospitalCard from "./HospitalCard";
import HospitalDetails from "./HospitalDetails";
import Navbar from "./Navbar";


function App(){
   const [hospitals,setHospitals]= useState([]);
   const [filterCriteria, setfilterCriteria]=useState('');
   const [searchText,setSearchText]= useState('');
   
   
   useEffect((()=>{
    fetch('http://localhost:4000/hospitals')
    .then(response=>response.json())
    .then(data=>setHospitals(data))
    .catch(error=>console.log(error))
   }),[]);
   
   
   const renderedHospitals = hospitals.filter(hospital=>{
     if(filterCriteria === '') return true;
     return hospital.ministry_rank === parseInt(filterCriteria);
   });
   
   const renderedHospitalsOnSearch = renderedHospitals.filter(hospital=>{
     if(searchText === '')return true;
     return hospital.name.includes(searchText.toLowerCase());
   })
   
return (
   <BrowserRouter>
   <Navbar />
   <Routes>
   <Route path='/' element={<Home />} />
   <Route path='/hospitals' element={<Hospitals filterCriteria={filterCriteria} searchText={searchText} setfilterCriteria={setfilterCriteria} setSearchText={setSearchText} renderedHospitalsOnSearch={renderedHospitalsOnSearch}/>}> 
      <Route path="" element={
         <div className="landingpage">
         <h1>+</h1>
         <NavLink to={'addhospital'}>Add A hospital</NavLink>
         <div className="hospitalSnippets">
            {hospitals.map(hospital=><HospitalCard key={hospital.id} hospital={hospital}/>)}
         </div>
         </div>}/>
      <Route path=":id" element={<HospitalDetails renderedHospitalsOnSearch={renderedHospitalsOnSearch}/>} />
      <Route path='addhospital' element={<Addhospital />}/>
   </Route>
   <Route path="/healthjournals"  element={<HealthJournal hospitals={hospitals} />} />
   </Routes>
   </BrowserRouter>
)
}

export default App;