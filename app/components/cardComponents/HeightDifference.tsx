import React from 'react'
import Icon from '../../appImages/i_icon.svg'

const HeightDifference: React.FC<{ height_difference: number; }> = ({ height_difference }) => {
  let diff: string;
  let message: string;

  if (height_difference > 0) {
    diff = `Your ski is ${height_difference} cm shorter than you.`;
    message = `A shorter ski is easier to maneuver and initiate turns but less stable at high speeds.`;
  } else {
    diff = `Your ski is ${Math.abs(height_difference)} cm longer than you.`;
    message = `A longer ski is more stable at high speeds but harder to initiate turns and requires more skill.`;
  }

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="flex justify-between items-center mb-2">
        <span className="pb-1 text-xl font-semibold">Height Difference</span>
      </div>
      <span className="text-base font-normal">{diff}</span>
      <div className="flex items-start space-x-1"> {/* Adjusted alignment */}
        <Icon className='w-6 h-6' /> {/* Adjust icon size as needed */}
        <span className="text-base font-normal">{message}</span>
      </div>
    </div>
  );
};


export default HeightDifference