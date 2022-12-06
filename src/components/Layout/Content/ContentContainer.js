import './ContentContainer.scss';

const ContentContainer = (props) => {
  return (
    <div className={!props.class ? "contentContainer" : `contentContainer ${props.class}`}>
      {props.children}
    </div>
  );
};

export default ContentContainer;