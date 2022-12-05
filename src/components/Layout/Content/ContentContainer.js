import './ContentContainer.scss';

const ContentContainer = (props) => {
  return <div className="contentContainer">{props.children}</div>;
};

export default ContentContainer;