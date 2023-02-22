import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import Calculate from "./Calculate";
import Events from "./Events";
import Header from "./Header";

const Body = () => {
  return (
    <section className="flex-1 w-full">
      <Header />
      {/* ===Steps=== */}
      <ul className="steps w-full my-4">
        <li className="step-primary" data-content="."></li>
        <li className="step step-primary"></li>
        <li className="step "></li>
        <li className="step"></li>
        <li className="step" data-content="."></li>
      </ul>

      {/* ===Body=== */}
      <div className="grid grid-cols-2 gap-3">
        <Events />
        <Calculate />
      </div>

      {/* ===Bottom=== */}
      <div className="my-5 font-bold flex gap-2 items-center justify-end cursor-pointer hover:text-violet-600">
        <Link className="text-end " to="/booking">
          Next Step
        </Link>
        <FaArrowRight />
      </div>
    </section>
  );
};

export default Body;
