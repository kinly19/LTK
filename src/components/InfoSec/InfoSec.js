import Heading from '../Heading/Heading';
import ContentContainer from '../Layout/Content/ContentContainer';
import './InfoSec.scss';

const InfoSec = (props) => {
  const backgroundImg = props.backgroundImage && {
    backgroundImage: `linear-gradient(0deg, rgba(39,39,39,0.975) 100%, rgba(39,39,39,0.975) 100%),url(${props.backgroundImage})`,
  }; 

  return (
    <section className="infoSec" style={backgroundImg}>
     <Heading>{props.heading}</Heading>
      <ContentContainer>
        {props.children}
      </ContentContainer>
    </section>
  );
};

export default InfoSec;