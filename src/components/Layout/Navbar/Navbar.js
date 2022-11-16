import { useEffect, useState } from 'react';
import NavBrand from './NavBrand/Navbrand.js';
import NavItems from './NavItems/NavItems.js';
import NavItem from './NavItem/NavItem.js';
import DropDown from '../../DropDownMenu/DropDown.js';
import './Navbar.scss';

const Navbar = () => {
  const [isToggled, setIsToggled] = useState(false);
  // Toggled styles
  const toggleClass = isToggled
    ? { maxHeight: "200px", opacity: "1", overflow: "visible" }
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
      <NavBrand toggleMenuHandler={toggleMenuHandler} />
      <nav className="navbar__content pdr-lg" style={toggleClass}>
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
          <NavItem
            link={"/classes"}
            handler={toggleMenuHandler}
            title={"Classes"}
          />
          <DropDown className="nav__item">
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