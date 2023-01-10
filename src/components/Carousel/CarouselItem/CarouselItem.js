import './CarouselItem.scss';

const CarouselItem = (props) => {
  return (
    <div className='carouselItem'>
      <div className='carouselItem__content'>
        {props.children}
      </div>
    </div>
  );
};

export default CarouselItem;