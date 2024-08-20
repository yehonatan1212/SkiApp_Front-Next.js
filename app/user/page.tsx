'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { apiRequest } from '../lib/api';
import AddSkiForm from '../components/addSkiForm';
import SkiCard from '../components/skiCard';

const UserPage = () => {
  const [skis, setSkis] = useState([]);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      console.log("Token", token)  //Delete
      router.push('/');
    } else {
      fetchSkis(token);
    }
  }, []);

  const fetchSkis = async (token: string) => {
    try {
      const response = await apiRequest('/Ski_gear/get_all_skis', 'GET', null, token);
      const skiData = response.data; // Accessing the `data` envelope
      setSkis(skiData);
    } catch (error) {
      console.error('Failed to fetch skis:', error);
      console.log("-------fetchSkis ERROR---------")
      //router.push('/');
    }
  };
  console.log("ski object", skis)   //Delete
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
        <AddSkiForm onClose={() => setIsFormOpen(false)} onSkiAdded={() => fetchSkis(localStorage.getItem('token')!)} />
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {skis.map((ski) => (
          <SkiCard key={ski.id} ski={ski} />
        ))}
      </div>
    </div>
  );
  
};

export default UserPage;
