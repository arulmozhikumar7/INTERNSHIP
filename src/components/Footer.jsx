import React from "react";
import { Link } from "react-router-dom";
import { CNGLOGO } from "@assets";

const Footer = () => {
  return (
    <footer className="text-gray-600 body-font">
      <div className="container flex flex-col flex-wrap px-5 py-24 mx-auto md:items-center lg:items-start md:flex-row md:flex-nowrap">
        <div className="flex-shrink-0 w-64 mx-auto text-center md:mx-0 md:text-left">
          <a className="flex items-center justify-center font-medium text-gray-900 title-font md:justify-start">
            <img
              src={CNGLOGO}
              alt="CNG Logo"
              className="object-cover object-center w-10 h-10 rounded-full"
            />
            <span className="ml-3 text-xl">CNG Navigator</span>
          </a>
          <p className="mt-2 text-sm text-gray-500">
            We provide a location-based service to help users find the nearest
            CNG pump station to their location, with accurate data on direction,
            speed, and distance. Our goal is to make refueling a hassle-free
            experience for drivers.
          </p>
        </div>
        <div className="flex flex-wrap flex-grow mt-10 -mb-10 text-center md:pl-20 md:mt-0 md:text-left">
          <div className="w-full px-4 ">
            <h2 className="mb-3 text-xl font-medium tracking-widest text-gray-900 title-font">
              Important Links
            </h2>
            <nav className="mb-10 list-none">
              <li>
                <Link to="/App" className="text-gray-600 hover:text-gray-800">
                  App
                </Link>
              </li>
              <li>
                <Link
                  to="/terms-and-conditions"
                  className="text-gray-600 hover:text-gray-800"
                >
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link
                  to="/Privacy-Policy"
                  className="text-gray-600 hover:text-gray-800"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link className="text-gray-600 hover:text-gray-800">
                  Cancellation & Refund Policy
                </Link>
              </li>
            </nav>
          </div>
        </div>
        <div className="flex flex-wrap flex-grow mt-10 -mb-10 text-center md:pl-20 md:mt-0 md:text-left">
          <div className="w-full px-4 ">
            <h2 className="mb-3 text-xl font-medium tracking-widest text-gray-900 title-font">
              Contact Info
            </h2>
            <nav className="mb-10 list-none">
              <li className="">
                <span className="font-semibold text-gray-800">Address </span> :
                VG Tech 10A, Pillaiyar Koil Street, Mannurpet, Chennai-600050
              </li>
              <li>
                <span className="font-semibold text-gray-800"> Call Us </span> :
                +91 8111000824
              </li>
              <li>
                <span className="font-semibold text-gray-800"> Email </span> :
                info@cngnavigator.com
              </li>
            </nav>
          </div>
        </div>
      </div>
      <div className="bg-gray-100">
        <div className="container flex flex-col flex-wrap px-5 py-4 mx-auto sm:flex-row">
          <p className="text-sm text-center text-gray-500 sm:text-left">
            © {new Date().getFullYear()} CNG Navigator | Powered by VG Tech
          </p>
          <span className="inline-flex justify-center mt-2 sm:ml-auto sm:mt-0 sm:justify-start">
            <a className="text-gray-500">
              <svg
                fill="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
              </svg>
            </a>
            <a className="ml-3 text-gray-500">
              <svg
                fill="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
              </svg>
            </a>
            <a className="ml-3 text-gray-500">
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
              </svg>
            </a>
            <a className="ml-3 text-gray-500">
              <svg
                fill="currentColor"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="0"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="none"
                  d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                ></path>
                <circle cx="4" cy="4" r="2" stroke="none"></circle>
              </svg>
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
