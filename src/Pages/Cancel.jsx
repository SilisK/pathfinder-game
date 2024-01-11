import React from 'react';
import './Cancel.css';
import { Link } from 'react-router-dom'

export default function Cancel() {
  return (
    <div className="cancel-container">
      <div className="cancel-content">
        <h1>Payment Cancelled</h1>
        <p>We're sorry to hear that your payment was cancelled. If you encountered any issues or have questions, please contact our support team.</p>
        <button className="contact-support-btn"><Link to="/support">Contact Support</Link></button>
      </div>
    </div>
  );
}
