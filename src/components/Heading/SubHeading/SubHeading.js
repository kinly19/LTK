import './SubHeading.scss';

const SubHeading = (props) => {
  const headerStyle = {fontSize: props.fontSize}
  return (
    <h2 className={!props.class ? "subHeader" : `subHeader ${props.class}`} style={headerStyle}>
      {props.children}
    </h2>
  );
};

export default SubHeading;