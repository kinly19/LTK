import { NavLink } from 'react-router-dom';
import './NavItem.scss';

const NavItem = (props) => {
  const activeClass = (navData) =>
    navData.isActive ? "navItem__link navItem__link--active" : "navItem__link";
    
  return (
    <li className="navItem">
      <NavLink 
        className={activeClass} 
        to={props.link} 
        onClick={props.handler}
      >
        {props.title}
      </NavLink>
    </li>
  );
};

export default NavItem;