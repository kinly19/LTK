import { useState, useEffect } from 'react';
import CarouselButtons from './CarouselButtons/CarouselButtons';
import './Carousel.scss';

const Carousel = (props) => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [length, setLength] = useState(props.children.length);
  const [viewportWidth, setViewPortWidth] = useState(window.innerWidth);

  // Slides to show per view
  let slideAmount = 3;
  if (viewportWidth <= 768) slideAmount = 2;
  if (viewportWidth <= 400) slideAmount = 1;
  
  const prevSlideHandler = () => {
    if (currentSlideIndex > 0)
      setCurrentSlideIndex((prevState) => prevState - 1);
  };

  const nextSlideHandler = () => {
    if (currentSlideIndex < length - slideAmount)
      setCurrentSlideIndex((prevState) => prevState + 1);
  };

  const resizeHandler = () => {
    setViewPortWidth(window.innerWidth);
  };

  useEffect(() => {
    setLength(props.children.length);
    window.addEventListener("resize", resizeHandler);
  }, [props.children, viewportWidth]);

  return (
    <div className="carousel">
      <div className="carousel__wrapper">
        <div className="carousel__content-wrapper">
          <div
            className={`carousel__content show-${slideAmount}`}
            style={{
              transform: `translateX(-${currentSlideIndex * (100 / slideAmount)}%)`
            }}
          >
            {props.children}
          </div>
        </div>
      </div>
      <CarouselButtons
        onClickLeft={prevSlideHandler}
        onClickRight={nextSlideHandler}
      />
    </div>
  );
};

export default Carousel;