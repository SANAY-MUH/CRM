import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router";

// Layout Components
import Navbar from "./components/layout/Navbar";
import Sidebar from "./components/layout/Sidebar";

// Pages
import Home from "./pages/Home";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Dashboard from "./pages/dashboard/Dashboard";
import CustomerList from "./pages/customers/CustomerList";
import AddCustomer from "./pages/customers/AddCustomer";
import EditCustomer from "./pages/customers/EditCustomer";
import CustomerDetails from "./pages/customers/CustomerDetails";
import AssignCustomer from "./pages/customers/AssignCustomer";
import NotFound from "./pages/NotFound";

const App = () => {
  return (
    <Router>
      <div className="flex min-h-screen bg-gray-100">

        {/* Sidebar */}
        <Sidebar />

        <div className="flex-1 flex flex-col">
          {/* Navbar */}
          <Navbar />

          {/* Main Content */}
          <main className="flex-1 p-6">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/dashboard" element={<Dashboard />} />

              {/* Customer Routes */}
              <Route path="/customers" element={<CustomerList />} />
              <Route path="/customers/add" element={<AddCustomer />} />
              <Route path="/customers/edit/:id" element={<EditCustomer />} />
              <Route path="/customers/:id" element={<CustomerDetails />} />
              <Route path="/customers/assign/:id" element={<AssignCustomer />} />

              {/* 404 Page */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
};

export default App;
