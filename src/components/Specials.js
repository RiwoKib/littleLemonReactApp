import React, {useState} from 'react' 
import { NavLink } from 'react-router-dom';
import "../components/styles/Specials.css"
import SpecialsCard from './SpecialsCard'
import specials from '../specialMenu'
import Categories from './Categories'

const allCategories = ['All' , ...new Set(specials.map((item) => item.category))];

const Specials = () => {
  const [specialMenu, setSpecialMenu] = useState(specials); 
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category) => {
    if(category === 'All'){
      setSpecialMenu(specials);
      return;
    }

    const newItems = category.filter((item) => item.category === category);

    setSpecialMenu(newItems);

  }

  return (
    <div className="specials-section-container">
      <div className="specials-section-title">
            <h1>This Week's Specials</h1>
            <div className="btn-container">
              <NavLink to="/menu"><button className="btn btn-menu">Online Menu</button></NavLink>
            </div>
      </div>

      <Categories categories={categories} filterItems={filterItems} />
      <SpecialsCard specialItems = {specialMenu}/>
    </div>
  )
}

export default Specials
