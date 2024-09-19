/* eslint-disable react/prop-types */
import { useState, useEffect, useRef } from 'react';

const NumberCounter = ({ start, end, duration }) => {
  const [count, setCount] = useState(start);
  const ref = useRef();
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          let startTimestamp = null;
          const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            setCount(Math.floor(progress * (end - start) + start));
            if (progress < 1) {
              window.requestAnimationFrame(step);
            }
          };
          window.requestAnimationFrame(step);
        }
      },
      { threshold: 0.5 }
    );
    
    if (ref.current) {
      observer.observe(ref.current);
    }
    
    return () => observer.disconnect();
  }, [start, end, duration]);

  return (
    <div ref={ref}>
      <h2>{count}</h2>
    </div>
  );
};

export default NumberCounter;
