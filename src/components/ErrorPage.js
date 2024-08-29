import React from 'react';
import { Link } from 'react-router-dom';

function ErrorPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-red-500">404</h1>
        <p className="text-2xl mt-4">Unexpected Application Error</p>
        <p className="mt-2">Oops! The page you are looking for does not exist.</p>
        <Link to="/dashboard" className="mt-6 inline-block px-6 py-2 text-white bg-blue-500 hover:bg-blue-600 rounded-full">
          Go Back Dashboard
        </Link>
      </div>
    </div>
  );
}

export default ErrorPage;
