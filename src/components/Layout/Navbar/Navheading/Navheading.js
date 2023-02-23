import NavBrand from '../NavBrand/NavBrand.js';
import { FiMenu } from 'react-icons/fi';
import './NavHeading.scss';

const NavHeading = (props) => {
  return (
    <div className="navHeading">
      <NavBrand />
      <button className="navHeading__toggleBtn" onClick={props.toggleMenuHandler}>
        <FiMenu className="navHeading__toggleIcon" />
      </button>
    </div>
  );
};

export default NavHeading;