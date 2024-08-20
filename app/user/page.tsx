// user dashboard page
'use client';

import { useState } from 'react';
import SkiForm from '../compenents/addSkiForm';

const UserPage = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const toggleForm = () => setIsFormOpen(!isFormOpen);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">User Page</h1>
      <button
        onClick={toggleForm}
        
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        Add Ski
      </button>

      {isFormOpen && <SkiForm onClose={toggleForm} />}
    </div>
  );
};

export default UserPage;
