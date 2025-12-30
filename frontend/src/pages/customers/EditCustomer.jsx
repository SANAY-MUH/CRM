import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";
import Input from "../../components/ui/Input";
import Button from "../../components/ui/Button";
import api from "../../services/api";

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

  const getData = async () => {
    try {
      const resp = await api.get(`/api/Customer/${id}`);
      setCustomerData({
        name: resp.data.customer.name,
        email: resp.data.customer.email,
        phone: resp.data.customer.phone,
        status: resp.data.customer.status,
      });
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getData();
  }, [id]);

  const handleChange = (e) => {
    setCustomerData({
      ...customerData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await api.put(`/api/Customer/${id}`, customerData);
      navigate("/customers");
    } catch (err) {
      setError(err?.response?.data?.message || "Something went wrong");
    }
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
        />

        <Input
          label="Email"
          type="email"
          name="email"
          value={customerData.email}
          onChange={handleChange}
        />

        <Input
          label="Phone"
          name="phone"
          value={customerData.phone}
          onChange={handleChange}
        />

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
