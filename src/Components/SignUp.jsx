import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "./firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import "./Auth.css";
import { useAuth } from "./AuthContext";

const SignUp = () => {
  const navigate = useNavigate();
  const [newEmail, setNewEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [checked, setChecked] = useState(false);
  const { login } = useAuth();

  useEffect(() => {
    window.scroll(0, 0);
  }, [navigate]);

  const handleSignUp = async (e) => {
    e.preventDefault();

    if (!checked) {
      console.log("Please agree to the terms and conditions.");
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, newEmail, newPassword);
      console.log(userCredential);
      setNewEmail("");
      setNewPassword("");
      setChecked(false);
      login(userCredential.user);
      navigate("/");
    } catch (error) {
      console.error("Error during signup:", error.message);
    }
  };

  return (
    <div className="bg-gradient-to-r from-gray-700 to-blue-700 w-full min-h-screen grid place-items-center">
      <div className="form-popup my-20 md:border-2 md:overflow-hidden md:rounded-xl">
        <div className="form-box signup flex flex-col md:flex-row">
          <div className="form-details text-center py-24 px-11 grid place-items-center">
            <div className="grid gap-2 drop-shadow-sm">
              <h2 className="text-3xl font-bold">Create Account</h2>
              <p>
                To become a part of our community, please sign up using your personal information.
              </p>
            </div>
          </div>
          <div className="form-content">
            <h2>SIGN UP</h2>
            <form onSubmit={handleSignUp}>
              <div className="input-field">
                <input
                  type="text"
                  required
                  autoComplete="email"
                  value={newEmail}
                  onChange={(e) => setNewEmail(e.target.value)}
                />
                <label>Enter your Email</label>
              </div>
              <div className="input-field">
                <input
                  type="password"
                  required
                  autoComplete="new-password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                />
                <label>Create Password</label>
              </div>
              <div className="policy-text">
                <input
                  type="checkbox"
                  id="policy"
                  checked={checked}
                  onChange={() => setChecked(!checked)}
                />
                <label htmlFor="policy">
                  I agree with the
                  <a href="#"> Terms & Conditions</a>
                </label>
              </div>
              <button type="submit">Sign Up</button>
              <div className="bottom-link">
                Already have an account?
                <Link to="/login"> Login</Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
