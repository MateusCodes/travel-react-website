import React from 'react';

const DestinationsCards = ({ title, imgUrl }) => {
  return (
    <img
      src={imgUrl}
      alt={title}
      className="rounded-md w-full h-full object-cover"
    />
  );
};

export default DestinationsCards;
