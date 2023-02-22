import React from "react";
import { FaArrowRight, FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const Events = () => {
  return (
    <div className=" p-3 flex flex-col gap-2">
      {/* ==== */}
      <div className="border rounded-xl p-3">
        <h1 className="text-2xl">Notary Singing Agent</h1>
        <div className="flex justify-between items-center text-slate-400">
          <p className=" w-[70%]">
            Suitable for those who purchased a brand new car
          </p>
          <p>Per Year</p>
        </div>
        <Link
          className="py-3 flex gap-2 items-center hover:text-violet-500"
          to="/booking"
        >
          View details <FaArrowRight />
        </Link>
      </div>

      {/* ==== */}
      <div className="border bg-red-50 border-violet-600 rounded-xl p-3">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl">Remote Online Notary</h1>
          <p className="text-violet-600 font-bold flex gap-2 justify-center items-center">
            <FaStar /> Popular
          </p>
        </div>
        <div className="flex justify-between items-center text-slate-400">
          <p className=" w-[70%]">
            Suitable for those who already have a valid third party cover
          </p>
          <p>Per Year</p>
        </div>
        <Link
          className="py-3 flex gap-2 items-center hover:text-violet-500"
          to="/booking"
        >
          View details <FaArrowRight />
        </Link>
      </div>

      {/* ==== */}
      <div className="border rounded-xl p-3">
        <h1 className="text-2xl">Mobile General Notary</h1>
        <div className="flex justify-between items-center text-slate-400">
          <p className=" w-[70%]">
            Suitable for those who use the car infrequently
          </p>
          <p>Per Year</p>
        </div>
        <Link
          className="py-3 flex gap-2 items-center hover:text-violet-500"
          to="/booking"
        >
          View details <FaArrowRight />
        </Link>
      </div>
    </div>
  );
};

export default Events;
