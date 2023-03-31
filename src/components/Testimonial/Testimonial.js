import TextContent from '../Layout/Text/TextContainer';
import useCountWithEvents from '../../hooks/useCountWithEvents/useCountWithEvents';
import './Testimonial.scss';

const Testimonial = () => {

  const TESTIMONIALDATA = [
    {
      participant: "Ahren ",
      review: `After the session I felt revived, it had been a long time since 
        i had a proper work out in class and this worked out both body and mind!`,
    },

    {
      participant: "Avril",
      review: `Feeling re-energised and calm after a long week. It was a great introduction to Taekwondo 
      and some self-defence techniques. Very friendly and helpful, on hand to lead you through the process 
      and aid you in grasping the techniques. Overall I felt I learnt a lot, whilst having fun, getting in 
      a cardio workout and meeting new people. I would definitely recommend it to others!`,
    },

    {
      participant: "Craig",
      review: `Friendly, enthusiastic and knowledgeable and manged to keep the experience light hearted and informative. 
      I look forward to the next session.`,
    },
  ];

  const {
    count: testimonialIndex,
    setCount,
    touchStartHandler,
    touchMoveHandler,
    touchEndHandler,

  } = useCountWithEvents(TESTIMONIALDATA.length);

  const spanItems = TESTIMONIALDATA.map((_, index) => (
    <span
      key={index}
      className={
        testimonialIndex === index
          ? "testimonial__actionSpan active"
          : "testimonial__actionSpan"
      }
      onClick={() => setCount(index)}
    ></span>
  ));

  return (
    <div
      className="testimonial"
      onTouchStart={touchStartHandler}
      onTouchMove={touchMoveHandler}
      onTouchEnd={touchEndHandler}
    >
      <TextContent>
        <p>{TESTIMONIALDATA[testimonialIndex].review}</p>
        <p className="testimonial__footerText">
          {TESTIMONIALDATA[testimonialIndex].participant} - Participant of Ly Taekwondo workshop
        </p>
      </TextContent>
      <div className="testimonial__action">{spanItems}</div>
    </div>
  );
};

export default Testimonial;