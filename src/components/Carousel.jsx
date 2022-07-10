import React from 'react';
import { BsArrowLeftSquareFill, BsArrowRightSquareFill } from 'react-icons/bs';

const sliderData = [
  {
    id: 1,
    url: 'https://images.unsplash.com/photo-1515238152791-8216bfdf89a7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2072&q=80'
  },
  {
    id: 2,
    url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2073&q=80'
  },
  {
    id: 3,
    url: 'https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80'
  }
];

const Carousel = () => {
  const [slide, setSlide] = React.useState(0);
  const length = sliderData.length;

  const nextSlide = () => {
    setSlide(slide === length - 1 ? 0 : slide + 1);
  };

  const prevSlide = () => {
    setSlide(slide === 0 ? length - 1 : slide - 1);
  };


  if (!Array.isArray(sliderData) || length < 0) return null;

  return (
    <section id="book" className="max-w-[1240px] mx-auto px-4 py-16 relative flex flex-center items-center ">
      <BsArrowLeftSquareFill
        onClick={prevSlide}
        className="absolute top-[50%] text-3xl text-white cursor-pointer left-8 z-10"
      />

      <BsArrowRightSquareFill
        onClick={nextSlide}
        className="absolute top-[50%] text-3xl text-white cursor-pointer right-8 z-10"
      />

      {sliderData.map((photo, index) => {
        return (
          <div
            key={photo.url}
            className={index === slide ? 'slide active' : 'slide'}
          >
            {index === slide && (
              <img className="w-full rounded-md" src={photo.url} />
            )}
          </div>
        );
      })}
    </section>
  );
};

export default Carousel;
