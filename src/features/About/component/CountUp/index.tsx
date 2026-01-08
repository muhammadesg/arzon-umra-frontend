import React, { useState, useEffect } from "react";

interface Props {
  end: number;
  startCountUp: boolean;
  duration?: number;
}

const CountUp = ({ end, duration = 3000, startCountUp }: Props) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!startCountUp) return;

    let start = 0;
    const increment = end / (duration / 10);

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        clearInterval(timer);
        start = end;
      }
      setCount(Math.round(start));
    }, 10);

    return () => clearInterval(timer);
  }, [end, duration, startCountUp]);

  return <span className="count-up">{count}</span>;
};

export default CountUp;