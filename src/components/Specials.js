import React, {useState} from 'react' 
import { NavLink } from 'react-router-dom';
import "../components/styles/Specials.css"
import SpecialsCard from './SpecialsCard'
import specials from '../specialMenu'

const Specials = () => {
  const [specialMenu, setSpecialMenu] = useState(specials); 

  return (
    <div className="specials-section-container">
      <div className="specials-section-title">
            <h1>This Week's Specials</h1>
            <div className="btn-container">
              <NavLink to="/menu"><button className="btn btn-menu">Online Menu</button></NavLink>
            </div>
      </div>
      <SpecialsCard specialItems = {specialMenu}/>
    </div>
  )
}

export default Specials
