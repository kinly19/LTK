import { NavLink } from 'react-router-dom';
import './NavItem.scss';

const NavItem = (props) => {
  const activeClass = (navData) =>
    navData.isActive ? "nav__item--active" : null;
    
  return (
    <li className="nav__item">
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