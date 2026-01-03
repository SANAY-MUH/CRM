import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";
import Button from "../../components/ui/Button";
import api from "../../services/api";

const AssignCustomerByAdmin = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);
  const [teamMember, setTeamMember] = useState(null);
  const [customers, setCustomers] = useState([]);
  const [selectedCustomers, setSelectedCustomers] = useState([]); // assigned (max 3)

  /* ================= FETCH TEAM MEMBER ================= */
  const fetchTeamMember = async () => {
    try {
      const res = await api.get(`/api/Team/${id}`);
      setTeamMember(res.data.team);
      setSelectedCustomers(res.data.team.customerAssign || []);
    } catch (err) {
      console.error("Error fetching team member:", err.response?.data || err.message);
    }
  };

  /* ================= FETCH ALL CUSTOMERS ================= */
  const fetchCustomers = async () => {
    try {
      const res = await api.get("/api/Customer");
      setCustomers(res.data.customers || []);
    } catch (err) {
      console.error("Error fetching customers:", err.response?.data || err.message);
    }
  };

  useEffect(() => {
    Promise.all([fetchTeamMember(), fetchCustomers()]).finally(() =>
      setLoading(false)
    );
  }, [id]);

  /* ================= HANDLE SELECT ================= */
  const handleCustomerSelect = (e) => {
    const value = e.target.value;

    if (!value) return; // skip if placeholder selected
    if (selectedCustomers.includes(value)) return;

    if (selectedCustomers.length >= 3) {
      alert("You can assign only 3 customers");
      return;
    }

    setSelectedCustomers([...selectedCustomers, value]);
  };

  /* ================= REMOVE CUSTOMER ================= */
  const removeCustomer = (customerId) => {
    setSelectedCustomers(selectedCustomers.filter((c) => c !== customerId));
  };

  /* ================= SUBMIT ================= */
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send as array, not string
      await api.put(`/api/Team/${id}`, {
        customerAssign: selectedCustomers
      });

      navigate("/dashboard/teamMemberList");
    } catch (err) {
      console.error("Error updating assignment:", err.response?.data || err.message);
    }
  };

  if (loading) return <p className="text-gray-500">Loading...</p>;
  if (!teamMember) return <p className="text-red-500">Team member not found</p>;

  return (
    <div className="max-w-lg mx-auto bg-white p-6 rounded shadow">
      <h2 className="text-2xl font-bold mb-4">Assign Customers</h2>

      {/* TEAM INFO */}
      <div className="mb-4">
        <p><strong>Name:</strong> {teamMember.name}</p>
        <p><strong>Email:</strong> {teamMember.email}</p>
        <p><strong>Status:</strong> {teamMember.status}</p>
      </div>

      {/* CUSTOMER SELECT */}
      <form onSubmit={handleSubmit} className="space-y-4">
        <select
          onChange={handleCustomerSelect}
          className="w-full border p-2 rounded"
          value="" // always reset to placeholder after selection
        >
          <option value="">Select Customer</option>
          {customers.map((customer) => (
            <option key={customer._id} value={customer._id}>
              {customer.name}
            </option>
          ))}
        </select>

        {/* DISPLAY SELECTED CUSTOMERS */}
        <div className="flex flex-wrap gap-2">
          {selectedCustomers.map((custId) => {
            const customer = customers.find(c => c._id === custId);
            return (
              <span
                key={custId}
                className="bg-blue-100 text-blue-700 px-2 py-1 rounded flex items-center gap-1"
              >
                {customer?.name || custId}
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

        <div className="flex gap-2">
          <Button type="submit">Update Assignment</Button>
          <Button
            type="button"
            className="bg-gray-400 hover:bg-gray-500"
            onClick={() => navigate("/dashboard/teamMemberList")}
          >
            Cancel
          </Button>
        </div>
      </form>
    </div>
  );
};

export default AssignCustomerByAdmin;
