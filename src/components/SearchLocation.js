import React,{useState} from 'react'
import "../components/styles/Specials.css"
import { AiOutlineSearch } from "react-icons/ai" 
import locations from '../Locations';

function SearchLocation() {
    const [searchInput, setSearchInput] = useState('');
 
    
    const changeHandler = (e) => {
        setSearchInput(e.target.value)
    }

    const onSearch = (searchTerm) => {
        setSearchInput(searchTerm);
        // our api to fetch the search result
        console.log("search ", searchTerm);
    };


  return (
    <>
    <div className="input-wrapper"> 
        <button  onClick={() => onSearch(searchInput)} className='searchbtn' style={{border:'none', background: 'none'}}><AiOutlineSearch size={30} style={{ color: "#333333"}}/></button>
        <input className='search-field'
        placeholder="Search Your Location"
        value={searchInput}
        onChange={changeHandler} 
        /> 
    </div>
    <div className='results-list'>
            {locations
                .filter((item) => {
                    const searchTerm = searchInput.toLowerCase();
                    const name = item.toLowerCase();

                    return (
                    searchTerm &&
                    name.startsWith(searchTerm) &&
                    name !== searchTerm
                    );
                }) 
                .map((item, index) => (
                    <div
                    onClick={() => onSearch(item)}
                    className="search-result" 
                    key={index}
                    >
                    {item}
                    </div>
            ))}
        </div>
    </>
  )
}

export default SearchLocation
