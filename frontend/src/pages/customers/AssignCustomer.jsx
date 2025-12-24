import React, { useState } from "react";
import { useNavigate, useParams } from "react-router";
import Button from "../../components/ui/Button";

const AssignCustomer = () => {
  const navigate = useNavigate();
  const { id } = useParams(); // customer id from URL

  // Dummy team members (later can come from API)
  const teamMembers = [
    "Ali (CRM Manager)",
    "Ahmed (Team Member)",
    "Sara (Team Member)",
    "Zain (Admin)"
  ];

  const [selectedMembers, setSelectedMembers] = useState([]);
  const [error, setError] = useState("");

  // Handle checkbox selection
  const handleCheckboxChange = (member) => {
    if (selectedMembers.includes(member)) {
      setSelectedMembers(
        selectedMembers.filter((m) => m !== member)
      );
    } else {
      setSelectedMembers([...selectedMembers, member]);
    }
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();

    if (selectedMembers.length === 0) {
      setError("Please select at least one team member");
      return;
    }

    // API call will be here later
    console.log("Customer ID:", id);
    console.log("Assigned To:", selectedMembers);

    navigate("/customers");
  };

  return (
    <div className="max-w-xl mx-auto bg-white p-6 rounded shadow">
      <h2 className="text-2xl font-bold mb-4">
        Assign Customer
      </h2>

      <p className="text-sm text-gray-500 mb-4">
        Customer ID: {id}
      </p>

      {error && (
        <p className="text-red-500 text-sm mb-3">
          {error}
        </p>
      )}

      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block mb-2 font-medium">
            Select Team Members
          </label>

          {teamMembers.map((member, index) => (
            <div key={index} className="flex items-center mb-2">
              <input
                type="checkbox"
                className="mr-2"
                checked={selectedMembers.includes(member)}
                onChange={() => handleCheckboxChange(member)}
              />
              <span>{member}</span>
            </div>
          ))}
        </div>

        <Button type="submit" className="w-full">
          Assign Customer
        </Button>
      </form>
    </div>
  );
};

export default AssignCustomer;
