 import React from 'react'
 import "../components/styles/HeroSection.css"; 
 import HeroImage from "../components/assets/gourmet.jpg"
 import SearchLocation from "../components/SearchLocation" 
 
 function OnlineOrder() {

   return (
    <div className="hero-section-background">
      <div className="hero-section-container">
          <div className="section-left">
              <h1>Order Your Fresh and Healthy Food Anytime</h1> 
              <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
              
              <SearchLocation/> 
          </div>
          <div className="section-right">
              <div className="image-box">
                  <img src={HeroImage} alt="Serving delicious dish" />
              </div>
          </div>
      </div>
    </div>
   )
 }
 
 export default OnlineOrder
 