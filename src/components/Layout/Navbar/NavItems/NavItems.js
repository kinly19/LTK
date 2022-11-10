import './NavItems.scss';

const NavItems = (props) => {
  return (
    <ul className="nav__items">
      {props.children}
    </ul>
  );
};

export default NavItems;