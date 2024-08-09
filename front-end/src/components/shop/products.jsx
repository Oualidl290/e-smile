import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchProductsAsync,
  fetchCategoriesAsync,
  addItem,
} from "../Features/slice";
import Footer from "../Footer/Footer";
import Partners from "../Partners/Partners";
import CustomAlert from "./addToCart";
import { Link } from "react-router-dom";

const Product = () => {
  const dispatch = useDispatch();
  const { listItems, categories } = useSelector((state) => state.list);

  const [selectedCategoryId, setSelectedCategoryId] = useState("Filter");
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    // Fetch listItems and categories from the API
    dispatch(fetchProductsAsync());
    dispatch(fetchCategoriesAsync());
  }, [dispatch]);

  useEffect(() => {
    if (selectedCategoryId === "" || selectedCategoryId === "Filter") {
      setFilteredProducts(listItems);
    } else {
      setFilteredProducts(
        listItems.filter(
          (product) => product.category_id === parseInt(selectedCategoryId, 10)
        )
      );
    }
  }, [selectedCategoryId, listItems]);

  const handleCategoryChange = (e) => {
    setSelectedCategoryId(e.target.value);
  };

  const handleAddItem = (product) => {
    dispatch(addItem(product));
    setIsAlertOpen(true);
  };

  const [isAlertOpen, setIsAlertOpen] = useState(false);

  const handleCloseAlert = () => {
    setIsAlertOpen(false);
  };

  const handleContinueShopping = () => {
    handleCloseAlert();
    // You can add any other code here if needed
  };

  const handleGoToCart = () => {
    // Redirect to the cart page (you can use React Router's useHistory for navigation)
    window.location.href = "/cart";
  };

  return (
    <div className="container font-abc">
      <>
        <div className="mt-20 w-full flex flex-col justify-around items-center">
          <div className="flex flex-row justify-start max-phone:justify-center items-start max-phone:items-center mt-1 w-[1255px] mb-5 mr-16 max-phone:mr-0">
            <select
              name="category"
              id="category"
              className="cursor-pointer outline outline-none focus:outline-none w-[200px] h-14 bg-white/80 border-none text-black shadow-sm text-xl flex items-center justify-center text-center rounded-2xl"
              onChange={handleCategoryChange}
              value={selectedCategoryId}
            >
              <option value="Filter">All</option>
              {categories.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
            </select>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 place-items-center w-full items-center">
            {filteredProducts.map((product) => (
              <div key={product.id}>
                <div className="flex flex-col px-1.5 pb-4 rounded-xl shadow-sm bg-white bg-opacity-90 max-w-[378px]">
                  <img
                    loading="lazy"
                    srcSet={product.image}
                    className="mt-1.5 w-full aspect-[1.5] rounded-md"
                  />
                  <div className="mt-7 text-xl text-black text-opacity-70 ml-5 line-clamp-2">
                    {product.name}﻿
                  </div>
                  <div className=" text-3xl text-indigo-700 text-opacity-90 ml-6 flex flex-row justify-around w-[80%] items-center">
                    <p className="text-2xl text-black ml-[-10px]">USD</p>
                    {product.price}
                    <div className="text-3xl text-lime-600 max-w-full flex flex-row items-center ml-[10px]">
                      <span className="text-xs text-red-600 line-through">
                        USD 105.36
                      </span>
                      <span className="text-base text-lime-600">(40% off)</span>
                    </div>
                  </div>
                  <div className="flex gap-5 justify-between mt-11 w-full">
                    <div className="flex gap-2 m-4">
                      <Link to="/product/:id">
                        <button className=" hover:scale-105 duration-500 w-[70px] h-[61px] bg-slate-300 rounded-3xl flex flex-row justify-center items-center">
                          <svg
                            width="26"
                            height="18"
                            viewBox="0 0 26 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M12.9999 16.9999C15.5772 16.9999 17.6666 14.8197 17.6666 12.1303C17.6666 9.44092 15.5772 7.26074 12.9999 7.26074C10.4226 7.26074 8.33325 9.44092 8.33325 12.1303C8.33325 14.8197 10.4226 16.9999 12.9999 16.9999Z"
                              stroke="url(#paint0_linear_2063_36)"
                              strokeWidth="1.5"
                            />
                            <path
                              d="M25 12.1304C25 12.1304 23.6667 1 13 1C2.33333 1 1 12.1304 1 12.1304"
                              stroke="url(#paint1_linear_2063_36)"
                              strokeWidth="1.5"
                            />
                            <defs>
                              <linearGradient
                                id="paint0_linear_2063_36"
                                x1="12.9999"
                                y1="7.26074"
                                x2="12.9999"
                                y2="16.9999"
                                gradientUnits="userSpaceOnUse"
                              >
                                <stop offset="0.37" stopColor="#232BF8" />
                                <stop offset="1" stopColor="#232BF8" />
                              </linearGradient>
                              <linearGradient
                                id="paint1_linear_2063_36"
                                x1="13"
                                y1="1"
                                x2="13"
                                y2="12.1304"
                                gradientUnits="userSpaceOnUse"
                              >
                                <stop offset="0.37" stopColor="#232BF8" />
                                <stop offset="1" stopColor="#232BF8" />
                              </linearGradient>
                            </defs>
                          </svg>
                        </button>
                      </Link>
                      <button className=" hover:scale-105 duration-500 ml-1 w-[70px] h-[61px] bg-slate-300 rounded-3xl flex flex-row justify-center items-center">
                        <svg
                          width="20"
                          height="23"
                          viewBox="0 0 20 23"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M19 5.05142V19.8503C19 21.7392 17.6629 22.5338 16.03 21.6219L10.9772 18.769C10.4372 18.4694 9.56284 18.4694 9.02284 18.769L3.97 21.6219C2.33714 22.5338 1 21.7392 1 19.8503V5.05142C1 2.82378 2.79999 1 4.99856 1H15.0014C17.2 1 19 2.82378 19 5.05142Z"
                            stroke="url(#paint0_linear_2063_30)"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <defs>
                            <linearGradient
                              id="paint0_linear_2063_30"
                              x1="10"
                              y1="1"
                              x2="10"
                              y2="22"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop offset="0.495" stopColor="#232BF8" />
                              <stop offset="1" stopColor="#232BF8" />
                            </linearGradient>
                          </defs>
                        </svg>
                      </button>
                      <button
                        onClick={() => handleAddItem(product)}
                        className=" hover:scale-105 duration-500 ml-1 w-[70px] h-[61px] bg-slate-300 rounded-3xl flex flex-row justify-center items-center"
                      >
                        <svg
                          width="30"
                          height="30"
                          viewBox="0 0 30 30"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clipPath="url(#clip0_2072_26)">
                            <path
                              d="M2.08841 18.5113C0.989938 13.2956 0.440703 10.688 1.81757 8.95513C3.19445 7.22229 5.81574 7.22229 11.0583 7.22229H18.9417C24.1843 7.22229 26.8055 7.22229 28.1825 8.95513C29.5593 10.688 29.0101 13.2956 27.9115 18.5113L27.2564 21.6224C26.5118 25.1574 26.1395 26.925 24.878 27.9625C23.6165 29.0001 21.8399 29.0001 18.2864 29.0001H11.7136C8.16014 29.0001 6.38343 29.0001 5.12196 27.9625C3.86049 26.925 3.48821 25.1574 2.74367 21.6224L2.08841 18.5113Z"
                              stroke="url(#paint0_linear_2072_26)"
                            />
                            <path
                              d="M1.2395 13.4445H28.7601"
                              stroke="url(#paint1_linear_2072_26)"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M11.942 18.1111H18.0577"
                              stroke="url(#paint2_linear_2072_26)"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M24.1734 10.3333L19.5867 1"
                              stroke="url(#paint3_linear_2072_26)"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M5.82642 10.3333L10.4132 1"
                              stroke="url(#paint4_linear_2072_26)"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </g>
                          <defs>
                            <linearGradient
                              id="paint0_linear_2072_26"
                              x1="15"
                              y1="7.22229"
                              x2="15"
                              y2="29.0001"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop offset="0.54" stopColor="#232BF8" />
                              <stop offset="1" stopColor="#232BF8" />
                            </linearGradient>
                            <linearGradient
                              id="paint1_linear_2072_26"
                              x1="14.9998"
                              y1="13.4445"
                              x2="14.9998"
                              y2="14.4445"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop offset="0.54" stopColor="#232BF8" />
                              <stop offset="1" stopColor="#232BF8" />
                            </linearGradient>
                            <linearGradient
                              id="paint2_linear_2072_26"
                              x1="14.9999"
                              y1="18.1111"
                              x2="14.9999"
                              y2="19.1111"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop offset="0.54" stopColor="#232BF8" />
                              <stop offset="1" stopColor="#232BF8" />
                            </linearGradient>
                            <linearGradient
                              id="paint3_linear_2072_26"
                              x1="2.23265"
                              y1="1"
                              x2="24.9664"
                              y2="19.6145"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop offset="0.54" stopColor="#232BF8" />
                              <stop offset="1" stopColor="#232BF8" />
                            </linearGradient>
                            <linearGradient
                              id="paint4_linear_2072_26"
                              x1="5.82642"
                              y1="1"
                              x2="10.4132"
                              y2="10.3333"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop offset="0.54" stopColor="#232BF8" />
                              <stop offset="1" stopColor="#232BF8" />
                            </linearGradient>
                            <clipPath id="clip0_2072_26">
                              <rect width="30" height="30" fill="#232BF8" />
                            </clipPath>
                          </defs>
                        </svg>
                      </button>
                      <button className=" hover:scale-105 duration-500 ml-1 w-[70px] h-[61px] bg-slate-300 rounded-3xl flex flex-row justify-center items-center">
                        <svg
                          width="20"
                          height="24"
                          viewBox="0 0 20 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M1 23H19M10 1V18.1111M10 18.1111L17.5 12M10 18.1111L2.5 12"
                            stroke="url(#paint0_linear_2063_26)"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <defs>
                            <linearGradient
                              id="paint0_linear_2063_26"
                              x1="10"
                              y1="1"
                              x2="10"
                              y2="23"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop offset="0.38" stopColor="#232BF8" />
                              <stop offset="1" stopColor="#232BF8" />
                            </linearGradient>
                          </defs>
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <Partners />
        <Footer />
        <CustomAlert
          isOpen={isAlertOpen}
          onRequestClose={handleCloseAlert}
          onContinue={handleContinueShopping}
          onGoToCart={handleGoToCart}
        />
      </>
    </div>
  );
};

export default Product;
