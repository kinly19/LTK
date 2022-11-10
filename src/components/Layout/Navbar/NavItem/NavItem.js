import { NavLink } from 'react-router-dom';
import './NavItem.scss';

const NavItem = (props) => {
  const activeClasss = (navData) =>
    navData.isActive ? "nav__item nav__item--active" : "nav__item";
    
  return (
    <li className="nav__item">
      <NavLink 
        className={activeClasss} 
        to={props.link} 
        onClick={props.handler}
      >
        {props.title}
      </NavLink>
    </li>
  );
};

export default NavItem;