import React, { useState } from 'react'


interface SkiSpecsProps {
  ski: any;
}

const SkiSpecs: React.FC<SkiSpecsProps> = ({ ski }) => {
  const [isSpecsOpen, setIsSpecsOpen] = useState(false);

  return (
    <div className='text-base font-medium'>
      <button onClick={() => setIsSpecsOpen(!isSpecsOpen)}>
        {isSpecsOpen ? '▼' : '▶'} Specs
      </button>
      {isSpecsOpen && (
        <div className="text-base font-normal">
          <p>Length: {ski.length} cm</p>
          <p>Turn Radius: {ski.radius} m</p>
          <p>Weight: {ski.weight} kg per ski</p>
          <p>Sidecut: {ski.tip} / {ski.waist} / {ski.tail}  ( tip / waist / tail )</p>
        </div>
      )}
    </div>
  );
};

export default SkiSpecs;
