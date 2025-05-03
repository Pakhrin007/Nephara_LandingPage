import { useState } from 'react';
import logo from '../assets/Images/logo.png';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="sticky w-full z-50 top-0 start-0 bg-white">
      <div className="max-w-[1280px] flex flex-wrap items-center justify-between mx-auto px-4 py-2">
        <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src={logo} className="h-8" alt="Logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-black font-title">
            Nephara
          </span>
        </a>

        {/* Buttons and Hamburger */}
        <div className="flex md:order-2 items-center">
          <button className="text-black font-medium rounded-lg text-[16px] px-4 py-2 font-title">
            Log in
          </button>
          <button className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-[16px] px-4 py-2 font-title">
            Get started
          </button>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none"
            aria-controls="navbar-sticky"
            aria-expanded={menuOpen}
          >
            <svg
              className="w-5 h-5"
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
        </div>

        {/* Navigation Links */}
        <div
          className={`w-full md:flex md:w-auto md:order-1 ${menuOpen ? 'block' : 'hidden'}`}
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white justify-end items-end mr-0">
            {/* Features with Dropdown */}
            <li className="relative group">
              <a href="#" className="block py-2 px-3 text-black font-title">
                Features
              </a>
              <div className="absolute left-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg hidden group-hover:block z-50">
                <ul className="py-2 text-sm text-gray-700">
                  <li>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                      Feature One
                    </a>
                  </li>
                  <li>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                      Feature Two
                    </a>
                  </li>
                  <li>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                      Feature Three
                    </a>
                  </li>
                </ul>
              </div>
            </li>

            <li>
              <a href="#" className="block py-2 px-3 text-black font-title">
                Pricing
              </a>
            </li>
            <li>
              <a href="#" className="block py-2 px-3 text-black font-title">
                Blog
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
