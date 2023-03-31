import { useState, useEffect, useCallback } from 'react';
import useCountWithEvents from '../../hooks/useCountWithEvents/useCountWithEvents'; // custom hook
import CarouselButtons from './CarouselButtons/CarouselButtons';
import CarouselItem from './CarouselItem/CarouselItem';
import ImgSlider from '../ImgSlider/ImgSlider';
import Img from '../Img/Img';
import './Carousel.scss';

const Carousel = (props) => {
  const [selectedSlideIndex, setSelectedSlideIndex] = useState(null);
  const [length, setLength] = useState(props.imgData.length);
  const [viewportWidth, setViewPortWidth] = useState(window.innerWidth);
  const [showSlider, setShowSlider] = useState(false);
  const imageArray = props.imgData;

  const {
    count: currentSlideIndex,
    incrementCount: nextSlideHandler,
    decrementCount: prevSlideHandler,
    touchStartHandler,
    touchMoveHandler,
    touchEndHandler,
  } = useCountWithEvents(length);

  // Slides to show per view
  let slideAmount = 3;
  if (viewportWidth <= 768) slideAmount = 2;
  if (viewportWidth <= 600) slideAmount = 1;

  // Carousel items
  const carouselItems = imageArray.map((imgItem, index) => (
    <CarouselItem onClick={() => toggleImageSliderHandler(index)} key={index}>
      <Img imgSrc={imgItem} />
    </CarouselItem>
  ));

  const resizeHandler = () => {
    setViewPortWidth(window.innerWidth);
  };

  // UseCallback to stop child component from re rendering
  const toggleImageSliderHandler = useCallback((index) => {
    // Toggle ImgSlider component
    setShowSlider(!showSlider);
    if (!showSlider) setSelectedSlideIndex(index);
  },[showSlider])

  useEffect(() => {
    setLength(props.imgData.length);
    window.addEventListener("resize", resizeHandler);

    return () => window.removeEventListener("resize", resizeHandler);
  }, [props.imgData.length, viewportWidth]);

  return (
    <div
      className="carousel"
      onTouchStart={touchStartHandler}
      onTouchMove={touchMoveHandler}
      onTouchEnd={(e) => touchEndHandler(e, slideAmount)}
    >
      <div className="carousel__wrapper">
        <div className="carousel__content-wrapper">
          <div
            className={`carousel__content show-${slideAmount}`}
            style={{
              transform: `translateX(-${currentSlideIndex * (100 / slideAmount)}%)`,
            }}
          >
            {carouselItems}
          </div>
        </div>
      </div>
      <CarouselButtons
        onClickLeft={() => prevSlideHandler(slideAmount)}
        onClickRight={() => nextSlideHandler(slideAmount)}
      />
      <ImgSlider
        onToggle={showSlider}
        imageData={imageArray}
        currentSlide={selectedSlideIndex}
        onToggleSlider={toggleImageSliderHandler}
      />
    </div>
  );
};

export default Carousel;