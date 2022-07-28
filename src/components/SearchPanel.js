import React from "react";

function SearchPanel({filterCriteria,searchText,setfilterCriteria,setSearchText}){

return(
    <div className="searchpanel">
    <select name='name'  onChange={(event)=>setfilterCriteria(event.target.value)} value={filterCriteria} placeholder="Search by name">
    <option value=''>All Levels</option>
      <option value='1'>Level 1</option>
      <option value='2'>Level 2</option>
      <option value='3'>Level 3</option>
      <option value='4'>Level 4</option>
    </select><br/>
    <input name="service"  onChange={(event)=>setSearchText(event.target.value)} value={searchText} placeholder="search by name"/><br/>
    </div>
)
}

export default SearchPanel;