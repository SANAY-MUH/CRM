import React from "react";
import { Link } from "react-router";

const CustomerCard = ({ customer, onDelete }) => {
  return (
    <div className="bg-white border border-gray-200 rounded-2xl shadow-md p-6 hover:shadow-lg transition">
      
      {/* Customer Name */}
      <h3 className="text-2xl font-bold text-gray-800 mb-1">
        {customer.name}
      </h3>

      {/* Email */}
      <p className="text-base text-gray-500 mb-4">
        {customer.email}
      </p>

      {/* Status */}
      <div className="mb-5">
        <span className="text-sm font-semibold text-gray-700 mr-2">
          Status:
        </span>
        <span
          className={`inline-block px-3 py-1 text-sm font-medium rounded-full ${
            customer.status === "New"
              ? "bg-blue-100 text-blue-700"
              : customer.status === "Contacted"
              ? "bg-yellow-100 text-yellow-700"
              : customer.status === "In Progress"
              ? "bg-purple-100 text-purple-700"
              : "bg-green-100 text-green-700"
          }`}
        >
          {customer.status}
        </span>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-4 pt-4 border-t">
        <Link
          to={`/customers/${customer._id}`}
          className="flex-1 text-center text-sm font-medium text-blue-600 hover:text-blue-700 transition"
        >
          View
        </Link>

        <Link
          to={`/customers/edit/${customer._id}`}
          className="flex-1 text-center text-sm font-medium text-green-600 hover:text-green-700 transition"
        >
          Edit
        </Link>

        <button
          onClick={() => onDelete(customer._id)}
          className="flex-1 text-sm font-medium text-red-600 hover:text-red-700 transition"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default CustomerCard;
