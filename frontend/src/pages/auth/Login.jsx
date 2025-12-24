import React, { useState } from "react";
import { useNavigate } from "react-router";
import Input from "../../components/ui/input";
import Button from "../../components/ui/Button";

const Login = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: ""
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
    if (!formData.email || !formData.password) {
      setError("Please fill in all fields");
      return;
    }

    // Normally API call will be here
    console.log("Login Data:", formData);

    // Temporary navigation after login
    navigate("/dashboard");
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded shadow w-full max-w-md">

        <h2 className="text-2xl font-bold mb-4 text-center">
          Login
        </h2>

        {error && (
          <p className="text-red-500 text-sm mb-3">
            {error}
          </p>
        )}

        <form onSubmit={handleSubmit}>
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

          <Button type="submit" className="w-full mt-2">
            Login
          </Button>
        </form>

      </div>
    </div>
  );
};

export default Login;
