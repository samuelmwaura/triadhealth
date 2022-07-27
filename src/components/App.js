import React, { useEffect, useState } from "react";

function App(){
const [toys, setToys]=useState([])

useEffect(()=>{
    fetch('http://localhost:4000/toys')
    .then(response=>response.json())
    .then(data=>setToys(data))
    .catch(error=>console.log(error))
})
return (
    <div>
  {toys.map(toy=> <p>{toy.name}</p>)}
    </div>
)
}

export default App;