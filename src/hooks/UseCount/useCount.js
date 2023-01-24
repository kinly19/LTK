import { useState } from "react";

const useCount = (length) => {
  const [count, setCount] = useState(0);
  
  const incrementCount = (amount)  => {
    const hasAmount = amount > 0;
 
    if ((hasAmount && count < length - amount) || (!hasAmount && count < length - 1))
      setCount((prevState) => prevState + 1);
  };

  const decrementCount = () => {
    if (count > 0) setCount((prevState) => prevState - 1);
  };

  return {
    count,
    setCount,
    incrementCount,
    decrementCount,
  };
};

export default useCount;
