import { useState } from 'react';
import TextContent from '../TextContent/TextContent';
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

  const [selectedIndex, setSelectedIndex] = useState(1);
  const [touchPosition, setTouchPosition] = useState({
    touchStart: null,
    touchEnd: null,
  });

  const touchStartHandler = (e) => {
    setTouchPosition({
      ...touchPosition,
      touchStart: e.targetTouches[0].clientX,
    });
  };

  const touchMoveHandler = (e) => {
    setTouchPosition({
      ...touchPosition,
      touchEnd: e.targetTouches[0].clientX,
    });
  };

  const incrementIndexHandler = () => {
    setSelectedIndex(prevState => prevState + 1)
    if (selectedIndex === 2) setSelectedIndex(0)
  }

  const decrementIndexHandler = () => {
    setSelectedIndex(prevState => prevState - 1)
    if (selectedIndex === 0) setSelectedIndex(2)
  }

  const touchEndHandler = () => {
    const { touchStart, touchEnd } = touchPosition;

    if (!touchEnd) return;
    // Touch slide left
    if (touchStart - touchEnd > 120) decrementIndexHandler();
    // Touch slide right
    if (touchStart - touchEnd < -120) incrementIndexHandler();

    setTouchPosition({ ...touchPosition, touchEnd: null });
  };
 
  const spanItems = TESTIMONIALDATA.map((_, index) => (
    <span
      key={index}
      className={
        selectedIndex === index
          ? "testimonial__actionSpan active"
          : "testimonial__actionSpan"
      }
      onClick={() => setSelectedIndex(index)}
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
        <p>{TESTIMONIALDATA[selectedIndex].review}</p>
        <p className="testimonial__footerText">
          {TESTIMONIALDATA[selectedIndex]?.participant} - Participant of Ly Taekwondo workshop
        </p>
      </TextContent>
      <div className="testimonial__action">{spanItems}</div>
    </div>
  );
};

export default Testimonial;