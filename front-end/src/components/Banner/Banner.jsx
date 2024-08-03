import React from "react";

const Banner = ({ data }) => {
  return (
    <div className="min-h-[550px] flex justify-between items-center py-12 w-[1370px] max-phone:w-full ml-20 max-phone:ml-0">
      <div className="container w-full h-full">
        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center text-black rounded-3xl bg-white h-full"
        >
          {/* First column */}
          <div className="p-4 sm:p-8 flex flex-col justify-around items-start">
            <p data-aos="slide-right" className="lg:text-xl font-abc max-phone:text-lg max-phone:truncate max-phone:w-[260px] line-clamp-1">
              {data.name}
            </p>
            <h1
              data-aos="zoom-out"
              className="uppercase text-3xl lg:text-3xl font-semibold mt-4 max-phone:text-xl max-phone:line-clamp-3 line-clamp-2"
            >
              {data.description}
            </h1>
            <p data-aos="fade-up" className="text-2xl max-phone:text-4xl text-violet-800 font-extrabold mt-10 max-phone:ml-36 max-phone:mb-5">
              $ {data.price}
            </p>
          </div>
          {/* Second column */}
          <div data-aos="zoom-in" className="h-full flex items-center">
            <img
              src={data.image}
              alt={data.name}
              className="scale-125 w-[250px] md:w-[340px] mx-auto drop-shadow-[-10px_10px_12px_rgba(0,0,0,.6)] object-cover rounded-xl"
            />
          </div>
          {/* Third column */}
          <div className="flex flex-col justify-center gap-4 p-6 sm:p-8">
            <div data-aos="fade-up" data-aos-offset="0">
              <button
                className="bg-violet-700 py-6 max-phone:py-4 px-16 max-phone:text-xl rounded-2xl text-2xl shadow-xl text-white hover:scale-105 duration-500 flex flex-row justify-around max-phone:ml-7"
              >
                Shop Now   70% off
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
