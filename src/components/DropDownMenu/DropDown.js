import { useState } from 'react';
import './DropDown.scss';

const DropDown = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdownHandler = () => {
    setIsOpen(!isOpen);
  };

  const closeDropdownHandler = (e) => {
    const currentTarget = e.currentTarget;
    
    requestAnimationFrame(() => {
      // closure on currentTarget
      // Handle blur if element is not directly inside of the parent (li)
      if (!currentTarget.contains(document.activeElement)) {
        // Allows child element click event to run before handler removes element from dom
        setTimeout(() => {
          setIsOpen(false);
        }, 150);
      }
    });
  };

  return (
    <li
      className={`${props.class}`}
      onClick={toggleDropdownHandler}
      onBlur={closeDropdownHandler}
    >
      <a href="javascript:void(0)">{props.title}</a>
      {isOpen && <ul className="dropDown__items">{props.children}</ul>}
    </li>
  );
};

export default DropDown;