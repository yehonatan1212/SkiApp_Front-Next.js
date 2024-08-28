/*import React from 'react'

const ContactLength: React.FC<{ length: number; contactLength: number; }> = ({length, contactLength}) => {
  return (
    <div>
      Total ski length: {length} cm. Contact points (Camber) length is {contactLength} cm, 
      leaving {length - contactLength} cm for tip and tail rocker.
      <p>
        A longer camber provides better grip and stability, while a longer rocker provides better flotation in deep snow.
      </p>
    </div>
  )
};

export default ContactLength;
*/
// components/ContactLength.js
import React from 'react';

const ContactLength: React.FC<{ length: number; contactLength: number; }> = ({length, contactLength}) => {
  return (
    <div className="w-full max-w-md mx-auto">
      <svg viewBox="0 0 400 200" className="w-full h-auto">
        {/* Total length line */}
        <line x1="20" y1="20" x2="380" y2="20" stroke="gray" strokeWidth="2" />
        <line x1="20" y1="15" x2="20" y2="25" stroke="gray" strokeWidth="2" />
        <line x1="380" y1="15" x2="380" y2="25" stroke="gray" strokeWidth="2" />
        <text x="200" y="15" textAnchor="middle" fontSize="12">Total length: {length} cm</text>

        {/* Ski shape */}
        <path d="M20,60 Q100,40 200,60 T380,60" fill="none" stroke="#4B5563" strokeWidth="2" />
        <path d="M20,60 Q100,80 200,60 T380,60" fill="none" stroke="#4B5563" strokeWidth="2" />

        {/* Contact length line */}
        <line x1="60" y1="100" x2="340" y2="100" stroke="gray" strokeWidth="2" />
        <line x1="60" y1="95" x2="60" y2="105" stroke="gray" strokeWidth="2" />
        <line x1="340" y1="95" x2="340" y2="105" stroke="gray" strokeWidth="2" />
        <text x="200" y="115" textAnchor="middle" fontSize="12">Effective Length: {contactLength} cm</text>

        {/* Ski color representation */}
        <rect x="20" y="140" width="60" height="20" fill="#60A5FA" rx="10" ry="10" />
        <rect x="80" y="140" width="240" height="20" fill="#6B7280" />
        <rect x="320" y="140" width="60" height="20" fill="#60A5FA" rx="10" ry="10" />

        {/* Labels */}
        <text x="50" y="180" textAnchor="middle" fontSize="12">ROCKER</text>
        <text x="200" y="180" textAnchor="middle" fontSize="12">CAMBER</text>
        <text x="350" y="180" textAnchor="middle" fontSize="12">ROCKER</text>
      </svg>
    </div>
  );
};

export default ContactLength;