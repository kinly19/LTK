import { useState } from 'react';
import { BsPlusLg } from 'react-icons/bs';
import './Accordion.scss';

const Accordion = (props) => {
  const [isToggled, setIsToggled] = useState(false);

  const toggleContentStyle = isToggled
    ? { maxHeight: "100rem", opacity: "1", visibility: "visible" }
    : {};

  const toggleAccordionHandler = () => {
    setIsToggled(!isToggled);    
  }

  return (
    <div className="accordion" style={toggleContentStyle}>
      <div className="accordion__header" onClick={toggleAccordionHandler}>
        <h1>{props.title}</h1>
        <span className={ isToggled ? "accordion__icon accordion__icon--open" : "accordion__icon"}>
          <BsPlusLg />
        </span>
      </div>

      <div className="accordion__content" style={toggleContentStyle}>
        <div className="imageGradient">
          <img src={props.img} alt="" />
        </div>
        <div className="accordion__textContent">
          {props.children}
          {/* button */}
        </div>
      </div>
    </div>
  );
};

export default Accordion;