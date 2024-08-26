import React from 'react'

const Floatation: React.FC<{ floatation: number }> = ({floatation}) => {
  return (
    <div>
      Floatation: {floatation}
      <p>This value is calculated by the area of your ski.</p>
    </div>
  )
}

export default Floatation;
