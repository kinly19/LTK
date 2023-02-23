import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import NavHeading from './NavHeading/NavHeading.js';
import NavItems from './NavItems/NavItems.js';
import NavItem from './NavItem/NavItem.js';
import DropDown from '../../DropDownMenu/DropDown.js';
import './Navbar.scss';

const Navbar = () => {
  const [isToggled, setIsToggled] = useState(false);
  const currentUrl = useLocation();

  // Toggled styles
  const toggleClass = isToggled
    ? { maxHeight: "500px", opacity: "1", overflow: "visible" }
    : {};

  // Handlers
  const toggleMenuHandler = () => setIsToggled(!isToggled);

  useEffect(() => {
    // Add events only if toggle menu is open
    const events = ['scroll', 'resize'];
 
    if (isToggled) {
      events.forEach(ev => window.addEventListener(ev, toggleMenuHandler));
      // Clean up
      return () => {
        events.forEach(ev => window.removeEventListener(ev, toggleMenuHandler));
      };
    }
  }, [isToggled]);

  useEffect(() => {
    // Close Nav menu on url change (Mobile devices)
    if (isToggled) {
      toggleMenuHandler();
    }
  }, [currentUrl]);

  return (
    <header className="navbar">
      <NavHeading toggleMenuHandler={toggleMenuHandler} />
      <nav className="navbar__content" style={toggleClass}>
        <NavItems>
          <NavItem link={"/"} title={"Home"} />
          <NavItem link={"/about"} title={"About"} />
          <DropDown class="navItem" title={"Classes"}>
            <NavItem link={"/adults"} title={"TKD Adults"} />
            <NavItem link={"/kids"} title={"TKD Kids"} />
            <NavItem link={"/private"} title={"TKD Private"} />
          </DropDown>
          <DropDown class="navItem" title={"More"}>
            <NavItem link={"/taekwondo"} title={"Taekwondo"} />
            <NavItem link={"/ranks"} title={"Ranks"} />
          </DropDown>
        </NavItems>
      </nav>
    </header>
  );
};

export default Navbar;