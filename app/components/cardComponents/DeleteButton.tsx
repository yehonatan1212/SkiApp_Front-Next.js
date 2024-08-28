import React from 'react';

interface DeleteButtonProps {
  onDelete: () => void;
}

const DeleteButton: React.FC<DeleteButtonProps> = ({ onDelete }) => {
  return (
    <button
      onClick={onDelete}
      className="text-red-500 hover:text-red-700 pr-2"
    >
      <div className="flex flex-row items-center space-x-1">
      <svg 
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 text-red-500"  // Change the size of the icon here
        viewBox="0 0 1024 1024"
      >
      <path d="M705.6 814.4V425.6c0-12.8-11.2-24-24-24s-24 11.2-24 24v388.8c0 12.8 11.2 24 24 24 14.4 0 24-9.6 24-24zM536 814.4V425.6c0-12.8-11.2-24-24-24s-24 11.2-24 24v388.8c0 12.8 11.2 24 24 24s24-9.6 24-24zM366.4 814.4V425.6c0-12.8-11.2-24-24-24s-24 11.2-24 24v388.8c0 12.8 11.2 24 24 24s24-9.6 24-24z" fill="" />
      <path d="M876.8 329.6c-12.8 0-24 11.2-24 24v460.8c0 67.2-54.4 121.6-121.6 121.6H292.8c-67.2 0-121.6-54.4-121.6-121.6V353.6c0-12.8-11.2-24-24-24s-24 11.2-24 24v460.8c0 94.4 76.8 169.6 169.6 169.6h436.8c94.4 0 169.6-76.8 169.6-169.6V353.6c1.6-14.4-9.6-24-22.4-24zM972.8 232H755.2v-48c0-67.2-54.4-121.6-121.6-121.6H390.4c-67.2 0-121.6 54.4-121.6 121.6v48H51.2c-12.8 0-24 11.2-24 24s11.2 24 24 24H976c12.8 0 24-11.2 24-24-1.6-12.8-12.8-24-27.2-24z m-654.4-49.6c0-40 32-73.6 73.6-73.6h243.2c40 0 73.6 32 73.6 73.6v48H318.4v-48z" fill="" />
      </svg>

      <span className="text-xl font-normal">Delete</span>
      </div>
    </button>
  );
};

export default DeleteButton;