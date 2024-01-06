import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from './firebase';
import { useAuth } from '../Components/AuthContext';
import './Auth.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      setEmail('');
      setPassword('');
      setError('');
      login(user);
      navigate('/');
    } catch (error) {
      console.error(error);
      setError('Wrong password. Please try again.');
    }
  };

  const handleReset = () => {
    navigate('/reset');
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setError('');
  };

  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <div className="bg-gradient-to-r from-blue-700 to-gray-700 w-full min-h-screen grid place-items-center">
      <div className="form-popup my-20 md:border-2 md:overflow-hidden md:rounded-xl">
        <div className="form-box login flex flex-col md:flex-row">
          <div className="form-details text-center py-24 px-11 grid place-items-center">
            <div className="grid gap-2 drop-shadow-sm">
              <h2 className="text-3xl font-bold">Welcome Back!</h2>
              <p>
                Dive into a world of limitless stories – craft your own, engage
                with others, and embark on a storytelling adventure.
              </p>
            </div>
          </div>
          <div className="form-content">
            <h2>LOGIN</h2>
            <form action="#" onSubmit={handleLogin}>
              <div className="input-field">
                <input
                  type="text"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <label>Email</label>
              </div>
              <div className="input-field">
                <input
                  type="password"
                  required
                  value={password}
                  onChange={handlePasswordChange}
                />
                <label>Password</label>
                {error && <p className="error-message">{error}</p>}
              </div>
              <Link onClick={handleReset} to="/reset" className="forgot-pass">
                Forgot password?
              </Link>
              <button type="submit">Log In</button>
              <div className="bottom-link">
                Don't have an account?
                <Link to="/signup"> Sign Up</Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

