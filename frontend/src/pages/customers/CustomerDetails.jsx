import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router";
import Button from "../../components/ui/Button";
import CustomerCard from "../../components/customers/CustomerCard";
import api from "../../services/api";

const CustomerDetails = () => {
  const { id } = useParams();

  const [customer, setCustomer] = useState(null);

  // Dummy data (replace with API call later)
  const getData = async () => {
  try {
    const resp = await api.get(`/api/Customer/${id}`);
    setCustomer(resp.data.customer);
  } catch (err) {
    console.log(err);
  }
};


  useEffect(() => {
      getData();
    }, [id]);

  if (!customer) {
    return (
      <div className="p-6 text-center">
        <p className="text-gray-500">Customer not found.</p>
        <Link to="/customers">
          <Button className="mt-4">Back to Customers</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-xl mx-auto bg-white p-6 rounded shadow">
      <h2 className="text-2xl font-bold mb-4">Customer Details</h2>

      <CustomerCard customer={customer} />

      <div className="mt-4 flex gap-3">
        <Link to={`/customers/edit/${customer._id}`}>
          <Button>Edit Customer</Button>
        </Link>
        <Link to={`/customers/assign/${customer._id}`}>
          <Button className="bg-green-600 hover:bg-green-700">
            Assign Customer
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default CustomerDetails;
