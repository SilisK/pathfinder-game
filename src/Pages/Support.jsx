import React, { useState } from 'react';
import './Support.css'; 

export default function Support() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    issue: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="support-container">
      <div className="support-content">
        <form className="support-form" onSubmit={handleSubmit} action="https://formspree.io/f/xrgnbgky" method="POST">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />

          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
            required
          />

          <label htmlFor="phoneNumber">Phone Number:</label>
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            pattern="[0-9]{10}"
            title="Enter a 10-digit phone number"
            required
          />

          <label htmlFor="issue">Describe Your Issue:</label>
          <textarea id="issue" name="issue" value={formData.issue} onChange={handleChange} required></textarea>

          <button className="btn-gradient" type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
