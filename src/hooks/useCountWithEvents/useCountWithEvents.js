import { useState } from "react";

const useCountWithEvents = (length) => {
  const [count, setCount] = useState(0);
  const [touchPosition, setTouchPosition] = useState({
    touchStart: null,
    touchEnd: null,
  });
  
  const incrementCount = (amount)  => {
    // Check if function has received 'amount' args
    const hasAmount = amount > 0;
    if ((!hasAmount && count < length - 1) || (hasAmount && count < length - amount)) {
      setCount((prevState) => prevState + 1);
      return;
    }
    setCount(0);
  };

  const decrementCount = (amount) => {
    const hasAmount = amount > 0;
    if (count > 0) {
      setCount((prevState) => prevState - 1);
      return;
    }
    setCount(hasAmount ? length - amount : length - 1);
  };

  //Handle touch events
  const touchStartHandler = (e) => {
    e.stopPropagation();
    setTouchPosition({
      ...touchPosition,
      touchStart: e.targetTouches[0].clientX,
    });
  };

  const touchMoveHandler = (e) => {
    e.stopPropagation();
    setTouchPosition({
      ...touchPosition,
      touchEnd: e.targetTouches[0].clientX,
    });
  };

  const touchEndHandler = (e, amount) => {
    e.stopPropagation();
    const { touchStart, touchEnd } = touchPosition;

    if (!touchEnd) return;
    // Touch slide left
    if (touchStart - touchEnd > 120) decrementCount(amount);
    // Touch slide right
    if (touchStart - touchEnd < -120) incrementCount(amount);

    setTouchPosition({ ...touchPosition, touchEnd: null });
  };

  return {
    count,
    setCount,
    incrementCount,
    decrementCount,
    touchStartHandler,
    touchMoveHandler,
    touchEndHandler,
  };
};

export default useCountWithEvents;
