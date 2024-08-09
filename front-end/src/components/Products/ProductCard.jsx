import React, { useState, useEffect } from "react";
import axios from "axios";
import useWindowSize from '../Navbar/Window';

const ProductCard = ({ data }) => {
  const [products, setProducts] = useState([]);
  const { width } = useWindowSize();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8000/api/products");
        setProducts(response.data.results);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  const renderProduct = (product) => (
    <div data-aos="fade-up" key={product.id} className="w-full max-w-[348px] max-phone:w-[160px] max-phone:ml-5">
      <div className="flex flex-col px-1.5 pb-4 rounded-xl shadow-sm bg-white bg-opacity-90">
        <img
          loading="lazy"
          src={product.image}
          className="mt-1.5 w-full aspect-[1.5] rounded-md max-phone:line-clamp-1"
          alt={product.name}
        />
        <div className="mt-7 max-phone:mt-2 text-xl text-black text-opacity-70 ml-6 max-phone:ml-2 max-phone:line-clamp-2 line-clamp-2 max-phone:text-sm">
          {product.description}
        </div>
        <div className="text-3xl text-indigo-700 text-opacity-90 ml-6 flex flex-row justify-around w-[80%] items-center">
          <p className="text-2xl text-black ml-[-10px] max-phone:text-lg">USD</p>
          <p className="max-phone:text-2xl">{product.price}</p>
          <div className="text-3xl text-lime-600 max-w-[134px] flex flex-row items-center ml-[10px]">
            <span className="text-xs text-red-600 line-through max-phone:text-[10px] max-phone:line-clamp-1">USD 105.36</span>
            <span className="text-base text-lime-600 max-phone:line-clamp-1">(40% off)</span>
          </div>
        </div>
        <div className="flex gap-5 justify-between max-phone:gap-0 max-phone:justify-around mt-11 max-phone:mt-2 w-full">
          <div className="flex gap-2 max-phone:gap-2">
            <button className="hover:scale-105 duration-500 ml-[20px] max-phone:ml-0 w-[70px] max-phone:w-[38px] h-[61px] max-phone:h-[38px] max-phone:rounded-xl bg-slate-300 rounded-3xl flex flex-row justify-center items-center">
              <svg width="20" height="14" viewBox="0 0 26 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.9999 16.9999C15.5772 16.9999 17.6666 14.8197 17.6666 12.1303C17.6666 9.44092 15.5772 7.26074 12.9999 7.26074C10.4226 7.26074 8.33325 9.44092 8.33325 12.1303C8.33325 14.8197 10.4226 16.9999 12.9999 16.9999Z" stroke="#232BF8" strokeWidth="1.5" />
                <path d="M25 12.1304C25 12.1304 23.6667 1 13 1C2.33333 1 1 12.1304 1 12.1304" stroke="#232BF8" strokeWidth="1.5" />
              </svg>
            </button>
            <button className="hover:scale-105 duration-500 ml-1 w-[70px] max-phone:w-[40px] max-phone:h-[38px] max-phone:rounded-xl h-[61px] bg-slate-300 rounded-3xl flex flex-row justify-center items-center">
              <svg width="14" height="20" viewBox="0 0 20 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19 5.05142V19.8503C19 21.7392 17.6629 22.5338 16.03 21.6219L10.9772 18.769C10.4372 18.4694 9.56284 18.4694 9.02284 18.769L3.97 21.6219C2.33714 22.5338 1 21.7392 1 19.8503V5.05142C1 2.82378 2.79999 1 4.99856 1H15.0014C17.2 1 19 2.82378 19 5.05142Z" stroke="#232BF8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <button className="hover:scale-105 duration-500 w-[140px] max-phone:w-[40px] h-[61px] max-phone:h-[38px] bg-slate-300 rounded-3xl max-phone:rounded-xl ml-4 max-phone:ml-0 flex flex-row justify-center items-center">
              <svg width="14" height="20" viewBox="0 0 20 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 23H19M10 1V18.1111M10 18.1111L17.5 12M10 18.1111L2.5 12" stroke="#232BF8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="flex flex-nowrap max-phone:flex-wrap gap-4">
      {width > 500
        ? products.slice(0, 4).map(renderProduct)
        : products.slice(0, 4).map(renderProduct)}
    </div>
  );
};

export default ProductCard;
