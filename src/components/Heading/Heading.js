import './Heading.scss';

const Heading = (props) => {
  const headerStyle = {
    fontSize: props.fontSize,
    marginBottom: props.marginBottom,
  };
  
  return (
    <h1 className="heading" style={headerStyle}>
      {props.children}
    </h1>
  );
};

export default Heading;