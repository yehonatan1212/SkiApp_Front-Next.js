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

import React from 'react';
import Image from '../../appImages/trace2.svg'

const ContactLength: React.FC<{ length: number; contactLength: number; }> = ({length, contactLength}) => {
  return (
    <div className="w-full max-w-2xl mx-auto">
      <h2 className="pb-1 text-xl font-semibold">Camber Length</h2>
      <div className='wx-2'>
        <Image/>
      </div>
      
    </div>
  );
};

export default ContactLength;