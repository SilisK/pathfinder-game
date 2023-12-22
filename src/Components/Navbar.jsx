import { Link } from "react-router-dom";
import hamburger_menu from "../assets/gizmos/hamburger-menu.png";
import close_button from "../assets/gizmos/close.png";
import { useEffect, useState } from "react";

function NavBar() {
  const [navToggled, setNavToggled] = useState(false);

  return (
    <nav className="w-screen bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-md flex flex-col items-center justify-between p-2 text-white fixed z-50 md:flex-row">
      {/* Logo */}
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
          />
        </div>
      </div>
      {/* Nav Links */}
      <div
        className={`w-full ${
          navToggled
            ? "py-5 flex flex-col items-center"
            : "hidden"
        } justify-between md:flex md:bg-transparent md:flex-row md:w-max`}
      >
        <Link to="/" className="text-md px-6 py-2 hover-underline">
          Home
        </Link>
        <Link to="/about" className="text-md px-6 py-2 hover-underline">
          About
        </Link>
        <Link to="/login" className="text-md px-6 py-2 hover-underline">
          Login
        </Link>
      </div>
    </nav>
  );
}

export default NavBar;
