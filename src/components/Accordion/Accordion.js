import { useState } from 'react';
import { BsPlusLg } from 'react-icons/bs';
import Img from '../Img/Img';
import './Accordion.scss';

const Accordion = (props) => {
  const [isToggled, setIsToggled] = useState(false);
  const toggleAccordionHandler = () => setIsToggled(!isToggled);
  
  return (
    <div className={isToggled ? "accordion toggleContent" : "accordion"} >
      <div className="accordion__header" onClick={toggleAccordionHandler}>
        <h1>{props.title}</h1>
        <span className={ isToggled ? "accordion__icon accordion__icon--open" : "accordion__icon"}>
          <BsPlusLg />
        </span>
      </div>

      <div className={isToggled ? "accordion__content toggleContent" : "accordion__content"} >
        {props.img && (
          <div className='imageGradient'>
            <Img class={"imageGradient"} imgSrc={props.img}></Img>
          </div>
        )}
        <div className="accordion__textContent">{props.children}</div>
      </div>
    </div>
  );
};

export default Accordion;