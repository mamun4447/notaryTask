import React from "react";

const Calculate = () => {
  return (
    <div className="w-full border mt-3 pb-5 rounded-xl">
      <h1 className="text-2xl text-center my-4">
        Calculate your cost for RON!
      </h1>
      <div className="flex flex-col gap-4 p-4">
        <div className="flex gap-2 items-center justify-between">
          <div className=" text-slate-500">
            <h2 className="text-2xl">No of extra signature</h2>
            <p>Please enter zero, if only one signature is required</p>
          </div>
          <input
            className="input input-bordered w-20 border border-spacing-1"
            type="text"
          />
        </div>
        <div className="flex gap-2 items-center justify-between">
          <div className=" text-slate-500">
            <h2 className="text-2xl">
              How Many Files will you be uploading in this session{" "}
            </h2>
          </div>
          <input
            className="input w-20 border border-spacing-1 input-bordered"
            type="text"
          />
        </div>
        <div className="flex gap-2 items-center justify-between">
          <div className=" text-slate-500">
            <h2 className="text-2xl">No of Singers</h2>
          </div>
          <input
            className="input w-20 border border-spacing-1 input-bordered"
            type="text"
          />
        </div>
        <div className="flex gap-2 items-center justify-between">
          <div className=" text-slate-500">
            <h2 className="text-2xl">Do you Need witness?</h2>
            <p>Do Not enter anything if you're bring your own witness</p>
          </div>
          <input
            className="input input-bordered w-20 border border-spacing-1"
            type="text"
          />
        </div>
      </div>
      <h1 className="text-2xl text-center my-4 text-slate-500">
        Your approximate Quote: $59
      </h1>
    </div>
  );
};

export default Calculate;
