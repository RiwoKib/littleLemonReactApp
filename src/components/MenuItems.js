import React, {useState} from 'react'
import items from '../TheMenu'
import MenuItem from './MenuItem'
import Categories from './Categories'

const allCategories = ['All' , ...new Set(items.map((item) => item.category))];

function MenuItems() {
  const [menu, setMenu] = useState(items); 
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category) => {
    if(category === 'All'){
      setMenu(items);
      return;
    }

    const newItems = items.filter((item) => item.category === category);

    setMenu(newItems);

  }


  return (
    <div className="specials-section-container">
      
      <Categories categories={categories} filterItems={filterItems} />
      <MenuItem menuItems = {menu}/>
    </div>
  )
}

export default MenuItems
