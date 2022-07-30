import React,{useState,useEffect} from "react";
import { BrowserRouter,Routes,Route,NavLink} from "react-router-dom";
import HealthJournal from "../pages/HealthJournal";
import Home from '../pages/Home';
import Hospitals from "../pages/Hopistals";
import Addhospital from "./Addhospital";
import HospitalCard from "./HospitalCard";
import HospitalDetails from "./HospitalDetails";
import Navbar from "./Navbar";
import JournalContent from "./JournalContent";


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
     return parseInt(hospital.ministry_rank) === parseInt(filterCriteria);
   });
   
   const renderedHospitalsOnSearch = renderedHospitals.filter(hospital=>{
     if(searchText === '')return true;
     return hospital.name.includes(searchText.toLowerCase());
   })
   
return (
   <BrowserRouter>
   <Navbar />
   <Routes>
   <Route path='/' element={<Home hospitals={hospitals}/>} />
   <Route path='/hospitals' element={<Hospitals filterCriteria={filterCriteria} searchText={searchText} setfilterCriteria={setfilterCriteria} setSearchText={setSearchText} renderedHospitalsOnSearch={renderedHospitalsOnSearch}/>}> 
      <Route path="" element={
         <div className="landingpage">
         <div className="hospitalSnippets">
            {[...hospitals].reverse().map(hospital=><HospitalCard key={hospital.id} hospital={hospital}/>)}{/**I mutated my original array using this function. It just messed everything. Spread worked magic.   */}
         </div>
         <div className="add">
         <h1>+</h1>
         <NavLink to={'addhospital'}>New hospital</NavLink>   {/*When an array is empty, the mapping doesn't happen.Thus none of the components is called.*/}
         </div>
         </div>}/>
      <Route path=":id" element={<HospitalDetails hospitals={hospitals} setHospitals={setHospitals}/>} />
      <Route path='addhospital' element={<Addhospital hospitals={hospitals} setHospitals={setHospitals} />}/>
   </Route>
   <Route path="/healthjournals"  element={<HealthJournal hospitals={hospitals} />}>
      <Route path="" element={<JournalContent hospitals={hospitals}/>}/> {/*when the array is empty, this brings issues because of the clled component.*/}
      <Route path=":id" element={<JournalContent hospitals={hospitals}/>}/>
   </Route>
   </Routes>
   </BrowserRouter>
)
}

export default App;