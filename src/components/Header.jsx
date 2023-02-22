import React from "react";
import { FaAngleLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <section className="flex flex-col w-full">
      {/* ===Back=== */}
      <div className="flex gap-3 py-3 items-center ml-3  bg-white relative">
        <Link to="/" className="bg-slate-300 rounded-full p-5 text-xl">
          <FaAngleLeft />
        </Link>
        <div>
          <h1 className="text-xl">New Appointment Request</h1>
          <p className="text-slate-400">Some great coverage for less</p>
        </div>
      </div>
    </section>
  );
};

export default Header;
