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
  const showMenuHandler = () => setIsToggled(!isToggled);
  const hideMenuHandler = () => setIsToggled(false);

  useEffect(() => {
    // Add events only if toggle menu is open
    if (isToggled) {
      window.addEventListener('scroll', hideMenuHandler);
      window.addEventListener('resize', hideMenuHandler);
      // Clean up
      return () => {
        window.removeEventListener('scroll', hideMenuHandler);
        window.removeEventListener('resize', hideMenuHandler);
      };
    }
  }, [isToggled]);

  return (
    <header className="navbar">
      <NavBrand toggleMenuHandler={showMenuHandler} />
      <nav className="navbar__content pdr-lg" style={toggleClass}>
        <NavItems>
          <NavItem 
            link={"/"} 
            handler={hideMenuHandler} 
            title={"Home"} 
          />
          <NavItem 
            link={"/about"} 
            handler={hideMenuHandler} 
            title={"About"} 
          />
          <NavItem
            link={"/classes"}
            handler={hideMenuHandler}
            title={"Classes"}
          />
          <DropDown className="nav__item">
            <NavItem
              link={"/taekwondo"}
              handler={hideMenuHandler}
              title={"Taekwondo"}
            />
            <NavItem 
              link={"/ranks"} 
              handler={hideMenuHandler} 
              title={"Ranks"} 
            />
          </DropDown>
        </NavItems>
      </nav>
    </header>
  );
};

export default Navbar;