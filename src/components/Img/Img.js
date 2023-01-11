import './Img.scss';

const Img = (props) => {
  return (
    <img className="imgContainer" src={props.imgSrc} />
  );
};

export default Img;