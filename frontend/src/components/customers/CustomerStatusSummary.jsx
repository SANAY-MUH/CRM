import React from "react";

const CustomerStatusSummary = ({ customers }) => {
  // Count customers by status
  const newCount = customers.filter(
    (customer) => customer.status === "New"
  ).length;

  const contactedCount = customers.filter(
    (customer) => customer.status === "Contacted"
  ).length;

  const inProgressCount = customers.filter(
    (customer) => customer.status === "In Progress"
  ).length;

  const closedCount = customers.filter(
    (customer) => customer.status === "Closed"
  ).length;

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">

      {/* New */}
      <div className="bg-blue-100 text-blue-700 p-4 rounded shadow">
        <h3 className="text-sm font-semibold">New</h3>
        <p className="text-2xl font-bold">{newCount}</p>
      </div>

      {/* Contacted */}
      <div className="bg-yellow-100 text-yellow-700 p-4 rounded shadow">
        <h3 className="text-sm font-semibold">Contacted</h3>
        <p className="text-2xl font-bold">{contactedCount}</p>
      </div>

      {/* In Progress */}
      <div className="bg-purple-100 text-purple-700 p-4 rounded shadow">
        <h3 className="text-sm font-semibold">In Progress</h3>
        <p className="text-2xl font-bold">{inProgressCount}</p>
      </div>

      {/* Closed */}
      <div className="bg-green-100 text-green-700 p-4 rounded shadow">
        <h3 className="text-sm font-semibold">Closed</h3>
        <p className="text-2xl font-bold">{closedCount}</p>
      </div>

    </div>
  );
};

export default CustomerStatusSummary;
