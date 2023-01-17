import { useState } from 'react';
import { AiOutlineCloseCircle } from 'react-icons/ai'
import IconButton from '../Button/IconButton/IconButton';
import CarouselButtons from '../Carousel/CarouselButtons/CarouselButtons';
import Img from '../Img/Img';
import './ImgSlider.scss';

const ImgSlider = (props) => {
  const [currentSlide, setCurrentSlide] = useState(props.currentSlide);
  const imagesArray = props.imageData;

  const nextSlideHandler = () => {
    if (currentSlide < imagesArray.length - 1) setCurrentSlide((prevState) => prevState + 1);
  }

  const prevSlideHandler = () => {
    if (currentSlide > 0) setCurrentSlide((prevState) => prevState - 1);
  }

  return (
    <div className="imgSlider">
      <div className="imgSlider__toggle">
        <IconButton onClick={props.onToggleSlider}>
          <AiOutlineCloseCircle />
        </IconButton>
      </div>
      <div className="imgSlider__wrapper">
        <div className="imgSlider__content">
          <Img class={"img-contain"} imgSrc={imagesArray[currentSlide]} />
        </div>
        <CarouselButtons onClickLeft={prevSlideHandler} onClickRight={nextSlideHandler} />
      </div>
    </div>
  );
};

export default ImgSlider;