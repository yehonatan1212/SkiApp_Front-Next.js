'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { apiRequest } from '../lib/api';
import AddSkiForm from '../components/addSkiForm';
import SkiCard from '../components/skiCard';

interface NewSkiProps {
  id: number;
  name: string;
  length: number;
  radius: number;
  weight: number;
  tip: number;
  waist: number;
  tail: number;
}

const UserPage = () => {
  const [skis, setSkis] = useState([]);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      router.push('/');
    } else {
      fetchSkis(token);
    }
  }, []);

  const fetchSkis = async (token: string) => {
    try {
      const skiData = await apiRequest('/Ski_gear/get_all_skis', 'GET', null, token);
      setSkis(skiData.data); // Ensure the `data` envelope is correctly accessed
    } catch (error) {
      console.error('Failed to fetch skis:', error);
      router.push('/');
    }
  };

  const handleDeleteSki = async (skiId: number) => {
    const token = localStorage.getItem('token');
    try {
      await apiRequest(`/Ski_gear/edit/${skiId}`, 'DELETE', null, token);
    } catch (error) {
      console.error('Failed to delete ski:', error);
    }
  };

  const handleUpdateSki = async (updatedSki: NewSkiProps) => {
    const token = localStorage.getItem('token');
    try {
      await apiRequest(`/Ski_gear/edit/${updatedSki.id}`, 'PUT', updatedSki, token);
    } catch (error) {
      console.error('Failed to edit ski:', error);
    }
  };

  const handleSkiAdded = async () => {
    const token = localStorage.getItem('token');
    if (token) {
      await fetchSkis(token); // Re-fetch the skis after a new one is added
    }
  };

  const handleAddSki = () => {
    setIsFormOpen(!isFormOpen);
  };

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-6">Your Skis</h1>
      <button
        onClick={handleAddSki}
        className="bg-blue-500 text-white px-4 py-2 rounded mb-4"
      >
        {isFormOpen ? 'Close Form' : 'Add Ski'}
      </button>

      {isFormOpen && (
        <AddSkiForm onClose={() => setIsFormOpen(false)} onSkiAdded={handleSkiAdded} />
      )}

      <div>
        {skis.map((ski) => (
          <SkiCard 
            ski={ski} 
            onDelete={handleDeleteSki} 
            onUpdate={handleUpdateSki}
          />
        ))}
      </div>
    </div>
  );
};

export default UserPage;
