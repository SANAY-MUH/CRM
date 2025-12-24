import React, { useState } from "react";
import { useNavigate } from "react-router";
import Input from "../../components/ui/input";
import Button from "../../components/ui/Button";

const Register = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "Team Member"
  });

  const [error, setError] = useState("");

  // Handle input change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple validation
    if (
      !formData.name ||
      !formData.email ||
      !formData.password
    ) {
      setError("All fields are required");
      return;
    }

    // Normally API call will be here
    console.log("Register Data:", formData);

    // Redirect to login page
    navigate("/login");
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded shadow w-full max-w-md">

        <h2 className="text-2xl font-bold mb-4 text-center">
          Register
        </h2>

        {error && (
          <p className="text-red-500 text-sm mb-3">
            {error}
          </p>
        )}

        <form onSubmit={handleSubmit}>
          <Input
            label="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
          />

          <Input
            label="Email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
          />

          <Input
            label="Password"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter your password"
          />

          {/* Role Selection */}
          <div className="mb-4">
            <label className="block mb-1 text-sm font-medium text-gray-700">
              Role
            </label>
            <select
              name="role"
              value={formData.role}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded"
            >
              <option value="Admin">Admin</option>
              <option value="CRM Manager">CRM Manager</option>
              <option value="Team Member">Team Member</option>
            </select>
          </div>

          <Button type="submit" className="w-full">
            Register
          </Button>
        </form>

      </div>
    </div>
  );
};

export default Register;
