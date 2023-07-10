import React from 'react';
import Header from '../components/Header'; 
import MenuItems from '../components/MenuItems';


const Menu = () => {
  return (
    <div>
      <Header />
      <h1 style={{textAlign: "center", paddingTop: "15%"}}>Menu</h1>
      <MenuItems/>
    </div>
  )
}

export default Menu
