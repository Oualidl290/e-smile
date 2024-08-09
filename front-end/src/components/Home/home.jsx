import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import axios from "axios";
import Hero from '../Heros/hero';
import Category from "../Category/Category";
import Category2 from "../Category/Category2";
import Services from "../Services/Services";
import Banner from "../Banner/Banner";
import Products from "../Products/Products";
import Blogs from "../Blogs/Blogs";
import Partners from "../Partners/Partners";
import Footer from "../Footer/Footer";

const Home = () => {
  const [product1, setProduct1] = useState(null);
  const [product2, setProduct2] = useState(null);

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
      offset: 100,
    });

    const fetchRandomProducts = async () => {
      try {
        const response1 = await axios.get("http://127.0.0.1:8000/api/random");
        setProduct1(response1.data.product);

        const response2 = await axios.get("http://127.0.0.1:8000/api/random");
        setProduct2(response2.data.product);
      } catch (error) {
        console.error("Failed to fetch random products:", error);
      }
    };

    fetchRandomProducts();
  }, []);

  return (
    <>
      <div className="bg-slate-200 dark:bg-gray-900 dark:text-white duration-200 overflow-hidden">
        <Hero />
        <Category />
        <Category2 />
        <Services />
        {product1 && <Banner data={product1} />}
        <Products />
        {product2 && <Banner data={product2} />}
        <Blogs />
        <Partners />
        <Footer />
      </div>
    </>
  );
};

export default Home;
