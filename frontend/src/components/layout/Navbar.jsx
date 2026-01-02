import React from "react";
import { Link } from "react-router";

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-10 py-5 flex justify-between items-center shadow-lg">
      
      {/* Logo / Title */}
      <h1 className="text-3xl font-bold tracking-wide">
        CRM System
      </h1>

      {/* Navigation Links */}
      <ul className="flex gap-10 items-center">
        <li>
          <Link
            to="/"
            className="text-lg font-medium hover:text-gray-200 transition duration-200"
          >
            Home
          </Link>
        </li>

        <li>
          <Link
            to="/dashboard"
            className="text-lg font-medium hover:text-gray-200 transition duration-200"
          >
            Dashboard
          </Link>
        </li>

        <li>
          <Link
            to="/customers"
            className="text-lg font-medium hover:text-gray-200 transition duration-200"
          >
            Customers
          </Link>
        </li>

        <li>
          <Link
            to="/login"
            className="bg-white text-blue-600 px-5 py-2 rounded-full text-lg font-semibold shadow hover:bg-gray-100 transition duration-200"
          >
            Login
          </Link>
        </li>
      </ul>

    </nav>
  );
};

export default Navbar;
