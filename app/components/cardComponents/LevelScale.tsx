import React from 'react'

const SkiLevelScale: React.FC<{ minLevel: number; maxLevel: number }> = ({ minLevel, maxLevel }) => {
  const totalLevels = 10;
  const averageLevel = (minLevel + maxLevel)/2
  const filledWidth = ((maxLevel - minLevel) / totalLevels) * 100;
  const startPosition = (minLevel / totalLevels) * 100;
  const avgPosition = startPosition + (filledWidth / 2);

  return (
    <div className="w-full max-w-md  p-4">
      <div className="flex justify-between items-center mb-2">
        <span className="pb-1 text-xl font-semibold">Ski Level</span>
      </div>
      <div className="mx-5 relative h-8">
        <div 
          className="absolute transform -translate-x-1/2 text-base font-semibold"
          style={{left: `${avgPosition}%`, top: '0'}}
        >
          {averageLevel.toFixed(1)} /{totalLevels}
        </div>
      </div>
      <div className="mx-5 relative h-3 bg-gray-200 rounded-full">
        <div 
          className="absolute h-full bg-blue-500 rounded-full"
          style={{
            width: `${filledWidth}%`,
            left: `${startPosition}%`
          }}
        ></div>
      </div>
      <div className="flex justify-between mt-2">
        <span className="text-sm font-medium">Beginner</span>
        <span className="text-sm font-medium">Expert</span>
      </div>
    </div>
  );
};

export default SkiLevelScale;