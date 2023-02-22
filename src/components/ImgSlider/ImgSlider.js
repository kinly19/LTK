import { useEffect, memo} from 'react';
import { AiOutlineCloseCircle } from 'react-icons/ai'
import useCount from '../../hooks/UseCount/useCount';
import IconButton from '../Button/IconButton/IconButton';
import CarouselButtons from '../Carousel/CarouselButtons/CarouselButtons';
import Img from '../Img/Img';
import './ImgSlider.scss';

const ImgSlider = memo((props) => {
  // Custom hook
  const {
    count: currentSlide,
    setCount,
    incrementCount: nextSlideHandler,
    decrementCount: prevSlideHandler,
  } = useCount(props.imageData.length);
  
  const imagesArray = props.imageData;
  const isToggled = props.onToggle;
  
  useEffect(() => {
    setCount(props.currentSlide);
  },[props.currentSlide])

  return (
    <div className={isToggled ? `imgSlider` : "imgSlider hidden"}>
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
});

export default ImgSlider;