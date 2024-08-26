import React from 'react'

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
