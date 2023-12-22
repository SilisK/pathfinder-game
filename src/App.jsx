// DEPENDENCIES
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect } from "react";

// COMPONENTS
import NavBar from "./Components/Navbar";

// PAGES
import Home from "./Pages/Home";
import About from "./Pages/About";
import Login from "./Pages/Login";
import Play from "./Pages/Play";

import "./App.css";
import Footer from "./Components/Footer";

function App() {
  useEffect(() => {
    waves();
  }, []);

  return (
    <div className="App bg-secondary">
      <div className="waves"></div>
      <main className="min-h-screen">
        <Router>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />
            <Route path="/play" element={<Play />} />
          </Routes>
          <Footer />
        </Router>
      </main>
    </div>
  );
}

export default App;
