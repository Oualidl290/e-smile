import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaCartShopping, FaCaretDown } from "react-icons/fa6";
import brand from "../../assets/logo/l.png";
import brandprofile from "../../assets/logo/profile.svg";
import { useSelector, useDispatch } from "react-redux";

const MobileNavbar = ({ isLoggedIn, user, handleLogout }) => {
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);
  const navigate = useNavigate(); // Use navigate hook for redirection
  const userName = user ? user.name : "";
  const userEmail = user ? user.email : "";
  const [search, setSearch] = useState("");
  const [filteredList, setFilteredList] = useState([]);
  const { listItems, categories, loading, error } = useSelector(
    (state) => state.list
  );

  const handlesearch = (searchTerm) => {
    if (searchTerm) {
      const filtered = listItems.filter((product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredList(filtered);
    } else {
      setFilteredList([]);
    }
  };

  // Update the filtered list whenever the search term changes
  useEffect(() => {
    handlesearch(search);
  }, [search, listItems]);

  // Handle hover event on profile icon
  const handleMouseEnter = () => {
    if (isLoggedIn) {
      setShowProfileDropdown(true);
    }
  };

  // Handle mouse leave event
  const handleMouseLeave = () => {
    if (isLoggedIn) {
      setShowProfileDropdown(false);
    }
  };

  // Handle profile icon click event
  const handleProfileClick = () => {
    if (isLoggedIn) {
      // Redirect to the user's profile page
      navigate("/profile");
    } else {
      // Redirect to the getstarted page if not logged in
      navigate("./login");
    }
  };

  // Handle logout action
  const handleLogoutClick = async () => {
    try {
      const response = await fetch("http://localhost:8000/api/logout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
      });

      if (response.ok) {
        // Perform necessary cleanup
        handleLogout();
        // Redirect to home page
        navigate("/");
      } else {
        console.error(`Failed to log out: ${response.status}`);
      }
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  const addedItems = useSelector((state) => state.list.addedItems);
  const dispatch = useDispatch();

  const [counting, setCounting] = useState(0);

  useEffect(() => {
    setCounting(addedItems.length);
  }, [addedItems]);
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex justify-center w-full items-center">
      <div className="fixed bg-white/70 dark:bg-gray-900/70 dark:text-white duration-200 top-1 z-40 w-[98%] rounded-2xl backdrop-blur-sm h-14">
        <div className="container flex justify-between items-center h-full py-1 max-tablet:flex felx-col">
          {/* Logo and Menu Links */}
          <div className="">
            <Link to="/">
              <img
                src={brand}
                alt="Brand"
                className="w-[50px] h-[47px]  max-phone:w-[50px] mr-10"
              />
            </Link>
          </div>

          {/* Navbar Right Section */}
          <div className="flex items-center justify-around w-full">
            {/* Search Bar */}
            <div className="">
              <form className="form relative w-32">
                <button className="absolute left-0 -translate-y-1/2 top-1/2 p-1">
                  <svg
                    width="14"
                    height="14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    role="img"
                    aria-labelledby="search"
                    className="w-5 h-5 text-gray-700"
                  >
                    <path
                      d="M7.667 12.667A5.333 5.333 0 107.667 2a5.333 5.333 0 000 10.667zM14.334 14l-2.9-2.9"
                      stroke="currentColor"
                      strokeWidth="1.333"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </button>
                <input
                  className="input bg-slate-100 rounded-xl px-10 py-2 border-none border-transparent focus:outline-none focus:border-blue-500 placeholder-gray-400 transition-all duration-300 shadow-sm focus:bg-white w-full text-[10px]"
                  placeholder="search"
                  required=""
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </form>
              {/* Render filtered search results */}
              {filteredList.length > 0 &&
                "noresults!" &&
                filteredList.length > 0 && (
                  <ul className="absolute bg-white/100 backdrop-blur-3xl shadow-lg rounded-lg mt-2 px-16 z-10">
                    {filteredList.map((product, index) => (
                      <Link>
                        <li
                          key={index}
                          className="p-2 hover:bg-black/10 rounded-xl"
                        >
                          {product.name}
                        </li>
                      </Link>
                    ))}
                  </ul>
                )}
            </div>
            {/* Cart Icon */}
            <Link to="/cart" className="relative p-3">
              <FaCartShopping className="text-lg text-gray-600 dark:text-gray-400" />
              {/* Cart badge */}
              <div className="absolute top-0 right-0 w-4 h-4 bg-red-500 text-white rounded-full text-xs flex items-center justify-center">
                {counting}
              </div>
            </Link>

            {/* Profile Icon */}
            <div
              className="relative h-full"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              onClick={handleProfileClick}
            >
              <div className="cursor-pointer">
                <img
                  src={brandprofile}
                  alt=""
                  className="w-[16px] h-[16px] mb-0.5 "
                />
              </div>
            </div>
            {/* menu  */}
            <div className="relative lg:hidden top-[2px]">
              <button
                onClick={handleToggle}
                className="text-black dark:text-white"
              >
                {isOpen ? (
                  // Close Icon
                  <svg
                    viewBox="0 0 32 32"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#545454"
                    className="w-7 h-7"
                  >
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      <line
                        x1="7"
                        x2="25"
                        y1="7"
                        y2="25"
                        stroke="#0C0310"
                        strokeWidth="2"
                        strokeLinecap="round"
                      ></line>
                      <line
                        x1="7"
                        x2="25"
                        y1="25"
                        y2="7"
                        stroke="#0C0310"
                        strokeWidth="2"
                        strokeLinecap="round"
                      ></line>
                    </g>
                  </svg>
                ) : (
                  // Hamburger Icon
                  <svg
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#545454"
                    className="w-7 h-7"
                  >
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      <line
                        x1="5"
                        y1="7"
                        x2="19"
                        y2="7"
                        stroke="#0C0310"
                        strokeWidth="2"
                        strokeLinecap="round"
                      ></line>
                      <line
                        x1="5"
                        y1="12"
                        x2="19"
                        y2="12"
                        stroke="#0C0310"
                        strokeWidth="2"
                        strokeLinecap="round"
                      ></line>
                      <line
                        x1="5"
                        y1="17"
                        x2="19"
                        y2="17"
                        stroke="#0C0310"
                        strokeWidth="2"
                        strokeLinecap="round"
                      ></line>
                    </g>
                  </svg>
                )}
              </button>

              {isOpen && (
                <div className="flex flex-row justify-center items-center w-full">
                  <div className="fixed top-16 left-0   bg-white/90 dark:bg-gray-900 p-2 shadow-md rounded-3xl w-[300px] ml-8">
                    <ul className="space-y-2 text-gray-900 dark:text-white">
                      <li>
                        <Link
                          to="/"
                          onClick={handleToggle}
                          className="block p-2"
                        >
                          Home
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/products"
                          onClick={handleToggle}
                          className="block p-2"
                        >
                          Products
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/graphics"
                          onClick={handleToggle}
                          className="block p-2"
                        >
                          Graphics
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/3d"
                          onClick={handleToggle}
                          className="block p-2"
                        >
                          3D
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/photos"
                          onClick={handleToggle}
                          className="block p-2"
                        >
                          Photos
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/free-files"
                          onClick={handleToggle}
                          className="block p-2"
                        >
                          Free Files
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileNavbar;
