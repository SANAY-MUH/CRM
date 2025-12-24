import React, { useState, useEffect } from "react";
import { Link } from "react-router";
import Button from "../../components/ui/Button";
import CustomerCard from "../../components/customers/CustomerCard";
import CustomerStatusSummary from "../../components/customers/CustomerStatusSummary";

const CustomerList = () => {
  const [customers, setCustomers] = useState([]);

  // Dummy customer data (replace with API call later)
  const dummyCustomers = [
    {
      _id: "1",
      name: "Ali",
      email: "ali@example.com",
      phone: "1234567890",
      status: "New",
    },
    {
      _id: "2",
      name: "Sara",
      email: "sara@example.com",
      phone: "0987654321",
      status: "In Progress",
    },
    {
      _id: "3",
      name: "Ahmed",
      email: "ahmed@example.com",
      phone: "1122334455",
      status: "Contacted",
    },
    {
      _id: "4",
      name: "Zain",
      email: "zain@example.com",
      phone: "5566778899",
      status: "Closed",
    },
  ];

  useEffect(() => {
    // Simulate API call
    setCustomers(dummyCustomers);
  }, []);

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Customers</h2>
        <Link to="/customers/add">
          <Button>Add Customer</Button>
        </Link>
      </div>

      {/* Status Summary */}
      <CustomerStatusSummary customers={customers} />

      {/* Customer Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {customers.length > 0 ? (
          customers.map((customer) => (
            <CustomerCard key={customer._id} customer={customer} />
          ))
        ) : (
          <p className="text-gray-500">No customers found.</p>
        )}
      </div>
    </div>
  );
};

export default CustomerList;
