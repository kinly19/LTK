import IconButton from '../Button/IconButton/IconButton';
import { IoLogoInstagram } from "react-icons/io";
import { ImYoutube2 } from "react-icons/im";
import './Socials.scss';

const Socials = () => {

  const linkRedirectHandler = (url) => {
    window.open(url, "_blank");
  };
  
  return (
    <div className="socials">
      <IconButton
        class={"socials__icon"}
        onClick={() =>
          linkRedirectHandler("https://www.instagram.com/ly_taekwondo/")
        }
      >
        <IoLogoInstagram />
      </IconButton>
      <IconButton
        class={"socials__icon"}
        onClick={() =>
          linkRedirectHandler(
            "https://www.youtube.com/channel/UC4towYpMTj6oK0xVYpMVmvA?"
          )
        }
      >
        <ImYoutube2 />
      </IconButton>
    </div>
  );
};

export default Socials;