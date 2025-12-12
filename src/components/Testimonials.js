import React, { useState } from "react";
import Card from "./Card.js";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const Testimonials = ({ reviews }) => {
  const [index, setIndex] = useState(0);

  const leftShiftHandler = () => {
    setIndex(index - 1 < 0 ? reviews.length - 1 : index - 1);
  };

  const rightShiftHandler = () => {
    setIndex(index + 1 === reviews.length ? 0 : index + 1);
  };

  const surpriseShiftHandler = () => {
    const surpriseIndex = Math.floor(Math.random() * reviews.length);
    setIndex(surpriseIndex);
  };

  return (
    <div className="flex flex-col items-center justify-center w-[85vw] md:w-[700px] bg-white hover:shadow-xl rounded-md transition-all duration-700 mt-10 p-10">
      <Card review={reviews[index]} />
      <div className="flex mt-6 gap-3 text-3xl mx-auto font-bold text-violet-400 ">
        <button
          className="cursor-pointer w-fit hover:text-violet-500 mt-5"
          onClick={leftShiftHandler}
          aria-label="Previous testimonial"
        >
          <FiChevronLeft />
        </button>
        <button
          className="cursor-pointer w-fit hover:text-violet-500 mt-5"
          onClick={rightShiftHandler}
          aria-label="Next testimonial"
        >
          <FiChevronRight />
        </button>
      </div>
      <div className="mt-5">
        <button
          className="bg-violet-400 text-white font-bold px-10 py-2 rounded-md hover:bg-violet-500 transition-all duration-200 text-lg"
          onClick={surpriseShiftHandler}
        >
          Surprise Me
        </button>
      </div>
    </div>
  );
};

export default Testimonials;
