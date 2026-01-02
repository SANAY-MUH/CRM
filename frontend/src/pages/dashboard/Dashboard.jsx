import React, { useState } from "react";
import { Link, Outlet } from "react-router";

import Button from "../../components/ui/Button";
import TeamMemberList from "./TeamMemberList";

const Dashboard = () => {
  const [teamMembers, setTeamMembers] = useState([]);

  return (
    <div className="min-h-screen bg-gray-50 px-8 py-6">
      
      {/* Header */}
      <div className="flex justify-between items-center mb-10 bg-white p-6 rounded-2xl shadow-md">
        <div>
          <h1 className="text-4xl font-extrabold text-gray-800">
            Team Dashboard
          </h1>
          <p className="text-gray-500 mt-1 text-lg">
            Manage your team members and assignments
          </p>
        </div>

        <Link to="/dashboard/addTeamMember">
          <Button className="px-6 py-3 text-lg">
            + Add Team Member
          </Button>
        </Link>
      </div>

      {/* Content */}
      <div className="bg-white p-8 rounded-2xl shadow-sm">
        <Outlet />
      </div>

    </div>
  );
};

export default Dashboard;
