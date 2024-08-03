import React from "react";
import { FaMobileAlt } from "react-icons/fa";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaWhatsapp,
} from "react-icons/fa6";
import brand from "../../assets/logo/l.png";

const FooterLinks = [
  {
    title: "Home",
    link: "/#",
  },
  {
    title: "Photos",
    link: "/#about",
  },
  {
    title: "Graphics",
    link: "/#contact",
  },
  {
    title: "Ui/Ux",
    link: "/#blog",
  },
];
const FooterLinks2 = [
  {
    title: "About",
    link: "/#",
  },
  {
    title: "Contact",
    link: "/#about",
  },
  {
    title: "Free Designs",
    link: "/#contact",
  },
  {
    title: "Blog",
    link: "/#blog",
  },
];

const Footer = () => {
  return (
    <div className="dark:bg-gray-950">
      <div className="container">
        <div className="grid md:grid-cols-3 pb-20 pt-5">
          {/* company details */}
          <div className="py-8 px-4">
            <a
              href="#"
              className="text-primary font-semibold tracking-widest text-2xl uppercase sm:text-3xl
"
            >
              <img src={brand} alt="logo" className="w-[70px] h-[67px] mr-4"/>
              <h1>E-SMILE</h1>
            </a>
            <p className="text-gray-600 dark:text-white/70  lg:pr-24 pt-3">
             E-Smile is a global online marketplace, where people come together to make,
              sell, buy, and collect unique items.
            </p>
            <p className="text-gray-500 mt-4">
              Made By Oualid with &#169; Hovers Elements
            </p>
            <a
              href="#"
              target="_blank"
              className="inline-block bg-violet-700 text-white py-2 px-4 mt-4 text-lg rounded-lg"
            >
              Mobile App
            </a>
          </div>

          {/* Footer links */}
          <div className="col-span-2 grid grid-cols-2 sm:grid-cols-3 md:pl-10">
            <div className="py-8 px-4">
              <h1 className="text-xl font-bold sm:text-left mb-3">
                Important Links
              </h1>
              <ul className="space-y-3">
                {FooterLinks.map((data, index) => (
                  <li key={index}>
                    <a
                      href={data.link}
                      className="text-gray-600 dark:text-gray-400 hover:dark:text-white hover:text-black duration-300"
                    >
                      {data.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            {/* second col links */}
            <div className="py-8 px-4">
              <h1 className="text-xl font-bold sm:text-left mb-3">
                Other Links
              </h1>
              <ul className="space-y-3">
                {FooterLinks2.map((data, index) => (
                  <li key={index}>
                    <a
                      href={data.link}
                      className="text-gray-600 dark:text-gray-400 hover:dark:text-white hover:text-black duration-300"
                    >
                      {data.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company Address */}
            <div className="py-8 px-4 col-span-2 sm:col-auto">
              <h1 className="text-xl font-bold sm:text-left mb-3">Address</h1>
              <div>
                <div className="flex items-center gap-3">
                  <FaLocationArrow />
                  <p>Morocco | Fes</p>
                </div>
                <div className="flex items-center gap-3 mt-6">
                  <FaMobileAlt />
                  <p>+212 616275694</p>
                </div>

                {/* social links */}
                <div className="flex items-center gap-3 mt-6">
                  <a href="https://www.instagram.com/xdev_1290/">
                    <FaInstagram className="text-3xl hover:text-primary duration-300" />
                  </a>
                  <a href="#">
                    <FaLinkedin className="text-3xl hover:text-primary duration-200" />
                  </a>
                  <a href="#">
                    <FaWhatsapp className="text-3xl hover:text-primary duration-200" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
