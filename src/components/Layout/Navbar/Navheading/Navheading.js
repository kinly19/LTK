import Navbrand from '../Navbrand/Navbrand.js';
import { FiMenu } from 'react-icons/fi';
import './Navheading.scss';

const Navheading = (props) => {
  return (
    <div className="nav__header">
      <Navbrand />
      <button className="nav__toggleBtn" onClick={props.toggleMenuHandler}>
        <FiMenu className="nav__toggleIcon" />
      </button>
    </div>
  );
};

export default Navheading;