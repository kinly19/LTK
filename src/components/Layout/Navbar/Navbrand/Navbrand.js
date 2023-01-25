import { Link } from 'react-router-dom';
import './Navbrand.scss';

const Navbrand = () => {
  return (
    <Link className="nav__brand" to={"/"}>Ly Taekwondo</Link>
  );
};

export default Navbrand;