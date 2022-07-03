import React from 'react';

const SelectsCard = ({background, text}) => {
  return (
    <div className="relative rounded-md overflow-hidden">
      <img className='w-full h-full object-cover' src={background} alt="/" />
      <div className="bg-gray-900/30 absolute top-0 left-0 w-full h-full">
        <p className="left-4 bottom-4 font-bold text-2xl text-white absolute">
          {text}
        </p>
      </div>
    </div>
  );
};

export default SelectsCard;
