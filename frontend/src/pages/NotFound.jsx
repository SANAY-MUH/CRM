import React from "react";
import { Link } from "react-router";
import Button from "../components/ui/Button";

const NotFound = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100 text-center p-4">
      <h1 className="text-6xl font-bold text-red-600 mb-4">404</h1>
      <h2 className="text-2xl font-semibold mb-2">Page Not Found</h2>
      <p className="text-gray-700 mb-6">
        Sorry, the page you are looking for does not exist.
      </p>

      <Link to="/">
        <Button className="px-6 py-2">
          Go to Home
        </Button>
      </Link>
    </div>
  );
};

export default NotFound;
