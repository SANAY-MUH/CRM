import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";
import Input from "../../components/ui/input";
import Button from "../../components/ui/Button";

const EditCustomer = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [customerData, setCustomerData] = useState({
    name: "",
    email: "",
    phone: "",
    status: "New",
  });

  const [error, setError] = useState("");

  // Dummy data (replace with API call later)
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
  ];

  useEffect(() => {
    // Find the customer by ID
    const foundCustomer = dummyCustomers.find((c) => c._id === id);
    if (foundCustomer) {
      setCustomerData(foundCustomer);
    }
  }, [id]);

  // Handle input change
  const handleChange = (e) => {
    setCustomerData({
      ...customerData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!customerData.name || !customerData.email || !customerData.phone) {
      setError("All fields are required");
      return;
    }

    // API call to update customer would go here
    console.log("Updated Customer:", customerData);

    // Redirect to customer list
    navigate("/customers");
  };

  return (
    <div className="max-w-xl mx-auto bg-white p-6 rounded shadow">
      <h2 className="text-2xl font-bold mb-4">Edit Customer</h2>

      {error && (
        <p className="text-red-500 text-sm mb-3">{error}</p>
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
          Update Customer
        </Button>
      </form>
    </div>
  );
};

export default EditCustomer;
