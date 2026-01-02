import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";
import Button from "../../components/ui/Button";
import api from "../../services/api";

const EditTeamMember = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    status: "New",
  });

  const [loading, setLoading] = useState(true);
  const [allCustomers, setAllCustomers] = useState([]); // all customers from DB
  const [selectedCustomers, setSelectedCustomers] = useState([]); // assigned customer IDs

  // Fetch team member and all customers
  const fetchData = async () => {
    try {
      const [teamRes, customersRes] = await Promise.all([
        api.get(`/api/Team/${id}`),
        api.get("/api/Customer"),
      ]);

      const team = teamRes.data.team;
      setFormData({
        name: team.name || "",
        email: team.email || "",
        status: team.status || "New",
      });

      setSelectedCustomers(team.customerAssign || []);
      setAllCustomers(customersRes.data.customers || []);
    } catch (err) {
      console.error("Error fetching data:", err.response?.data || err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [id]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleCustomerSelect = (e) => {
    const value = e.target.value;

    if (selectedCustomers.includes(value)) return;
    if (selectedCustomers.length >= 3) {
      alert("You can assign only 3 customers");
      return;
    }

    setSelectedCustomers([...selectedCustomers, value]);
  };

  const removeCustomer = (id) => {
    setSelectedCustomers(selectedCustomers.filter((c) => c !== id));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const payload = {
        ...formData,
        customerAssign: selectedCustomers, // array of IDs
      };

      await api.put(`/api/Team/${id}`, payload);
      navigate("/dashboard/teamMemberList");
    } catch (err) {
      console.error("Error updating team member:", err.response?.data || err.message);
    }
  };

  if (loading) return <p>Loading...</p>;

  return (
    <div className="max-w-lg mx-auto bg-white p-6 rounded shadow">
      <h2 className="text-2xl font-bold mb-4">Edit Team Member</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          value={formData.name}
          placeholder="Member Name"
          className="w-full border p-2 rounded"
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          value={formData.email}
          placeholder="Member Email"
          className="w-full border p-2 rounded"
          onChange={handleChange}
          required
        />

        <select
          onChange={handleCustomerSelect}
          className="w-full border p-2 rounded"
        >
          <option value="">Assign Customer</option>
          {allCustomers.map((customer) => (
            <option key={customer._id} value={customer._id}>
              {customer.name}
            </option>
          ))}
        </select>

        {/* Display selected customers */}
        <div className="flex flex-wrap gap-2">
          {selectedCustomers.map((custId) => {
            const customer = allCustomers.find((c) => c._id === custId);
            return (
              <span
                key={custId}
                className="bg-blue-100 text-blue-700 px-2 py-1 rounded flex items-center gap-1"
              >
                {customer?.name}
                <button
                  type="button"
                  className="text-red-500"
                  onClick={() => removeCustomer(custId)}
                >
                  ✕
                </button>
              </span>
            );
          })}
        </div>

        <select
          name="status"
          value={formData.status}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        >
          <option value="New">New</option>
          <option value="Contacted">Contacted</option>
          <option value="Inprogress">Inprogress</option>
          <option value="Closed">Closed</option>
        </select>

        <Button type="submit">Update Member</Button>
      </form>
    </div>
  );
};

export default EditTeamMember;
