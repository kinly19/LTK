import { Link } from 'react-router-dom';
import './NavBrand.scss';

const NavBrand = () => {
  return (
    <Link className="navBrand" to={"/"}>Ly Taekwondasasao</Link>
  );
};

export default NavBrand;