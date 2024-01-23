import React from 'react'
import "./SearchBox.css";

const SearchBox_component = ({ onFilter }) => {

  const handleSearch = (event) => {
    const searchText = event.target.value;
    onFilter(searchText);
  }
  
  return (
    <div>
        <input type="text" className="my-input" onChange={handleSearch}/>
    </div>
  )
}

export default SearchBox_component