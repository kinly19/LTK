import img1 from '../../assets/img/img1.jpg'
import './Landing.scss';

const Landing = () => {
  const landingBackground = {
    backgroundImage: `linear-gradient(180deg, rgba(39,39,39,0.90) 100%, rgba(39,39,39,0.99) 100%), url(${img1})`,
  };

  return (
    <div className="landing" style={landingBackground}>
      <div className="landing__header">
        <h1>Ly</h1>
        <h1>Tae</h1>
        <h1>Kwon</h1>
        <h1>Do</h1>
        <h2>An endless life skill</h2>
      </div>
    </div>
  );
};

export default Landing;