import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import IconButton from '../../Button/IconButton/IconButton';
import './CarouselButtons.scss';

const CarouselButtons = (props) => {
  return (
    <div className="carouselButtons">
      <IconButton class={"carouselButtons__left"} onClick={props.onClickLeft}><FiChevronLeft /></IconButton>
      <IconButton class={"carouselButtons__right"} onClick={props.onClickRight}><FiChevronRight /></IconButton>
    </div>
  );
};

export default CarouselButtons;