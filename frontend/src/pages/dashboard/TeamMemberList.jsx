import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import api from "../../services/api";
import TeamMemberCard from "./TeamMemberCard";

const TeamMemberList = () => {
  const [team, setTeam] = useState([]);
  const [customers, setCustomers] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  // Fetch all team members and customers
  const fetchData = async () => {
    try {
      const [teamRes, customerRes] = await Promise.all([
        api.get("/api/Team"),
        api.get("/api/Customer"),
      ]);

      setTeam(teamRes.data.teams || []);
      setCustomers(customerRes.data.customers || []);
    } catch (err) {
      console.error("Error fetching data:", err.response?.data || err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this team member?")) return;

    try {
      await api.delete(`/api/Team/${id}`);
      setTeam((prev) => prev.filter((member) => member._id !== id));
    } catch (err) {
      console.error("Error deleting team member:", err.response?.data || err.message);
    }
  };

  if (loading) return <p className="text-gray-500">Loading team members...</p>;
  if (!team.length) return <p className="text-gray-500">No team members added</p>;

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Team Members</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {team.map((member) => {
          // Map customer IDs to names
          const assignedNames =
            member.customerAssign?.map(
              (custId) => customers.find((c) => c._id === custId)?.name
            ).filter(Boolean) || [];

          return (
            <TeamMemberCard
              key={member._id}
              _id={member._id}
              name={member.name}
              email={member.email}
              customers={assignedNames}
              status={member.status}
              onDelete={handleDelete}
              onEdit={() => navigate(`/dashboard/editTeamMember/${member._id}`)}
              onAssign={() => navigate(`/dashboard/assignCustomer/${member._id}`)}
            />
          );
        })}
      </div>
    </div>
  );
};

export default TeamMemberList;
