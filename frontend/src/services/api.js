import axios from "axios";

// Base URL for API
const API_URL = "http://localhost:5000/api/customers"; // change according to backend

// GET all customers
export const getCustomers = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error("Error fetching customers:", error);
    return [];
  }
};

// GET a single customer by ID
export const getCustomerById = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching customer:", error);
    return null;
  }
};

// CREATE new customer
export const addCustomer = async (customerData) => {
  try {
    const response = await axios.post(API_URL, customerData);
    return response.data;
  } catch (error) {
    console.error("Error adding customer:", error);
    return null;
  }
};

// UPDATE customer
export const updateCustomer = async (id, customerData) => {
  try {
    const response = await axios.put(`${API_URL}/${id}`, customerData);
    return response.data;
  } catch (error) {
    console.error("Error updating customer:", error);
    return null;
  }
};

// DELETE customer
export const deleteCustomer = async (id) => {
  try {
    const response = await axios.delete(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error deleting customer:", error);
    return null;
  }
};

// ASSIGN customer to team members
export const assignCustomer = async (id, teamMembers) => {
  try {
    const response = await axios.put(`${API_URL}/assign/${id}`, { teamMembers });
    return response.data;
  } catch (error) {
    console.error("Error assigning customer:", error);
    return null;
  }
};
