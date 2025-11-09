import React, { useState } from "react";
import "./contact.css";

function Contact({ showForm }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent successfully!");
    setFormData({ name: "", email: "", message: "" }); // Clear input fields
  };

  return (
    <div className={`contact-section ${showForm ? "show" : ""}`}>
      {/* Left Side - Contact Info */}
      <div className="contact-info">
        <h2>Contact Details</h2>
        <p><strong>📍 Address:</strong>	No 03, Block No 13c, Sri Rampura 2nd Stage, Mysore, Mysore, Karnataka, India, 570023.</p>
        <p><strong>📞 Phone:</strong> +123 456 7890</p>
        <p><strong>✉ Email:</strong> 	*****meeshajgowda@gmail.com</p>
        <p><strong>⏰ Working Hours:</strong> Mon-Fri, 8AM - 5PM</p>
      </div>

      {/* Right Side - Contact Form */}
      <div className="contact-form-container">
        <h2>Contact Us</h2>
        <form onSubmit={handleSubmit} className="contact-form">
          <label>Name</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />

          <label>Email</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />

          <label>Message</label>
          <textarea name="message" value={formData.message} onChange={handleChange} required></textarea>

          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
