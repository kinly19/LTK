import Heading from '../Heading/Heading';
import SubHeading from '../Heading/SubHeading/SubHeading';
import './Card.scss';

const Card = (props) => {
  const subHeader = (
    <SubHeading class={"card__subHeader"} fontSize={props.subHeadingFontsize}>
      {props.subHeading}
    </SubHeading>
  );

  return (
    <div className="card">
      <div className="card__header">
        <Heading fontSize={"4rem"} marginBottom={"0"}>
          {props.heading}
        </Heading>
        {props.subHeading && subHeader}
      </div>
      <p className="card__text">{props.content}</p>
    </div>
  );
};

export default Card;