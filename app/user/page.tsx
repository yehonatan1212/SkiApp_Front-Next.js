'use client';

import { useState, useEffect } from 'react';
import jwtDecode from 'jwt-decode';
import SkiForm from '../../components/SkiForm';
import { useRouter } from 'next/navigation';

interface DecodedToken {
  user_id: string;
  exp: number;
}

const UserPage = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [userId, setUserId] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      const decoded = jwtDecode<DecodedToken>(token);
      setUserId(decoded.user_id);
    } else {
      router.push('/login'); // Redirect to login if no token
    }
  }, [router]);

  const toggleForm = () => setIsFormOpen(!isFormOpen);

  if (!userId) return null; // Ensure userId is set before rendering

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">User Page</h1>
      <p className="mb-4">User ID: {userId}</p>
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
