import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import Button from "../../components/ui/Button";
import api from "../../services/api";

const AssignCustomer = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [customer, setCustomer] = useState(null); // Current customer
  const [teamMembers, setTeamMembers] = useState([]); // All team members
  const [selectedMember, setSelectedMember] = useState(""); // Selected team member ID
  const [message, setMessage] = useState(""); // Error / success messages
  const [loading, setLoading] = useState(true);

  // Fetch customer
  const fetchCustomer = async () => {
    try {
      const res = await api.get(`/api/Customer/${id}`);
      setCustomer(res.data.customer);
    } catch (err) {
      console.error("Error fetching customer:", err.response?.data || err.message);
    }
  };

  // Fetch team members
  const fetchTeamMembers = async () => {
    try {
      const res = await api.get("/api/Team");
      setTeamMembers(res.data.teams || []);
    } catch (err) {
      console.error("Error fetching team members:", err.response?.data || err.message);
    }
  };

  useEffect(() => {
    Promise.all([fetchCustomer(), fetchTeamMembers()]).finally(() => setLoading(false));
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");

    if (!selectedMember) {
      setMessage("Please select a team member to assign this customer.");
      return;
    }

    try {
      // Find the selected team member
      const member = teamMembers.find((m) => m._id === selectedMember);

      if (!member) {
        setMessage("Selected team member not found.");
        return;
      }

      // Check if customer already assigned
      if (member.customerAssign.includes(customer._id)) {
        setMessage("This customer is already assigned to the selected team member.");
        return;
      }

      // Check if already 3 customers assigned
      if (member.customerAssign.length >= 3) {
        setMessage("This team member already has 3 assigned customers.");
        return;
      }

      // Update the member's customerAssign array
      const updatedCustomerAssign = [...member.customerAssign, customer._id];

      await api.put(`/api/Team/${member._id}`, {
        customerAssign: updatedCustomerAssign,
      });

      setMessage("Customer assigned successfully!");
      navigate("/dashboard/teamMemberList"); // redirect after success
    } catch (err) {
      console.error("Error assigning customer:", err.response?.data || err.message);
      setMessage("Failed to assign customer. Please try again.");
    }
  };

  if (loading) return <p className="text-gray-500">Loading...</p>;
  if (!customer) return <p className="text-red-500">Customer not found.</p>;

  return (
    <div className="max-w-xl mx-auto bg-white p-6 rounded shadow">
      <h2 className="text-2xl font-bold mb-4">Assign Customer</h2>

      <p className="mb-4 text-gray-700">
        Customer: <strong>{customer.name}</strong> ({customer.email})
      </p>

      {message && <p className="mb-3 text-red-500">{message}</p>}

      <form onSubmit={handleSubmit}>
        <label className="block mb-2 font-medium">Select Team Member</label>
        <select
          value={selectedMember}
          onChange={(e) => setSelectedMember(e.target.value)}
          className="w-full border p-2 rounded mb-4"
        >
          <option value="">-- Select --</option>
          {teamMembers.map((member) => (
            <option key={member._id} value={member._id}>
              {member.name} (Assigned: {member.customerAssign.length})
            </option>
          ))}
        </select>

        <Button type="submit" className="w-full">
          Assign Customer
        </Button>
      </form>
    </div>
  );
};

export default AssignCustomer;
