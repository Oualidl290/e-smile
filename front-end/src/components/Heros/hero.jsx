import React, { useState, useEffect } from "react";
import axios from "axios";
import brand1 from "../../assets/heroueses/uiux.jpg";
import brand2 from "../../assets/heroueses/product.jpg";
import brand3 from "../../assets/heroueses/brand.jpg";
import brand4 from "../../assets/heroueses/illustaration.jpg";
import brand5 from "../../assets/heroueses/3D.png";
import brand6 from "../../assets/heroueses/photo.webp";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  const [heroes, setHeroes] = useState([]);

  // Fetch heroes data from the API when the component mounts
  useEffect(() => {
    const fetchHeroes = async () => {
      const response = await axios.get("http://127.0.0.1:8000/api/heroes");
      setHeroes(response.data.results);
    };

    fetchHeroes();
  }, []);
  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 700,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    pauseOnFocus: true,
  };

  return (
    <div className="container items-center mt-3 text-md font-thin">
      <div className="grid grid-cols-1 max-phone:grid-cols-4 lg:grid-cols-6 gap-0 h-[180px] max-phone:h-[100px] mb-10 font-abc text-black/70 font-bold">
        {/* first col */}
        <div className=" py-2  bg-gradient-to-br rounded-full relative h-[290px] max-phone:h-[240px] flex items-center justify-center flex-col">
          <div className="flex justify-center items-center w-[85px] h-[85px] max-phone:w-[45px] max-phone:h-[45px] absolute rounded-full bg-slate-300 mb-10 cursor-pointer shadow-xl">
            <img
              src={brand1}
              alt=""
              className="w-[80px] h-[80px] max-phone:w-[40px] max-phone:h-[40px] absolute rounded-full cursor-pointer shadow-xl hover:scale-105 transition-all duration-500"
            />
          </div>

          <h1 className="mt-24 max-phone:mt-10 max-phone:text-[8px] max-phone:text-clip">UI/UX Design</h1>
        </div>
        {/* second col */}
        <div className=" py-2 bg-gradient-to-br  rounded-xl relative h-[290px] max-phone:h-[240px]  flex items-center justify-center flex-col">
          <div className="flex justify-center items-center w-[85px] h-[85px] max-phone:w-[45px] max-phone:h-[45px] absolute rounded-full bg-slate-300 mb-10 cursor-pointer shadow-xl hover:scale-105 transition-all duration-500">
            <img
              src={brand2}
              alt=""
              className="w-[80px] h-[80px] max-phone:w-[40px] max-phone:h-[40px] absolute rounded-full cursor-pointer shadow-xl hover:scale-105 transition-all duration-500"
            />
          </div>

          <h1 className="mt-24 max-phone:mt-10 max-phone:text-[8px] max-phone:text-clip">Product Design</h1>
        </div>
        {/* third col */}
        <div className=" py-2  bg-gradient-to-br  rounded-xl relative h-[290px] max-phone:h-[240px]  flex items-center justify-center flex-col">
          <div className="flex justify-center items-center w-[85px] h-[85px] max-phone:w-[45px] max-phone:h-[45px] absolute rounded-full bg-slate-300 mb-10 cursor-pointer shadow-xl hover:scale-105 transition-all duration-500">
            <img
              src={brand4}
              alt=""
              className="w-[80px] h-[80px] max-phone:w-[40px] max-phone:h-[40px] absolute rounded-full cursor-pointer shadow-xl hover:scale-105 transition-all duration-500"
            />
          </div>

          <h1 className="mt-24 max-phone:mt-10 max-phone:text-[8px] max-phone:text-clip">Illustartion Design</h1>
        </div>
        <div className=" py-2  bg-gradient-to-br  rounded-xl relative h-[290px] max-phone:h-[240px]  flex items-center justify-center flex-col">
          <div className="flex justify-center items-center w-[85px] h-[85px] max-phone:w-[45px] max-phone:h-[45px] absolute rounded-full bg-slate-300 mb-10 cursor-pointer shadow-xl hover:scale-105 transition-all duration-500">
            <img
              src={brand3}
              alt=""
              className="w-[80px] h-[80px] max-phone:w-[40px] max-phone:h-[40px] absolute rounded-full cursor-pointer shadow-xl hover:scale-105 transition-all duration-500"
            />
          </div>

          <h1 className="mt-24 max-phone:mt-10 max-phone:text-[8px] max-phone:text-clip">3D Design</h1>
        </div>
        <div className=" py-2  bg-gradient-to-br rounded-xl relative h-[290px] max-phone:h-[240px]  flex items-center justify-center flex-col max-phone:invisible">
          <div className="flex justify-center items-center w-[85px] h-[85px] absolute rounded-full bg-slate-300 mb-10 cursor-pointer shadow-xl hover:scale-105 transition-all duration-500">
            <img
              src={brand5}
              alt=""
              className="w-[80px] h-[80px] max-phone:w-[40px] max-phone:h-[40px] absolute rounded-full cursor-pointer shadow-xl hover:scale-105 transition-all duration-500"
            />
          </div>

          <h1 className="mt-24 max-phone:mt-10 max-phone:text-[8px] max-phone:text-clip">Lettering Design</h1>
        </div>
        <div className=" py-2  bg-gradient-to-br  rounded-xl relative h-[290px] max-phone:h-[240px]  flex items-center justify-center flex-col max-phone:invisible">
          <div className="flex justify-center items-center w-[85px] h-[85px] absolute rounded-full bg-slate-300 mb-10 cursor-pointer shadow-xl hover:scale-105 transition-all duration-500">
            <img
              src={brand6}
              alt=""
              className="w-[80px] h-[80px] max-phone:w-[40px] max-phone:h-[40px] absolute rounded-full cursor-pointer shadow-xl hover:scale-105 transition-all duration-500"
            />
          </div>

          <h1 className="mt-24 max-phone:mt-10 max-phone:text-[8px] max-phone:text-clip">Photos Design</h1>
        </div>
      </div>
      <div className="w-full flex justify-around ">
        {/* hero 1 */}
        <div>
          <div className="flex gap-0 max-phone:flex-col max-phone:gap-0 ">
            <div className="flex flex-col w-[791px] max-phone:ml-0 max-phone:w-full">
              <div className="flex flex-col grow items-center px-4 pt-3 pb-8 w-[750px] h-[470px] max-phone:h-[370px] rounded-xl shadow-sm bg-white bg-opacity-90 max-md:mt-10 max-phone:w-full">
                <div className=" max-md:max-w-full">
                  <div className="flex gap-7 max-phone:flex-row max-md:gap-0">
                    <div className="flex flex-col w-8/12 max-md:ml-0 max-phone:h-[140px]">
                      <img
                        loading="lazy"
                        srcSet="/src/assets/brand/t.png"
                        className="grow w-full aspect-[0.86]  h-[300px] rounded-xl max-phone:h-[300px]"
                      />
                    </div>
                    <div className="flex flex-col ml-5 w-8/12 max-phone:h-[140px]">
                      <img
                        loading="lazy"
                        srcSet="/src/assets/brand/w.png"
                        className="grow w-full aspect-[0.86]  h-[300px] rounded-xl max-phone:h-[300px]"
                      />
                    </div>
                  </div>
                </div>
                <div className="mt-4 max-phone:mt-16 text-lg text-black">
                  <TypeAnimation
                    className="text-lg -tracking-normal"
                    sequence={[
                      "200+ views in last 24 h",
                      500,
                      "20k User per mounth !",
                      1500,
                      "Top seller at 2024 👌",
                      1500,
                    ]}
                    wrapper="span"
                    speed={80}
                    style={{ fontSize: "1.6em", display: "inline-block" }}
                    repeat={Infinity}
                  />
                </div>
                <div className="flex gap-1 mt-1 max-phone:mt-4">⭐⭐⭐⭐⭐</div>
                <button className="justify-center px-14 py-3.5 mt-2 text-2xl font-abc font-bold text-white whitespace-nowrap bg-violet-700 rounded-2xl max-phone:px-5  hover:scale-105 duration-500 cursor-pointer">
                  Explore
                </button>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow max-md:mt-10 gap-4">
                {/*first one*/}
                <div className="py-1.5 pr-10 pl-1.5 rounded-xl shadow-sm bg-white bg-opacity-90 max-md:pr-5 max-md:max-w-full h-[230px] max-phone:h-[530px]">
                  <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                    <div className="flex flex-col w-6/12 max-phone:ml-0 max-phone:w-full">
                      <img
                        loading="lazy"
                        srcSet="/src/assets/brand/mm.jpg"
                        className="w-full max-phone:mt-4 max-phone:ml-[6px] rounded-xl h-[220px]"
                      />
                    </div>
                    <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                      <div className="flex flex-col self-stretch my-auto max-md:mt-10">
                        <div className="text-xl text-black font-abc font-bold">
                          Sarcastic svg, Sarcasm Svg Bundle, Sarcastic Bundle
                        </div>
                        <div className="mt-1.5 text-lg font-extralight text-red-600">
                          70% off sale for a limited time
                        </div>
                        <div className="flex gap-4 items-center max-phone:mt-5 mt-2 text-base whitespace-nowrap text-violet-950 max-md:pr-5">
                          <div className="my-auto">SVGcraftor</div>
                        </div>
                        <button className="justify-center px-14 py-3.5 mt-2 max-phone:mt-5 text-2xl font-abc font-bold text-white whitespace-nowrap bg-violet-700 rounded-2xl max-md:px-5 hover:scale-105 duration-500 cursor-pointer max-phone:ml-3">
                          Explore
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="py-1.5 pr-10 pl-1.5 rounded-xl shadow-sm bg-white bg-opacity-90 max-md:pr-5 max-md:max-w-full h-[230px] max-phone:h-[530px]">
                  <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                    <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                      <img
                        loading="lazy"
                        srcSet="/src/assets/brand/kk.jpg"
                        className="w-full max-md:mt-4 max-phone:ml-[6px] rounded-xl h-[220px]"
                      />
                    </div>
                    <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                      <div className="flex flex-col self-stretch my-auto max-md:mt-10">
                        <div className="text-xl text-black font-abc font-bold">
                          Sarcastic svg, Sarcasm Svg Bundle, Sarcastic Bundle
                        </div>
                        <div className="mt-1.5 text-lg font-extralight text-red-600">
                          70% off sale for a limited time
                        </div>
                        <div className="flex gap-4 items-center max-phone:mt-5 mt-2 text-base whitespace-nowrap text-violet-950 max-md:pr-5">
                          <div className="my-auto">SVGcraftor</div>
                        </div>
                        <button className="justify-center px-14 py-3.5 mt-2 max-phone:mt-5 text-2xl font-abc font-bold text-white whitespace-nowrap bg-violet-700 rounded-2xl max-md:px-5 hover:scale-105 duration-500 cursor-pointer max-phone:ml-3">
                          Explore
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
