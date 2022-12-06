import SubHeading from '../Heading/SubHeading/SubHeading';
import './Card.scss';
import CardHeader from './CardHeader/CardHeader';

const Card = (props) => {
  const subHeader = (
    <SubHeading class={"card__subHeader"} fontSize={props.subHeadingFontsize}>
      {props.subHeading}
    </SubHeading>
  );

  return (
    <div className="card">
      <div className="card__header">
        <CardHeader fontSize={props.headingFontsize}>{props.heading}</CardHeader>
        {props.subHeading && subHeader}
      </div>
      <p className="card__text">{props.content}</p>
    </div>
  );
};

export default Card;