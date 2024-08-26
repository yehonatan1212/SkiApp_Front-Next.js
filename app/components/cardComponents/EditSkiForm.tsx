import React, { useState } from 'react';

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

interface EditSkiFormProps {
  ski: NewSkiProps;
  onSave: (updatedSki: NewSkiProps) => void;
  onClose: () => void;
}

const EditSkiForm: React.FC<EditSkiFormProps> = ({ ski, onSave, onClose }) => {
  const [formData, setFormData] = useState<NewSkiProps>(ski);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: name === 'name' ? value : Number(value) }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
    onClose();
  };

  const editableFields: (keyof NewSkiProps)[] = ['name', 'length', 'radius', 'weight', 'tip', 'waist', 'tail'];

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full">
      <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
        <h3 className="text-lg font-medium leading-6 text-gray-900">Edit Ski</h3>
        <form onSubmit={handleSubmit}>
          {editableFields.map((field) => (
            <div key={field} className="mt-2">
              <label className="form-control w-full max-w-xs">{field}</label>
              <input
                type={field === 'name' ? 'text' : 'number'}
                name={field}
                value={formData[field]}
                onChange={handleChange}
                className="input input-bordered w-full max-w-xs"
              />
            </div>
          ))}
          <div className="mt-4">
            <button type="submit" className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-500 hover:bg-blue-700">
              Save
            </button>
            <button type="button" onClick={onClose} className="ml-2 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-gray-700 bg-gray-200 hover:bg-gray-300">
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditSkiForm;
