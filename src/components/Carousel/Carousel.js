import { useState, useEffect } from 'react';
import CarouselButtons from './CarouselButtons/CarouselButtons';
import CarouselItem from './CarouselItem/CarouselItem';
import ImgSlider from '../ImgSlider/ImgSlider';
import Img from '../Img/Img';
import './Carousel.scss';

const Carousel = (props) => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [selectedSlideIndex, setSelectedSlideIndex] = useState(null);
  const [length, setLength] = useState(props.imgData.length);
  const [viewportWidth, setViewPortWidth] = useState(window.innerWidth);
  const [showSlider, setShowSlider] = useState(false);
  const imageArray = props.imgData;

  // Slides to show per view
  let slideAmount = 3;
  if (viewportWidth <= 768) slideAmount = 2;
  if (viewportWidth <= 400) slideAmount = 1;

  // Carousel items
  const carouselItems = imageArray.map((imgItem, index) => (
    <CarouselItem onClick={() => toggleImageSliderHandler(index)} key={index}>
      <Img imgSrc={imgItem} />
    </CarouselItem>
  ));
  
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

  const toggleImageSliderHandler = (index) => {
    setShowSlider(!showSlider);
    setSelectedSlideIndex(index);
  }

  useEffect(() => {
    setLength(props.imgData.length);
    window.addEventListener("resize", resizeHandler);
  }, [props.imgData.length, viewportWidth]);

  return (
    <div className="carousel">
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
      <CarouselButtons onClickLeft={prevSlideHandler} onClickRight={nextSlideHandler} />
      
      {showSlider && (
        <ImgSlider
          imageData={imageArray}
          currentSlide={selectedSlideIndex}
          onToggleSlider={toggleImageSliderHandler}
        />
      )}
    </div>
  );
};

export default Carousel;