import React from 'react'

interface SkiSpecsProps {
  ski: any;
}

const SkiSpecs: React.FC<SkiSpecsProps> = ({ ski }) => (
  <div className="specs">
    <p>Length: {ski.length} cm</p>
    <p>Radius: {ski.radius} m</p>
    <p>Sidecut: {ski.tip} / {ski.waist} / {ski.tail}</p>
    <p>Stiffness: {ski.stiffness}</p>
    <p>Camber: {ski.camber_rocker}</p>
  </div>
);

export default SkiSpecs;
