import React from 'react';
import ServicesData from '../data/servicesData';
import DestinationsCards from './DestinationsCards';
import BoraBora from '../assets/borabora.jpg';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Destinations = () => {
  React.useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <section
      data-aos="fade-up"
      id="destinations"
      className="max-w-[1240px] mx-auto py-16 px-4 text-center"
    >
      <h1>All-Inclusive Resorts</h1>
      <p>On the Caribbean's Best Beaches</p>
      <div className="grid grid-rows-none md:grid-cols-5 py-4 gap-2 md:gap-4">
        <img
          className="rounded-md w-full h-full object-cover col-span-2 md:col-span-3 row-span-2"
          src={BoraBora}
          alt="/"
        />
        {ServicesData.map(photo => (
          <DestinationsCards
            key={photo.title}
            imgUrl={photo.imgUrl}
            title={photo.title}
          />
        ))}
      </div>
    </section>
  );
};

export default Destinations;
