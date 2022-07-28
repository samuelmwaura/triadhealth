import React, { useState } from "react";

function SearchPanel({searchData,setSearchData}){

function handleOnChange(event){
setSearchData(()=>{
  for (const key in searchData){
  if(key !== event.target.name) searchData[key] = ''
  }
  return {...searchData,[event.target.name]:event.target.value}
});

  console.log(searchData);
  }

return(
    <div className="searchpanel">
    <input name='name'  value={searchData.name} onChange={handleOnChange} placeholder="Search by name"/><br/>
    <input name="service" value={searchData.service} onChange={handleOnChange} placeholder="search by service"/><br/>
    <input name="rank"value={searchData.rank} onChange={handleOnChange} placeholder="Search by ministry rank"/><br/>
    </div>
)
}

export default SearchPanel;