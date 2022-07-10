import React from 'react';
import BoraBora from '../assets/borabora.jpg';
import BoraBora2 from '../assets/borabora2.jpg';
import Maldives from '../assets/maldives.jpg';
import Maldives2 from '../assets/maldives2.jpg';
import KeyWest from '../assets/keywest.jpg';
import SelectsCard from './SelectsCard';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Selects = () => {
  React.useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <section
      data-aos="fade-up"
      id="view"
      className="max-w-[1240px] mx-auto px-4 py-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
    >
      <SelectsCard background={BoraBora} text={'BoraBora'} />
      <SelectsCard background={BoraBora2} text={'BoraBora2'} />
      <SelectsCard background={Maldives} text={'Maldives'} />
      <SelectsCard background={Maldives2} text={'Maldives2'} />
      <SelectsCard background={KeyWest} text={'KeyWest'} />
      <SelectsCard background={KeyWest} text={'KeyWest2'} />
    </section>
  );
};

export default Selects;
