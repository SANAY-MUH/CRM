import React from "react";
import { Link } from "react-router";

const Sidebar = () => {
  return (
    <aside className="w-64 bg-gray-800 text-white min-h-screen p-6">
      <h2 className="text-lg font-bold mb-6">Menu</h2>

      <ul className="flex flex-col gap-4">
        <li>
          <Link
            to="/dashboard"
            className="block px-4 py-2 rounded hover:bg-gray-700"
          >
            Dashboard
          </Link>
        </li>

        <li>
          <Link
            to="/customers"
            className="block px-4 py-2 rounded hover:bg-gray-700"
          >
            Customers
          </Link>
        </li>

        <li>
          <Link
            to="/customers/add"
            className="block px-4 py-2 rounded hover:bg-gray-700"
          >
            Add Customer
          </Link>
        </li>

        <li>
          <Link
            to="/login"
            className="block px-4 py-2 rounded hover:bg-gray-700"
          >
            Login
          </Link>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
