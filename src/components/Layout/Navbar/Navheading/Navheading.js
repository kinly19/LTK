import { Link } from 'react-router-dom';
import { FiMenu } from 'react-icons/fi';
import './Navheading.scss';

const NavBrand = (props) => {
  return (
    <div className="nav__header">
      <Link className="nav__brand" to={"/"}>Ly Taekwondo</Link>
      <button className="nav__toggleBtn" onClick={props.toggleMenuHandler}>
        <FiMenu className="nav__toggleIcon" />
      </button>
    </div>
  );
};

export default NavBrand;