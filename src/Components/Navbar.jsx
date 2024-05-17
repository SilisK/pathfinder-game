import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useAuth } from "../Components/AuthContext";
import hamburger_menu from "../assets/gizmos/hamburger-menu.png";
import close_button from "../assets/gizmos/close.png";

function NavBar() {
  const location = useLocation();
  const [navToggled, setNavToggled] = useState(false);
  const { currentUser, loading, logout } = useAuth();

  useEffect(() => {
    setNavToggled(false);
  }, [location]);

  useEffect(() => {
    if (navToggled) {
      setNavToggled(false);
    }
  }, [currentUser]);

  if (loading) {
    return null;
  }

  return (
    <nav className="w-screen bg-gradient-to-b from-blue-800 backdrop-filter backdrop-blur flex flex-col items-center justify-between p-2 text-white fixed z-50 md:flex-row">
      <div className="flex items-center justify-between w-full">
        <Link to="/" className="flex items-center sm:text-xl">
          <div className="logo"></div>
          <h1 className="uppercase leading-loose tracking-wider font-bold">
            Pathfinder
          </h1>
        </Link>
        <div
          className="cursor-pointer md:hidden"
          onClick={() => setNavToggled(!navToggled)}
        >
          <img
            src={navToggled ? close_button : hamburger_menu}
            className="select-none pointer-events-none w-10"
            alt="Toggle Navigation"
          />
        </div>
      </div>
      <div
        className={`w-full ${
          navToggled ? "py-5 flex flex-col items-center" : "hidden"
        } justify-between md:flex md:bg-transparent md:flex-row md:w-max`}
      >
        <Link
          to="/"
          className={`text-md px-6 py-2 ${
            location.pathname == "/" ? "location-underline" : ""
          }`}
        >
          Home
        </Link>
        {/*  */}
        <Link
          to="/play"
          className={`text-md px-6 py-2 ${
            location.pathname == "/play" ? "location-underline" : ""
          }`}
        >
          Play
        </Link>
        {/*  */}
        <Link
          to="/membership"
          className={`text-md px-6 py-2 ${
            location.pathname == "/membership" ? "location-underline" : ""
          }`}
        >
          Membership
        </Link>
        {/*  */}
        <Link
          to="/about"
          className={`text-md px-6 py-2 ${
            location.pathname == "/about" ? "location-underline" : ""
          }`}
        >
          About
        </Link>
        {/*  */}
        {currentUser ? (
          <Link
            to="/"
            onClick={logout}
            className="text-md px-6 py-2 hover-underline"
          >
            Logout
          </Link>
        ) : (
          <Link
            to="/login"
            className={`text-md px-6 py-2 ${
              location.pathname == "/login" ? "location-underline" : ""
            }`}
          >
            Login
          </Link>
        )}
      </div>
    </nav>
  );
}

export default NavBar;
