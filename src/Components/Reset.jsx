import React, { useEffect } from "react";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "./firebase";
import "./Auth.css";

export default function Reset() {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const emailVal = e.target.email.value;

    try {
      await sendPasswordResetEmail(auth, emailVal);
      alert("Check your email for a password reset link.");
      window.location.href = "/login";
    } catch (error) {
      alert(error.code);
    }
  };

  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <div className="reset-container min-h-screen grid place-items-center py-16">
      <div className="reset-form md:rounded">
        <h1 className="reset-heading">Forgot Password</h1>
        <form onSubmit={(e) => handleSubmit(e)}>
          <label className="reset-label">Email:</label>
          <input className="reset-input" type="email" name="email" />
          <button className="reset-button" type="submit">
            Reset Password
          </button>
        </form>
      </div>
    </div>
  );
}
