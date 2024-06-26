import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CNGLOGO } from "../assets";
const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen((prevState) => !prevState);
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };
  return (
    <nav className="mb-1 text-sm font-medium bg-gray-100 border-gray-200 ">
      <div className="flex flex-wrap items-center justify-between max-w-screen-xl p-4 mx-auto">
        <Link
          to="/"
          onClick={() => {
            toggleDropdown();
            closeDropdown();
          }}
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img src={CNGLOGO} className="h-8" alt="CNG Logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap ">
            CNG Navigator
          </span>
        </Link>
        <button
          onClick={() => {
            toggleDropdown();
          }}
          type="button"
          className="inline-flex items-center justify-center w-10 h-10 p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 "
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div
          className={`w-full md:flex md:w-auto ${
            isDropdownOpen ? "" : "hidden"
          }`}
          id="navbar-default"
        >
          <ul className="flex flex-col p-4 mt-4 font-medium bg-gray-100 border border-gray-100 rounded-lg md:p-0 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-gray-100 ">
            <li>
              <Link
                to="/"
                onClick={() => {
                  toggleDropdown();
                  closeDropdown(); // Close the dropdown when Contact link is clicked
                }}
                className="block px-3 py-2 text-white bg-green-700 rounded md:bg-transparent md:text-green-700 md:p-0"
                aria-current="page"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                onClick={() => {
                  toggleDropdown();
                  closeDropdown(); // Close the dropdown when Contact link is clicked
                }}
                className="block px-3 py-2 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-green-700 md:p-0 "
                aria-current="page"
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                onClick={() => {
                  toggleDropdown();
                  closeDropdown(); // Close the dropdown when Contact link is clicked
                }}
                className="block px-3 py-2 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-green-700 md:p-0 "
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/terms-and-conditions"
                onClick={() => {
                  toggleDropdown();
                  closeDropdown(); // Close the dropdown when Contact link is clicked
                }}
                className="block px-3 py-2 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-green-700 md:p-0 "
              >
                Terms and Conditions
              </Link>
            </li>
            <li>
              <Link
                to="/login"
                onClick={() => {
                  toggleDropdown();
                  closeDropdown(); // Close the dropdown when Contact link is clicked
                }}
                className="block px-3 py-2 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-green-700 md:p-0"
              >
                Login
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
