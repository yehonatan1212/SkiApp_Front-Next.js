import React from 'react'

interface HeightDifferenceProps {
  heightDifference: number;
}
function HeightDifference({heightDifference}: HeightDifferenceProps) {
  if (heightDifference > 0) {
    return `Your ski is ${heightDifference} cm shorter than you. A shorter ski is easier to maneuver and initiate turns but less stable at high speeds.`;
  }
  return `Your ski is ${Math.abs(heightDifference)} cm longer than you. A longer ski is more stable at high speeds but harder to initiate turns and requires more skill.`;
};

export default HeightDifference
