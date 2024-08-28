import React from 'react'
import Icon from '../../appImages/i_icon.svg'

const Floatation: React.FC<{ floatation: number }> = ({floatation}) => {
  return (
    <div className="">
      <div className="flex justify-between items-center mb-2">
        <span className="pb-1 text-xl font-semibold">Floatation</span>
      </div>
      <div className="mb-2 text-base font-medium-">Ski Area: {floatation} cm²</div>
      <div className="flex items-center space-x-1">
        <Icon className='w-5 h-5' /> {/* Adjust icon size as needed */}
        <span className="text-base font-normal">This value is calculated by the area of your ski.</span>
      </div>
    </div>
  );
}

export default Floatation;
