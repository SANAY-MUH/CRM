import React from "react";
import { Link } from "react-router";
import Button from "../components/ui/Button";

const Home = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100 text-center p-4">
      <h1 className="text-4xl font-bold mb-4">Welcome to CRM System</h1>
      <p className="text-gray-700 mb-6">
        Manage your customers, track progress, and assign tasks to your team members easily.
      </p>

      <div className="flex gap-4">
        <Link to="/login">
          <Button className="px-6 py-2">Login</Button>
        </Link>

        <Link to="/register">
          <Button className="px-6 py-2 bg-green-600 hover:bg-green-700">
            Register
          </Button>
        </Link>
      </div>

      <div className="mt-10 max-w-xl text-gray-600">
        <h2 className="text-2xl font-semibold mb-2">Features:</h2>
        <ul className="list-disc list-inside text-left">
          <li>CRUD operations for customer profiles</li>
          <li>Assign customers to team members</li>
          <li>Track customer status (New, Contacted, In Progress, Closed)</li>
          <li>User roles: Admin, CRM Manager, Team Member</li>
          <li>Dashboard showing customer distribution and progress</li>
        </ul>
      </div>
    </div>
  );
};

export default Home;
