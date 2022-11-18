import './InfoSec.scss';

const InfoSec = (props) => {
  return (
    <section className="infoSec">
      {props.heading}
      <div className="infoSec__content">
        {props.children}
      </div>
    </section>
  );
};

export default InfoSec;