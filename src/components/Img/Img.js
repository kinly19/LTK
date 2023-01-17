import './Img.scss';

const Img = (props) => {
  return (
    <img className={props.class ? `imgContainer ${props.class}` : 'imgContainer'} src={props.imgSrc} />
  );
};

export default Img;