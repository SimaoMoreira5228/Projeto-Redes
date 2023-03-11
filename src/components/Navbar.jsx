import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { navLinks } from "../constants/navLinks";
import logo from "../assets/logo.png";
import menu from "../assets/menu.svg";
import close from "../assets/close.svg";

function Navbar() {
  const [Active, setActive] = useState("");
  const [Toggle, setToggle] = useState(false);
  return (
    <nav className="sm:px-16 px-6 w-full flex items-center py-5 fixed top-0 z-20 bg-secondary shadow-xl">
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="Logo" className="w-15 h-10 object-contain" />
        </Link>
        <ul className="list-none hidden lg:flex flex-row gap-10">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${
                Active === link.id ? "text-gray-400" : "text-white"
              } hover:text-gray-200 text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(link.title)}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>
        <div className="lg:hidden flex flex-1 justify-end items-center">
          <img
            src={Toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer"
            onClick={() => setToggle(!Toggle)}
          />
          <div
            className={`${
              !Toggle ? "hidden" : "flex"
            } p-6 bg-secondary absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          />
          <div
            className={`${
              !Toggle ? "hidden" : "flex"
            } p-6 bg-secondary absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className="list-none flex justify-end items-start flex-col gap-4">
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${
                    Active === link.id ? "text-gray-400" : "text-white"
                  } font-popins font-medium cursor-pointer text-[16px]`}
                  onClick={() => {
                    setToggle(!Toggle);
                    setActive(link.title);
                  }}
                >
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;