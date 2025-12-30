import React, { useState, useEffect } from "react";
import { Link } from "react-router";
import Button from "../../components/ui/Button";
import CustomerCard from "../../components/customers/CustomerCard";
import CustomerStatusSummary from "../../components/customers/CustomerStatusSummary";
import api from "../../services/api.js";

const CustomerList = () => {
  const [customerData, setCustomerData] = useState([])

  const fetchData = async() => {
    try{
      const resp = await api.get("/api/Customer")
      setCustomerData(resp.data.customers)
    }
    catch(error){
      console.log(error)
    }
  }

  useEffect(() => {
    fetchData()
  }, []);

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Customers</h2>
        <Link to="/customers/add">
          <Button>Add Customer</Button>
        </Link>
      </div>

      {/* Status Summary */}
      <CustomerStatusSummary customers={customerData} />

      {/* Customer Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {customerData.length > 0 ? (
          customerData.map((customer) => (
            <CustomerCard key={customer._id} customer={customer} />
          ))
        ) : (
          <p className="text-gray-500">No customers found.</p>
        )}
      </div>
    </div>
  );
};

export default CustomerList;
