import React, { useState, useEffect } from "react";
import { Link } from "react-router";
import CustomerStatusSummary from "../../components/customers/CustomerStatusSummary";
import CustomerCard from "../../components/customers/CustomerCard";
import Button from "../../components/ui/Button";

const Dashboard = () => {
  const [customers, setCustomers] = useState([]);

  // Dummy data (replace with API call later)
  const dummyCustomers = [
    { _id: "1", name: "Ali", email: "ali@example.com", status: "New" },
    { _id: "2", name: "Sara", email: "sara@example.com", status: "In Progress" },
    { _id: "3", name: "Ahmed", email: "ahmed@example.com", status: "Contacted" },
    { _id: "4", name: "Zain", email: "zain@example.com", status: "Closed" },
  ];

  useEffect(() => {
    // Simulate fetching customer data
    setCustomers(dummyCustomers);
  }, []);

  return (
    <div className="p-6">

      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <Link to="/customers/add">
          <Button>Add Customer</Button>
        </Link>
      </div>

      {/* Customer Status Summary */}
      <CustomerStatusSummary customers={customers} />

      {/* Recent Customers */}
      <div className="mt-6">
        <h2 className="text-xl font-semibold mb-4">Recent Customers</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {customers.length > 0 ? (
            customers.map((customer) => (
              <CustomerCard key={customer._id} customer={customer} />
            ))
          ) : (
            <p className="text-gray-500">No customers available</p>
          )}
        </div>
      </div>

    </div>
  );
};

export default Dashboard;
