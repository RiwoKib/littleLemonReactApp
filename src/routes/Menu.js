import React from 'react';
import HeaderElement from '../components/HeaderElement'; 
import MenuItems from '../components/MenuItems';
import Footer from '../components/Footer';


const Menu = () => {
  return (
    <div>
      <HeaderElement />
      <h1 style={{textAlign: "center", marginBottom: '-100px'}}>Menu</h1>
      <MenuItems/>
      <Footer/>
    </div>
  )
}

export default Menu
