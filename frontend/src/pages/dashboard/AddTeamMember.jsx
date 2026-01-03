import React, { useState } from "react";
import axios from "axios";
import Button from "../../components/ui/Button";
import api from "../../services/api";
import { useNavigate } from "react-router";

const AddTeamMember = () => {

  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    customeAssign: "",
    status: "New",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await api.post("/api/Team", formData)
      navigate("/dashboard")
    } catch (error) {
      console.log("error creating task : ", error?.response?.data?.message)

    }



  };

  return (
    <div className="max-w-lg mx-auto bg-white p-6 rounded shadow">
      <h2 className="text-2xl font-bold mb-4">Add Team Member</h2>

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

        <input
          type="text"
          name="customeAssign"
          value={formData.customeAssign}
          placeholder="Assigned Customers (comma separated)"
          className="w-full border p-2 rounded"
          onChange={handleChange}
        />

        <select
          name="status"
          value={formData.status}
          className="w-full border p-2 rounded"
          onChange={handleChange}
        >
          <option value="New">New</option>
          <option value="Contacted">Contacted</option>
          <option value="Inprogress">Inprogress</option>
          <option value="Closed">Closed</option>
        </select>

        <Button type="submit">Add Member</Button>
      </form>
    </div>
  );
};

export default AddTeamMember;
