import React from "react";
import Image1 from "../../assets/category/uiux.jpg";
import Image2 from "../../assets/category/p.webp";
import Image3 from "../../assets/category/i.jpg";
import Image4 from "../../assets/category/l.jpg";
import Button from "../Shared/Button";

const Category = () => {
  return (
    <div className="py-8">
      <div className="header flex flex-row items-center ml-14 w-full text-2xl font-semibold mt-14"><h1>Top Topics</h1></div>
      <div className="container mt-0">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* first col */}
          <div className=" py-1  bg-gradient-to-br text-black font-mono rounded-xl relative h-[320px] flex items-center justify-center flex-col">
            <img src={Image1} alt="" className="w-full h-[200px] absolute rounded-xl mb-10" />
            <div>
              <div className="mt-44">
                <Button
                  text="Browse"
                  bgColor={"bg-violet-700"}
                  textColor={"text-white"}
                />
              </div>
            </div>
            <h1 className="mt-8">UI/UX Design</h1>
          </div>
          {/* second col */}
          <div className=" py-2 bg-gradient-to-br text-black font-mono rounded-xl relative h-[320px] flex items-center justify-center flex-col">
            <img src={Image2} alt="" className="w-full h-[200px] absolute rounded-xl mb-10" />
            <div>
              <div className="mt-44">
                <Button
                  text="Browse"
                  bgColor={"bg-violet-700"}
                  textColor={"text-white"}
                />
              </div>
            </div>
            <h1 className="mt-8">Product Design</h1>
          </div>
          {/* third col */}
          <div className=" py-2  bg-gradient-to-br text-black font-mono rounded-xl relative h-[320px] flex items-center justify-center flex-col">
            <img src={Image3} alt="" className="w-full h-[200px] absolute rounded-xl mb-10" />
            <div>
              <div className="mt-44">
                <Button
                  text="Browse"
                  bgColor={"bg-violet-700"}
                  textColor={"text-white"}
                />
              </div>
            </div>
            <h1 className="mt-8">Illustartion Design</h1>
          </div>
          <div className=" py-2  bg-gradient-to-br text-black font-mono rounded-xl relative h-[320px] flex items-center justify-center flex-col">
            <img src={Image4} alt="" className="w-full h-[200px] absolute rounded-xl mb-10" />
            <div>
              <div className="mt-44">
                <Button
                  text="Browse"
                  bgColor={"bg-violet-700"}
                  textColor={"text-white"}
                />
              </div>
            </div>
            <h1 className="mt-8">Lettering Design</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
