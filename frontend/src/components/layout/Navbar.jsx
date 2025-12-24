import React from "react";
import { Link } from "react-router";

const Navbar = () => {
  return (
    <nav className="bg-blue-600 text-white px-6 py-3 flex justify-between items-center">
      
      {/* Logo / Title */}
      <h1 className="text-xl font-semibold">
        CRM System
      </h1>

      {/* Navigation Links */}
      <ul className="flex gap-6">
        <li>
          <Link to="/" className="hover:underline">
            Home
          </Link>
        </li>

        <li>
          <Link to="/dashboard" className="hover:underline">
            Dashboard
          </Link>
        </li>

        <li>
          <Link to="/customers" className="hover:underline">
            Customers
          </Link>
        </li>

        <li>
          <Link to="/login" className="hover:underline">
            Login
          </Link>
        </li>
      </ul>

    </nav>
  );
};

export default Navbar;
