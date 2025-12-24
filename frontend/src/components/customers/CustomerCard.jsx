import React from "react";
import { Link } from "react-router";

const CustomerCard = ({ customer }) => {
  return (
    <div className="bg-white shadow rounded p-4 border">
      
      {/* Customer Name */}
      <h3 className="text-lg font-semibold text-gray-800">
        {customer.name}
      </h3>

      {/* Email */}
      <p className="text-sm text-gray-600">
        Email: {customer.email}
      </p>

      {/* Status */}
      <p className="mt-2">
        Status:
        <span
          className={`ml-2 px-2 py-1 text-sm rounded 
          ${
            customer.status === "New"
              ? "bg-blue-100 text-blue-600"
              : customer.status === "Contacted"
              ? "bg-yellow-100 text-yellow-600"
              : customer.status === "In Progress"
              ? "bg-purple-100 text-purple-600"
              : "bg-green-100 text-green-600"
          }`}
        >
          {customer.status}
        </span>
      </p>

      {/* Action Buttons */}
      <div className="flex gap-3 mt-4">
        <Link
          to={`/customers/${customer._id}`}
          className="text-blue-600 hover:underline text-sm"
        >
          View
        </Link>

        <Link
          to={`/customers/edit/${customer._id}`}
          className="text-green-600 hover:underline text-sm"
        >
          Edit
        </Link>
      </div>
    </div>
  );
};

export default CustomerCard;
