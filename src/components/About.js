import React from "react";
import "./About.css";

function About() {
  return (
    <div className="about-container">
      <h1 className="about-title">About Us</h1>
      
      {/* Company Overview */}
      <section className="about-section">
        <h2>Who We Are</h2>
        <p>
          Vizada Global Solution Pvt Ltd is a technology-driven company dedicated to providing cutting-edge solutions for businesses worldwide. Our expertise spans software development, IT consulting, and business automation.
        </p>
      </section>

      {/* Mission & Vision */}
      <section className="about-section">
        <h2>Our Mission</h2>
        <p>
          To empower businesses with innovative technology solutions, driving efficiency and growth.
        </p>
      </section>

      <section className="about-section">
        <h2>Our Vision</h2>
        <p>
          To be a global leader in providing state-of-the-art digital solutions, enhancing business operations worldwide.
        </p>
      </section>

      {/* Team Section */}
      <section className="about-team">
        <h2>Meet Our Team</h2>
        <div className="team-members">
          <div className="team-card">
            <h3>VIDYA SHEVANTH JAVAREGOWDAe</h3>
            <p>Director</p>
          </div>
          <div className="team-card">
            <h3>YADURAJ PRAVEEN DODDAKOPPAL</h3>
            <p>Director</p>
          </div>
          <div className="team-card">
            <h3>RAGHU KUMAR SHIVANNA</h3>
            <p>Director</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
