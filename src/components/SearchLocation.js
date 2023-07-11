import React,{useState} from 'react'
import "../components/styles/Specials.css"
import { AiOutlineSearch } from "react-icons/ai"

function SearchLocation() {
    const [searchInput, setSearchInput] = useState('');

    const onChangeHandler = (value) => {
        setSearchInput(value);
    }


  return (
    <div className="input-wrapper">
        <input className='search-field'
        placeholder="Search Your Location"
        value={searchInput}
        onChange={(e) => onChangeHandler(e.target.value)}
        
        />
        <AiOutlineSearch size={30} style={{ color: "#333333"}}/>
  </div>
  )
}

export default SearchLocation
