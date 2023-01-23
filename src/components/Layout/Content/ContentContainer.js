import './ContentContainer.scss';

const ContentContainer = (props) => {
  const containerStyle = {width: props.containerWidth};
  return (
    <div
      className={!props.class ? "contentContainer" : `contentContainer ${props.class}`}
      style={containerStyle}
    >
      {props.children}
    </div>
  );
};

export default ContentContainer;