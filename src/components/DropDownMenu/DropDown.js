import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './DropDown.scss';

const DropDown = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const currentUrl = useLocation();
  const toggleDropdownHandler = () => setIsOpen(!isOpen);

  const propagationHandler = (e) => {
    // Stop events from bubbling up to onBlur event
    e.stopPropagation();
  };

  useEffect(() => {
    // Close dropdown menu on url change (for desktop devices)
    setIsOpen(false);
  }, [currentUrl]);

  const closeDropdownHandler = (e) => {
    const currentTarget = e.currentTarget;

    requestAnimationFrame(() => {
      // closure on currentTarget
      // Handle blur if element is not directly inside of the parent (li)
      if (!currentTarget.contains(document.activeElement)) {
        setIsOpen(false);
      }
    });
  };

  return (
    <li
      className={`${props.class}`}
      onMouseDown={toggleDropdownHandler}
      onBlur={closeDropdownHandler}
    >
      <button className='dropDown__btn'>{props.title}</button>
      {isOpen && <ul className="dropDown__items" onMouseDown={propagationHandler}>
        {props.children}
      </ul>}
    </li>
  );
};

export default DropDown;