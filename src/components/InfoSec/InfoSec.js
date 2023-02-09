import { forwardRef } from 'react';
import './InfoSec.scss';

const InfoSec = forwardRef((props, ref) => {
  const backgroundImg = props.backgroundImage && {
    backgroundImage: `linear-gradient(0deg, rgba(39,39,39,0.975) 100%, rgba(39,39,39,0.975) 100%),url(${props.backgroundImage})`,
  }; 

  return (
    <section className="infoSec" ref={ref} style={backgroundImg}>
      {props.children}
    </section>
  );
});

export default InfoSec;