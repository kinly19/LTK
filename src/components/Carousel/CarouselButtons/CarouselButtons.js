import { BsArrowLeftCircle, BsArrowRightCircle } from 'react-icons/bs';
import './CarouselButtons.scss';

const CarouselButtons = (props) => {
  return (
    <div className="carouselButtons">
      <button className="carouselButtons__left" onClick={props.onClickLeft}>
        <BsArrowLeftCircle />
      </button>
      <button className="carouselButtons__right" onClick={props.onClickRight}>
        <BsArrowRightCircle />
      </button>
    </div>
  );
};

export default CarouselButtons;