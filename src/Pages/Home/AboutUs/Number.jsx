/* eslint-disable react/prop-types */
import { useState } from "react";

// Card Component (With Counter)
const CounterCard = ({ label, start, end }) => {
  const [count, setCount] = useState(start);
  const [isCounting, setIsCounting] = useState(false);

  const handleMouseEnter = () => {
    if (isCounting) return; // Prevent multiple increments at the same time

    setIsCounting(true);
    let increment = start;

    const interval = setInterval(() => {
      increment++;
      setCount(increment);

      if (increment >= end) {
        clearInterval(interval);
        setIsCounting(false); // Allow new counting session
      }
    }, 50); // Adjust the speed of the counter here
  };

  return (
    <div>
      <div onMouseEnter={handleMouseEnter} className="relative mx-auto group cursor-pointer text-sky-50  overflow-hidden shadow-xl bg-[#950F0D] p-2 flex justify-center items-center font-bold text-2xl after:duration-500 before:duration-500  duration-500 hover:after:duration-500 hover:after:translate-x-24 hover:duration-500 after:absolute after:w-24 after:h-24 after:bg-red-700 after:rounded-full  after:blur-xl after:bottom-32 after:right-16  before:absolute before:w-20 before:h-20 before:bg-red-400 before:rounded-full  before:blur-xl before:top-20 before:right-16  hover:rotate-12 h-56 w-80 rounded-2xl outline outline-orange-700-400 -outline-offset-8">
        <div className="absolute top-3 right-20 group-hover:top-12 group-hover:-right-12 z-10 w-40 h-40 rounded-full group-hover:scale-150 group-hover:opacity-50 duration-500 bg-[#af1417]"></div>
        <div className="absolute top-3 right-20 group-hover:top-12 group-hover:-right-12 z-10 w-32 h-32 rounded-full group-hover:scale-150 group-hover:opacity-50 duration-500 bg-[#b41316]"></div>
        <div className="absolute top-3 right-20 group-hover:top-12 group-hover:-right-12 z-10 w-24 h-24 rounded-full group-hover:scale-150 group-hover:opacity-50 duration-500 bg-[#c10e0e]"></div>
        <div className="absolute top-3 right-20 group-hover:top-12 group-hover:-right-12 z-10 w-14 h-14 rounded-full group-hover:scale-150 group-hover:opacity-50 duration-500 bg-[#d31f12]"></div>
        <div className="z-10 flex flex-col items-center gap-2">
          <span className="text-gray-200 sofia text-6xl font-bold">{count}</span>
          <p className="text-gray-50 roboto">{label}</p>
        </div>
      </div>
    </div>
  );
};

// Parent Component
const Statistics = () => {
  return (
    <section
      style={{
        backgroundImage: `url('https://i.ibb.co.com/jGkbVCr/TeamBg.jpg')`,
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
        backgroundBlendMode: 'overlay'
      }}
      className="py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-center items-center space-x-6">
      <CounterCard label="Adopted" start={0} end={120} />
      <CounterCard label="Rescued" start={0} end={85} />
      <CounterCard label="In Shelter" start={0} end={40} />
    </section>

  );
};

export default Statistics;
