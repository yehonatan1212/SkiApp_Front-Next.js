'use client';

import { useState } from 'react';
import { apiRequest } from '../lib/api';

interface SkiFormProps {
  onClose: () => void;
}

const SkiForm = ({ onClose }: SkiFormProps) => {
  const [name, setName] = useState('');
  const [length, setLength] = useState<number | ''>('');
  const [radius, setRadius] = useState<number | ''>('');
  const [weight, setWeight] = useState<number | ''>('');
  const [camberRocker, setCamberRocker] = useState<number | ''>('');
  const [tip, setTip] = useState<number | ''>('');
  const [waist, setWaist] = useState<number | ''>('');
  const [tail, setTail] = useState<number | ''>('');
  const [stiffness, setStiffness] = useState<number | ''>('');
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    const token = localStorage.getItem('token');

    try {
      const data = await apiRequest('/Ski_gear/new_ski', 'POST', {
        name,
        length,
        radius,
        weight,
        camber_rocker: camberRocker,
        tip,
        waist,
        tail,
        stiffness,
      }, token);

      console.log('Ski added:', data);
      onClose();
    } catch (err) {
      setError((err as Error).message);
    }
  };

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-gray-500 bg-opacity-75">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6">Add New Ski</h2>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2">Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2">Length</label>
            <input
              type="number"
              value={length}
              onChange={(e) => setLength(Number(e.target.value))}
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2">Radius</label>
            <input
              type="number"
              value={radius}
              onChange={(e) => setRadius(Number(e.target.value))}
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2">Weight</label>
            <input
              type="number"
              value={weight}
              onChange={(e) => setWeight(Number(e.target.value))}
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2">Camber/Rocker</label>
            <input
              type="number"
              value={camberRocker}
              onChange={(e) => setCamberRocker(Number(e.target.value))}
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2">Tip Width</label>
            <input
              type="number"
              value={tip}
              onChange={(e) => setTip(Number(e.target.value))}
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2">Waist Width</label>
            <input
              type="number"
              value={waist}
              onChange={(e) => setWaist(Number(e.target.value))}
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2">Tail Width</label>
            <input
              type="number"
              value={tail}
              onChange={(e) => setTail(Number(e.target.value))}
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2">Stiffness</label>
            <input
              type="number"
              value={stiffness}
              onChange={(e) => setStiffness(Number(e.target.value))}
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
          <div className="col-span-2 flex justify-center mt-4">
            <button
              type="submit"
              tabIndex={0} // Ensures tab navigation
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Add Ski
            </button>
          </div>
        </form>
        <button
          type="button"
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
        >
          &times;
        </button>
      </div>
    </div>
  );
};

export default SkiForm;
