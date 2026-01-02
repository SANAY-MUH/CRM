import React from "react";
import { Link } from "react-router";

const Sidebar = () => {
  return (
    <aside className="w-72 bg-gradient-to-b from-gray-900 to-gray-800 text-white min-h-screen px-8 py-8 shadow-xl">
      
      <h2 className="text-2xl font-bold mb-10 tracking-wide">
        Menu
      </h2>

      <ul className="flex flex-col gap-5">
        <li>
          <Link
            to="/dashboard"
            className="block px-5 py-3 rounded-lg text-lg font-medium hover:bg-gray-700/70 transition duration-200"
          >
            Dashboard
          </Link>
        </li>

        <li>
          <Link
            to="/customers"
            className="block px-5 py-3 rounded-lg text-lg font-medium hover:bg-gray-700/70 transition duration-200"
          >
            Customers
          </Link>
        </li>

        <li>
          <Link
            to="/customers/add"
            className="block px-5 py-3 rounded-lg text-lg font-medium hover:bg-gray-700/70 transition duration-200"
          >
            Add Customer
          </Link>
        </li>

        <li>
          <Link
            to="/login"
            className="block px-5 py-3 rounded-lg text-lg font-medium hover:bg-gray-700/70 transition duration-200"
          >
            Login
          </Link>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
