import axios from "axios";
import React, { useContext } from "react";
import { toast } from "react-hot-toast";
import Header from "../components/Header";
import { context } from "../context/Provider";

const Location = () => {
  const { data, setData } = useContext(context);

  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.target;
    const singingLocation = form.singingLocation.value;
    const date = form.date.value;
    const time = form.time.value;
    setData({ ...data, singingLocation, date, time });
  };

  axios
    .post(
      "https://notaryapp-staging.herokuapp.com/plugin/getPluginSampleResponse",
      data
    )
    .then((data) => {
      console.log(data);
      toast.success("Posted all the information!");
    })
    .catch((error) => toast.error(error.message));
  return (
    <div className="w-full">
      <Header />
      {/* ===Steps=== */}
      <ul className="steps w-full my-4">
        <li className="step-primary" data-content="."></li>
        <li className="step step-primary"></li>
        <li className="step step-primary"></li>
        <li className="step step-primary"></li>
        <li className="step" data-content="."></li>
      </ul>
      {/* <====Singing location====> */}
      <form onSubmit={handleSubmit} className="border border-spacing-2 p-4">
        <h1 className="text-xl font-bold">Singing Location</h1>
        <hr className="p-2" />
        <div className="grid grid-cols-1 gap-10">
          {/* ===> Enter Singing Location<=== */}
          <div className="flex flex-col ">
            <label htmlFor="" className="pl-1">
              Enter Singing Location
            </label>
            <input
              type="text"
              name="singingLocation"
              placeholder="Enter Singing Location"
              className="input input-bordered"
            />
          </div>

          <div className="grid grid-cols-2 gap-10">
            {/* ===>Date<=== */}
            <div className="flex flex-col">
              <label htmlFor="" className="pl-1">
                Date
              </label>
              <input type="date" name="date" className="input input-bordered" />
            </div>

            {/* ===>time<=== */}
            <div className="flex flex-col">
              <label htmlFor="" className="pl-1">
                Time
              </label>
              <input type="time" name="time" className="input input-bordered" />
            </div>
          </div>
          <div className="flex justify-center">
            <button className="btn">Schedule Appointment</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Location;
