import React, { useState } from 'react'

interface SkiProps {
  length: number;
  radius: number;
  tip: number;
  waist: number;
  tail: number;
  stiffness: string;
  camber_rocker: string;
}

interface SkiSpecsProps {
  ski: any;
}

const SkiSpecs: React.FC<SkiSpecsProps> = ({ ski }) => {
  const [isSpecsOpen, setIsSpecsOpen] = useState(false);

  return (
    <>
      <button onClick={() => setIsSpecsOpen(!isSpecsOpen)}>
        {isSpecsOpen ? '▼' : '▶'} Specs
      </button>
      {isSpecsOpen && (
        <div className="specs">
          <p>Length: {ski.length} cm</p>
          <p>Radius: {ski.radius} m</p>
          <p>Sidecut: {ski.tip} / {ski.waist} / {ski.tail}</p>
          <p>Stiffness: {ski.stiffness}</p>
          <p>Camber: {ski.camber_rocker}</p>
        </div>
      )}
    </>
  );
};

export default SkiSpecs;
