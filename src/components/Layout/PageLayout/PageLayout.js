import Heading from '../../Heading/Heading';
import './PageLayout.scss';

const PageLayout = (props) => {
  const backgroundImg = props.backgroundImage && {
    backgroundImage: `linear-gradient(0deg, rgba(39,39,39,0.975) 100%, rgba(39,39,39,0.975) 100%),url(${props.backgroundImage})`,
  };

  return (
    <main className="pageLayout" style={backgroundImg}>
      <Heading>{props.heading}</Heading>
      <div className="pageLayout__content">{props.children}</div>
    </main>
  );
};

export default PageLayout;