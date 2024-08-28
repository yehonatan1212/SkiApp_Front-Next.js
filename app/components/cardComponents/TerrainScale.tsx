import React from 'react';

const TerrainScale: React.FC<{ terrain: number }> = ({ terrain }) => {
  const percentage = ((terrain - 1) / 9) * 100;

  return (
    <div className="w-full max-w-md p-4">
      <div className="flex justify-between items-center mb-2">
        <span className="pb-1 text-xl font-semibold">Ski Suitable Terrain</span>
      </div>
      <div className="mx-5 relative h-8">
        <div 
          className="absolute transform -translate-x-1/2 text-base font-semibold"
          style={{left: `${percentage}%`, transform: 'translateX(-50%)'}}
        >
          <span>{percentage.toFixed(0)}</span>
          <span className="absolute left-full">%</span>
        </div>
      </div>
      <div className="mx-5 relative h-3 bg-gray-200 rounded-full">
      <div 
          className="absolute h-full bg-blue-500 rounded-full"
          style={{
            width: `${4}%`,
            left: `${percentage}%`,
            transform: 'translateX(-50%)'
          }}
        ></div>
      </div>
      <div className="flex justify-between mt-2">
        <span className="text-sm font-medium">Off-Piste</span>
        <span className="text-sm font-medium">On-Piste</span>
      </div>
    </div>
  );
};

export default TerrainScale;