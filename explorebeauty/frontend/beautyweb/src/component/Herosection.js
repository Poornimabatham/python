import React from "react";

const Herosection = () => {
  return (
    <>
      <div className=" flex flex-col items-center justify-center flex-1 px-4 text-center">
        <h1 className="text-4xl md:text-5xl   mx-8  my-9 font-bold mb-6">
          Where Products meets beuty of the women
        </h1>
        <p className=" mx-w-xl text-lg md:text-xl mb-8">
          Look beyond the obvious. Use Cutshort to easily get discovered by
          awesome companies <br></br>
          and get referred to job positions very few know about.
        </p>
        <div className="flex gap -4">
          <button className="bg-white text-pink-900  mx-3 px-6 py-3 rounded-full font-semibold">
            Find jobs
          </button>
          <button className="border-2 border-white px-6 py-3 rounded-full text-white hover:bg-white hover:text-pink-500 transition duration-300 font-semibold">
            Hire talent
          </button>
        </div>
      </div>
    </>
  );
};

export default Herosection;
