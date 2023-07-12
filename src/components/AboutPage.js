import React from 'react';
import "../components/styles/HeroSection.css"; 
import "../components/styles/Card.css" 
import image1 from "./assets/item-1.jpeg"

const AboutPage = () => {
  return (
    <div className="about-section-background">
        <div className="about-section-container"> 
                <div className="card">
                    <div className="about-card">
                        
                        <div className="image-container">
                            <img src={image1} alt="Serving delicious dish" />
                        </div>
                        <div className="about-text">
                              <p>At Little Lemon, we take great pride in providing our customers with the greatest luxurious experience with a touch of <em>tradition</em>.</p><br />
                              <p>Book a table with us to share in this experience.</p>
                              
                        </div>
                        <button className="submit-btn" type="submit">Welcome</button>
                    </div>

                    <div className="about-card">
                        
                        <div className="image-container">
                            <img src={image1} alt="Serving delicious dish" />
                        </div>
                        <div className="about-text">
                              <p>At Little Lemon, we take great pride in providing our customers with the greatest luxurious experience with a touch of <em>tradition</em>.</p><br />
                              <p>Book a table with us to share in this experience.</p>
                              
                        </div>
                        <button className="submit-btn" type="submit">Welcome</button>
                    </div>

                    <div className="about-card">
                        
                        <div className="image-container">
                            <img src={image1} alt="Serving delicious dish" />
                        </div>
                        <div className="about-text">
                              <p>At Little Lemon, we take great pride in providing our customers with the greatest luxurious experience with a touch of <em>tradition</em>.</p><br />
                              <p>Book a table with us to share in this experience.</p>
                              
                        </div>
                        <button className="submit-btn" type="submit">Welcome</button>
                    </div>
                </div>
             
        </div>
    </div>
  )
}

export default AboutPage
