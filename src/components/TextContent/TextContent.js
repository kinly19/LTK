import './TextContent.scss';

const TextContent = (props) => {
  const containerStyle = { width: props.width, fontSize: props.fontSize}

  return (
    <div className='textContent' style={containerStyle}>
      {props.children}
    </div>
  );
};

export default TextContent;