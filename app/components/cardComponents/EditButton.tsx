import React from 'react';

interface EditButtonProps {
  onEdit: () => void;
}

const EditButton: React.FC<EditButtonProps> = ({ onEdit }) => {
  return (
    <button 
      onClick={onEdit}
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    >
      Edit
    </button>
  );
};

export default EditButton;