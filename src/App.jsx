// Global Styles
import "./App.css";

// DEPENDENCIES
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect } from "react";

// COMPONENTS
import NavBar from "./Components/Navbar";

// PAGES
import Home from "./Pages/Home";
import About from "./Pages/About";
import Login from "./Components/Login";
import Play from "./Pages/Play";
import Membership from "./Pages/Membership";
import Cancel from "./Pages/Cancel";
import Support from "./Pages/Support";
import Signup from "./Components/SignUp";
import Reset from "./Components/Reset";
import Footer from "./Components/Footer";

function App() {
  useEffect(() => {
    waves();
  }, []);

  return (
    <div className="App bg-secondary">
      <div className="waves"></div>
      <main className="min-h-screen relative z-40">
        <Router>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/membership" element={<Membership />} />
            <Route path="/cancel" element={<Cancel />} />
            <Route path="/support" element={<Support />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/reset" element={<Reset />} />
            <Route path="/play" element={<Play />} />
          </Routes>
          <Footer />
        </Router>
      </main>
    </div>
  );
}

export default App;
