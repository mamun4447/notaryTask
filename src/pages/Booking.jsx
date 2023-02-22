import React, { useContext } from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import { context } from "../context/Provider";

const Booking = () => {
  const { data, setData } = useContext(context);
  const handleForm = (event) => {
    event.preventDefault();

    const form = event.target;
    const singerName = form.singerName.value;
    const singerPhone = form.singerPhone.value;
    const singerEmail = form.singerEmail.value;

    const companyName = form.companyName.value;
    const agentName = form.agentName.value;
    const agentPhone = form.agentPhone.value;
    const agentEmail = form.agentEmail.value;

    const loanNo = form.loanNo.value;
    const orderAddress = form.orderAddress.value;

    setData({
      ...data,
      singerName,
      singerPhone,
      singerEmail,
      companyName,
      agentName,
      agentPhone,
      agentEmail,
      loanNo,
      orderAddress,
    });
  };
  return (
    <section className="flex flex-col w-full">
      <Header />
      {/* ===Steps=== */}
      <ul className="steps w-full my-4">
        <li className="step-primary" data-content="."></li>
        <li className="step step-primary"></li>
        <li className="step step-primary"></li>
        <li className="step"></li>
        <li className="step" data-content="."></li>
      </ul>

      {/* ==>Form<== */}
      <form
        onSubmit={handleForm}
        className="flex flex-col gap-10 w-full border p-4 m-4"
      >
        {/* <====Singer Details====> */}
        <div>
          <h1 className="text-xl font-bold">Singer Details</h1>
          <hr className="p-2" />
          <div className="grid grid-cols-2 gap-10">
            {/* ===> Name<=== */}
            <div className="flex flex-col">
              <label htmlFor="" className="pl-1">
                Full Name
              </label>
              <input
                type="text"
                name="singerName"
                placeholder="full name"
                className="input input-bordered"
              />
            </div>

            {/* ===>Phone<=== */}
            <div className="flex flex-col">
              <label htmlFor="" className="pl-1">
                Phone
              </label>
              <input
                type="text"
                name="singerPhone"
                placeholder="phone"
                className="input input-bordered"
              />
            </div>

            {/* ===>Email<=== */}
            <div className="flex flex-col">
              <label htmlFor="" className="pl-1">
                Email
              </label>
              <input
                type="text"
                name="singerEmail"
                placeholder="email"
                className="input input-bordered"
              />
            </div>
          </div>
        </div>

        {/* <====Company Details====> */}
        <div>
          <h1 className="text-xl font-bold">Title Company Details</h1>
          <hr className="p-2" />
          <div className="grid grid-cols-2 gap-10">
            {/* ===> company Name<=== */}
            <div className="flex flex-col">
              <label htmlFor="" className="pl-1">
                Company Name
              </label>
              <input
                type="text"
                name="companyName"
                placeholder="Company Name"
                className="input input-bordered"
              />
            </div>

            {/* ===> Agent Name<=== */}
            <div className="flex flex-col">
              <label htmlFor="" className="pl-1">
                Agent Name
              </label>
              <input
                type="text"
                name="agentName"
                placeholder="Agent Name"
                className="input input-bordered"
              />
            </div>

            {/* ===>Phone<=== */}
            <div className="flex flex-col">
              <label htmlFor="" className="pl-1">
                Phone
              </label>
              <input
                type="text"
                name="agentPhone"
                placeholder="phone"
                className="input input-bordered"
              />
            </div>

            {/* ===>Email<=== */}
            <div className="flex flex-col">
              <label htmlFor="" className="pl-1">
                Email
              </label>
              <input
                type="text"
                name="agentEmail"
                placeholder="email"
                className="input input-bordered"
              />
            </div>
          </div>
        </div>

        {/* <====Order Info====> */}
        <div>
          <h1 className="text-xl font-bold">Order Info</h1>
          <hr className="p-2" />
          <div className="grid grid-cols-2 gap-10">
            {/* ===> Loan No.<=== */}
            <div className="flex flex-col">
              <label htmlFor="" className="pl-1">
                Escrow #/ Loan no
              </label>
              <input
                type="text"
                name="loanNo"
                placeholder="Loan no"
                className="input input-bordered"
              />
            </div>

            {/* ===>address<=== */}
            <div className="flex flex-col">
              <label htmlFor="" className="pl-1">
                Address
              </label>
              <input
                type="text"
                name="orderAddress"
                placeholder="address"
                className="input input-bordered"
              />
            </div>
          </div>
        </div>

        <div className="flex justify-end">
          <Link
            to="/location"
            className="btn gap-2 flex items-center hover:text-violet-600"
          >
            Next Step <FaArrowRight />
          </Link>
        </div>
      </form>
    </section>
  );
};

export default Booking;
