import React from "react";
import { Link } from "react-router";
import Button from "../components/ui/Button";

const Home = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gradient-to-br from-gray-50 to-gray-200 text-center px-6">
      
      <h1 className="text-5xl font-extrabold mb-6 text-gray-800 tracking-tight">
        Welcome to CRM System
      </h1>

      <p className="text-lg text-gray-700 max-w-2xl mb-10 leading-relaxed">
        Manage your customers, track progress, and assign tasks to your team members easily — all from one powerful dashboard.
      </p>

      <div className="flex gap-6 mb-14">
        <Link to="/login">
          <Button className="px-8 py-3 text-lg">
            Login
          </Button>
        </Link>

        <Link to="/register">
          <Button className="px-8 py-3 text-lg bg-green-600 hover:bg-green-700">
            Register
          </Button>
        </Link>
      </div>

      <div className="bg-white shadow-lg rounded-xl p-8 max-w-2xl w-full text-left">
        <h2 className="text-3xl font-bold mb-6 text-gray-800">
          Features
        </h2>

        <ul className="space-y-3 text-gray-700 text-lg">
          <li>• CRUD operations for customer profiles</li>
          <li>• Assign customers to team members</li>
          <li>• Track customer status (New, Contacted, In Progress, Closed)</li>
          <li>• User roles: Admin, CRM Manager, Team Member</li>
          <li>• Dashboard showing customer distribution and progress</li>
        </ul>
      </div>
    </div>
  );
};

export default Home;
