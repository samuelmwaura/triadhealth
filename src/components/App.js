import React,{useState,useEffect} from "react";
import { BrowserRouter,Routes,Route} from "react-router-dom";
import HealthJournal from "../pages/HealthJournal";
import Home from '../pages/Home';
import Hospitals from "../pages/Hopistals";
import Ranks from "../pages/Ranks";
import Addhospital from "./Addhospital";
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
      <Route path="" element={<h3>This is in the hospital landing page </h3>}/>
      <Route path=":id" element={<HospitalDetails renderedHospitalsOnSearch={renderedHospitalsOnSearch}/>} />
      <Route path='addhospitals' element={<Addhospital />}/>
   </Route>
   <Route path="/healthjournals"  element={<HealthJournal renderedHospitalsOnSearch={renderedHospitalsOnSearch} />} />
   <Route path="/ranks" element={<Ranks />}/>
   </Routes>
   </BrowserRouter>
)
}

export default App;