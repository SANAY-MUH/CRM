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

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.email || !formData.password) {
      setError("Please fill in all fields");
      return;
    }

    console.log("Login Data:", formData);
    navigate("/dashboard");
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-gray-50 to-gray-200 px-6">
      <div className="bg-white p-12 rounded-2xl shadow-2xl w-full max-w-xl">

        <h2 className="text-4xl font-extrabold mb-6 text-center text-gray-800">
          Welcome Back
        </h2>

        <p className="text-center text-gray-600 text-lg mb-8">
          Login to access your CRM dashboard
        </p>

        {error && (
          <p className="text-red-500 text-base mb-6 text-center">
            {error}
          </p>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
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

          <Button type="submit" className="w-full py-4 text-xl">
            Login
          </Button>
        </form>

      </div>
    </div>
  );
};

export default Login;
