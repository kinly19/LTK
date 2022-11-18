import './TextContent.scss';

const TextContent = (props) => {
  return (
    <div className='textContent'>
      {props.children}
    </div>
  );
};

export default TextContent;