import React from "react";
import { BrowserRouter, Routes, Route } from "react-router";

// Layout Components
import Navbar from "./components/layout/Navbar";
import Sidebar from "./components/layout/Sidebar";

// Pages
// import Home from "./pages/Home";
// import Login from "./pages/auth/Login";
// import Register from "./pages/auth/Register";
// import Dashboard from "./pages/dashboard/Dashboard";

// Customer Pages
// import CustomerList from "./pages/customers/CustomerList";
// import AddCustomer from "./pages/customers/AddCustomer";
// import EditCustomer from "./pages/customers/EditCustomer";
// import CustomerDetails from "./pages/customers/CustomerDetails";
// import AssignCustomer from "./pages/customers/AssignCustomer";

// Error Page
// import NotFound from "./pages/NotFound";

const App = () => {
  return (
    <BrowserRouter>
      {/* Common Layout */}
      <Navbar />

      {/* <div className="flex">
        <Sidebar />

        <div className="flex-1 p-6 bg-gray-100 min-h-screen">
          <Routes> */}

            {/* Public Routes */}
            {/* <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} /> */}

            {/* Dashboard */}
            {/* <Route path="/dashboard" element={<Dashboard />} /> */}

            {/* Customer Routes */}
            {/* <Route path="/customers" element={<CustomerList />} />
            <Route path="/customers/add" element={<AddCustomer />} />
            <Route path="/customers/edit/:id" element={<EditCustomer />} />
            <Route path="/customers/:id" element={<CustomerDetails />} />
            <Route path="/customers/assign/:id" element={<AssignCustomer />} /> */}

            {/* 404 */}
            {/* <Route path="*" element={<NotFound />} />

          </Routes>
        </div>
      </div> */}
    </BrowserRouter>
  );
};

export default App;
