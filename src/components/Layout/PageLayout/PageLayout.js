import Heading from '../../Heading/Heading';
import ContentContainer from '../Content/ContentContainer';
import './PageLayout.scss';

const PageLayout = (props) => {
  const backgroundImg = props.backgroundImage && {
    backgroundImage: `linear-gradient(0deg, rgba(39,39,39,0.975) 100%, rgba(39,39,39,0.975) 100%),url(${props.backgroundImage})`,
  };

  return (
    <main className="pageLayout" style={backgroundImg}>
      <Heading>{props.heading}</Heading>
      <ContentContainer>{props.children}</ContentContainer>
    </main>
  );
};

export default PageLayout;