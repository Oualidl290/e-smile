import React from "react";
import Heading from "../Shared/Heading";
import Img1 from "../../assets/blogs/blog-1.jpg";
import Img2 from "../../assets/blogs/blog-2.jpg";
import Img3 from "../../assets/blogs/blog-3.jpg";

const BlogData = [
  {
    id:1,
    image: Img1,
    aosDelay: "0",
  },
  {
    id:2,
    image: Img2,
    aosDelay: "200",
  },
  {
    id:3,
    image: Img3,
    aosDelay: "400",
  },
  {
    id:4,
    image: Img3,
    aosDelay: "400",
  },
];
const Blogs = () => {
  return (
    <div className="my-12">
      <div className="container">
        {/* Header section */}
        <Heading title="Recent News" subtitle={"Explore Our Blogs"} />

        {/* Blog section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 gap-y-8 sm:gap-4 md:gap-7 rounded-lg">
          {/* Blog card */}
          {BlogData.map((data) => (
            <div
              data-aos="fade-up"
              data-aos-delay={data.aosDelay}
              key={data.id}
              className="bg-transparent rounded-2xl w-[305px] max-phone:w-full h-[200px] shadow-2xl cursor-pointer "
            >
              {/* image section */}
              <div className="overflow-hidden rounded-2xl h-[290px] flex justify-around  items-center">
                <img
                  src={data.image}
                  alt=""
                  className="w-[290px] h-[200px] object-cover rounded-2xl hover:scale-105 duration-500 mt-[-99px] shadow-xl"
                />
                </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
