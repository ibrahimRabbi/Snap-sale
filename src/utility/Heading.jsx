import React from 'react';
import './utility.css'
const Heading = ({heading,text}) => {
    return (
      <div className='w-[40%] mx-auto mb-10 text-sm font-sans text-center text font-semibold'>
        <h1 className='text-4xl'>{`--${heading}--`}</h1>
        <p>{text}</p>
        <hr />
      </div>
    );
};

export default Heading;