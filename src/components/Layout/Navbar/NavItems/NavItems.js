import './NavItems.scss';

const NavItems = (props) => {
  return (
    <ul className="navItems">
      {props.children}
    </ul>
  );
};

export default NavItems;