import { useRef } from "react";
import { useEffect, useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const buttonRef = useRef(null);

  console.log(buttonRef.current)

  useEffect(() => {
    if (count) {
      // alert('use effect called')
    }
  }, [count]);

  console.log(count);

  const increment = () => {
    setCount((prev) => prev + 1);
  };
  const decrement = () => {
    setCount((prev) => (prev === 0 ? 0 : prev - 1));
  };

  return (
    <div ref={buttonRef} id="text" className="w-screen text-center">
      <button onClick={decrement}>-</button>
      {count}
      <button onClick={increment}>+</button>
    </div>
  );
};

export default Counter;
