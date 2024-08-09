import React from "react";
import Image1 from "../../assets/category/w.png";

const Category = () => {
  return (
    <div className="py-8">
      <div className="header flex flex-row items-center ml-14 w-full text-2xl font-semibold mt-14"><h1>Trending</h1></div>
      <div className="container mt-10 flex justify-center items-center">
        <div className="flex flex-row max-phone:grid max-phone:grid-cols-1 max-phone:gap-8 justify-around items-center w-[90%]">
          {/* First col */}
          <div className="w-[580px] bg-gradient-to-br from-white/90 to-white text-white relative h-[290px] max-phone:h-[420px] flex items-center pl-2 max-phone:pl-0 rounded-xl hover:scale-105 duration-500 cursor-pointer  max-phone:flex-col max-phone:w-full">
          <img
              src={Image1}
              alt=""
              className="w-[280px] max-phone:w-[80%] max-phone:h-[40%] max-phone:mt-4 rounded-xl"
            />
            <div className="ml-10 max-phone:ml-0 h-[280px] max-phone:h-[200px] w-full">
              <div className="h-[230px] flex flex-col justify-around items-center mt-5 max-phone:mt-0 ">
                <p className=" text-2xl max-phone:text-lg mb-[5px] max-phone:mb-0 text-black">Best POD Experience SVG</p>
                <p className="text-2xl max-phone:text-xl font-semi bold mb-[2px] max-phone:mb-0 text-red-600">Instant Download</p>
                <button className="justify-center px-14 max-phone:px-20 py-3.5 mt-5 max-phone:mt-0 max-phone: text-xl font-abc font-semibold text-violet-700 whitespace-nowrap bg-transparent outline outline-violet-700 outline-1 rounded-2xl max-md:px-5 hover:scale-125 duration-500 cursor-pointer">
              Explore
            </button>
              </div>
            </div>
          </div>
          {/* Second col */}
          <div className="py-16 pl-5 bg-custom-image bg-cover bg-center text-black rounded-3xl relative h-[290px] flex items-start hover:scale-105 duration-500 cursor-pointer w-[300px] max-phone:w-full">
            <div>
              <div className="mt-2">
                <p className="mb-[2px] text-yellow-400">40 % off</p>
                <p className="text-2xl font-semibold mb-[2px]">SVG Instant</p>
                <p className="text-4xl xl:text-5xl font-bold opacity-20 mb-2">
                  T-shirt
                </p>
              </div>
            </div>
          </div>
          {/* Third col */}
          <div className="py-10 pl-5 bg-custom-image2 bg-cover bg-center text-black rounded-3xl relative h-[290px] flex items-start hover:scale-105 duration-500 cursor-pointer w-[300px] max-phone:w-full">
            <div>
              <div className="flex flex-row items-center justify-center h-full w-full mt-36 ml-9">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
