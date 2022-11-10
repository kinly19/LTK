import { useState } from 'react';
import './DropDown.scss';

const DropDown = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const dropDownHandler = () => {
    setIsOpen(!isOpen);
  };

  return (
    <li
      className={`${props.className}`}
      onMouseEnter={dropDownHandler}
      onMouseLeave={dropDownHandler}
    >
      More
      {isOpen && <ul className="dropDown__items">{props.children}</ul>}
    </li>
  );
};

export default DropDown;