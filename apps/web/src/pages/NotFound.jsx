
import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="profile-card flex flex-col items-center justify-center py-20">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <p className="text-xl text-[#9F9EA1] mb-8">Oops! Page not found</p>
      <Link to="/" className="button-primary">
        Return to Home
      </Link>
    </div>
  );
};

export default NotFound;
