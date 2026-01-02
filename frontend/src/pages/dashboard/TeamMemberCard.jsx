import React from "react";
import { useNavigate } from "react-router";

const TeamMemberCard = ({
  _id,
  name,
  email,
  customers = [],
  status,
  onDelete,
}) => {
  const navigate = useNavigate();

  return (
    <div className="bg-white border border-gray-200 rounded-2xl shadow-md p-6 flex flex-col justify-between hover:shadow-lg transition">
      
      {/* INFO */}
      <div>
        <h3 className="text-2xl font-bold text-gray-800">
          {name}
        </h3>

        <p className="text-base text-gray-500 mt-1">
          {email}
        </p>

        {/* Assigned Customers */}
        <div className="mt-5">
          <p className="text-sm font-semibold text-gray-700 mb-1">
            Assigned Customers
          </p>
          <p className="text-sm text-gray-600 leading-relaxed">
            {customers.length > 0
              ? customers.join(", ")
              : "No customers assigned"}
          </p>
        </div>

        {/* Status */}
        <div className="mt-5">
          <span
            className={`inline-block px-3 py-1 text-sm font-medium rounded-full ${
              status === "Active"
                ? "bg-green-100 text-green-700"
                : status === "Pending"
                ? "bg-yellow-100 text-yellow-700"
                : status === "Contacted"
                ? "bg-blue-100 text-blue-700"
                : "bg-red-100 text-red-700"
            }`}
          >
            {status}
          </span>
        </div>
      </div>

      {/* ACTION BUTTONS */}
      <div className="flex gap-3 mt-6">
        <button
          onClick={() => navigate(`/dashboard/editTeamMember/${_id}`)}
          className="flex-1 text-sm font-medium bg-blue-500 text-white py-2 rounded-xl hover:bg-blue-600 transition"
        >
          Edit
        </button>

        <button
          onClick={() => navigate(`/dashboard/assignCustomer/${_id}`)}
          className="flex-1 text-sm font-medium bg-purple-500 text-white py-2 rounded-xl hover:bg-purple-600 transition"
        >
          Assign
        </button>

        <button
          onClick={() => onDelete(_id)}
          className="flex-1 text-sm font-medium bg-red-500 text-white py-2 rounded-xl hover:bg-red-600 transition"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default TeamMemberCard;
