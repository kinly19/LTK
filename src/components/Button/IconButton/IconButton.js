import './IconButton.scss';

const IconButton = (props) => {
  return (
    <button
      className={props.class ? `iconBtn ${props.class}` : "iconBtn"}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default IconButton;