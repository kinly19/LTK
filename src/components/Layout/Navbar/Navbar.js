import { useEffect, useState } from 'react';
import Navheading from './Navheading/Navheading.js';
import NavItems from './NavItems/NavItems.js';
import NavItem from './NavItem/NavItem.js';
import DropDown from '../../DropDownMenu/DropDown.js';
import './Navbar.scss';

const Navbar = () => {
  const [isToggled, setIsToggled] = useState(false);
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

  return (
    <header className="navbar">
      <Navheading toggleMenuHandler={toggleMenuHandler} />
      <nav className="navbar__content" style={toggleClass}>
        <NavItems>
          <NavItem 
            link={"/"} 
            handler={toggleMenuHandler} 
            title={"Home"} 
          />
          <NavItem 
            link={"/about"} 
            handler={toggleMenuHandler} 
            title={"About"} 
          />
          <DropDown class="nav__item" title={"Classes"}>
            <NavItem
              link={"/adults"}
              handler={toggleMenuHandler}
              title={"TKD Adults"}
            />
            <NavItem 
              link={"/kids"} 
              handler={toggleMenuHandler} 
              title={"TKD Kids"} 
            />
            <NavItem 
              link={"/private"} 
              handler={toggleMenuHandler} 
              title={"TKD Private"} 
            />
          </DropDown>
          <DropDown class="nav__item" title={"More"}>
            <NavItem
              link={"/taekwondo"}
              handler={toggleMenuHandler}
              title={"Taekwondo"}
            />
            <NavItem 
              link={"/ranks"} 
              handler={toggleMenuHandler} 
              title={"Ranks"} 
            />
          </DropDown>
        </NavItems>
      </nav>
    </header>
  );
};

export default Navbar;