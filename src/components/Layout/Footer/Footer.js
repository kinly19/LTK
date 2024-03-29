import Socials from '../../Socials/Socials.js';
import NavBrand from '../Navbar/NavBrand/NavBrand.js';
import './Footer.scss';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer__content'>
        <NavBrand />
        <div className='footer__icons'>
          <p>Connect with us</p>
          <Socials />
        </div>
        <p className='footer__comment'>Made with ♥ K.LY</p>
        <p className='footer__copyright'>© LY TAEKWONDO 2022 ALL RIGHTS RESERVED</p>
      </div>
    </footer>
  );
};

export default Footer;