import React, { useState } from "react";
import { useNavigate } from "react-router";
import Input from "../../components/ui/input";
import Button from "../../components/ui/Button";

const AddCustomer = () => {
  const navigate = useNavigate();

  const [customer, setCustomer] = useState([])
  const [customerData, setCustomerData] = useState({
    name: "",
    email: "",
    phone: "",
    status: "New"
  });

  const [error, setError] = useState("");

  // Handle input change
  const handleChange = (e) => {
    setCustomerData({
      ...customerData,
      [e.target.name]: e.target.value
    });
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple validation
    if (
      !customerData.name ||
      !customerData.email ||
      !customerData.phone
    ) {
      setError("All fields are required");
      return;
    }
    setCustomer((prev) => {
      let newCustomer = {
      name: customerData.name,
      email: customerData.email,
      phone: customerData.phone,
      status: customerData.status,
      }
      return [...prev, newCustomer]
    })

    // Normally API call will be here
    console.log("New Customer:", customerData);

    // Redirect to customer list
    navigate("/customers");
  };

  return (
    <div className="max-w-xl mx-auto bg-white p-6 rounded shadow">
      <h2 className="text-2xl font-bold mb-4">
        Add New Customer
      </h2>

      {error && (
        <p className="text-red-500 text-sm mb-3">
          {error}
        </p>
      )}

      <form onSubmit={handleSubmit}>
        <Input
          label="Customer Name"
          name="name"
          value={customerData.name}
          onChange={handleChange}
          placeholder="Enter customer name"
        />

        <Input
          label="Email"
          type="email"
          name="email"
          value={customerData.email}
          onChange={handleChange}
          placeholder="Enter email address"
        />

        <Input
          label="Phone"
          name="phone"
          value={customerData.phone}
          onChange={handleChange}
          placeholder="Enter phone number"
        />

        {/* Status Dropdown */}
        <div className="mb-4">
          <label className="block mb-1 text-sm font-medium text-gray-700">
            Status
          </label>
          <select
            name="status"
            value={customerData.status}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded"
          >
            <option value="New">New</option>
            <option value="Contacted">Contacted</option>
            <option value="In Progress">In Progress</option>
            <option value="Closed">Closed</option>
          </select>
        </div>

        <Button type="submit" className="w-full">
          Add Customer
        </Button>
      </form>
    </div>
  );
};

export default AddCustomer;
