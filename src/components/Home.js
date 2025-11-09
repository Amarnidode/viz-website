import React from 'react';
import './Home.css';
import HomeImage from "../assets/viz1.png";

function Home() {
  return (
    <div className='main-container'>  {/* Wrapper for Navbar and Home */}
      <div className='home-container'>
        {/* Left side - Image */}
        <div className='image-section'>
          <img src={HomeImage} alt="Vizada Logo" className="icon" />
        </div>

        {/* Right side - Content */}
        <div className='content-section'>
          <h2>Welcome to Vizada Global Solutions Pvt Ltd</h2>
          <p>We provide cutting-edge IT solutions, transforming businesses with innovation and expertise.</p>
          <button className="cta-button">Explore More</button>
        </div>
      </div>
    </div>
  );
}

export default Home;
