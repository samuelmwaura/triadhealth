import React from "react";
import { BrowserRouter,Routes,Route} from "react-router-dom";
import HealthJournal from "../pages/HealthJournal";
import Home from '../pages/Home';
import Hospitals from "../pages/Hopistals";
import Ranks from "../pages/Ranks";
import Navbar from "./Navbar";


function App(){

return (
   <BrowserRouter>
   <Navbar />
   <Routes>
   <Route path='/' element={<Home />} />
   <Route path='/hospitals' element={<Hospitals />}/>
   <Route path="/healthjournals"  element={<HealthJournal />} />
   <Route path="/ranks" element={<Ranks />}/>
   </Routes>
   </BrowserRouter>
)
}

export default App;