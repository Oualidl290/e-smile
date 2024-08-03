import React, { useState, useEffect, useCallback } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaCartShopping, FaCaretDown } from 'react-icons/fa6';
import brand from '../../assets/logo/l.png';
import brandprofile from "../../assets/logo/profile.svg";
import { useSelector } from 'react-redux';
import debounce from 'lodash.debounce';

const Navbar = ({ isLoggedIn, user, handleLogout }) => {
    const [showProfileDropdown, setShowProfileDropdown] = useState(false);
    const navigate = useNavigate();
    const userName = user ? user.name : '';
    const [search, setSearch] = useState('');
    const [filteredList, setFilteredList] = useState([]);
    const { listItems } = useSelector((state) => state.list);

    // Function to handle search
    const handlesearch = (searchTerm) => {
        if (searchTerm) {
            const filtered = listItems.filter(product =>
                product.name.toLowerCase().includes(searchTerm.toLowerCase())
            );
            setFilteredList(filtered);
        } else {
            setFilteredList([]);
        }
    };

    // Debounce the search input to improve performance
    const debouncedSearch = useCallback(
        debounce((value) => handlesearch(value), 300),
        [listItems]
    );

    // Update the filtered list whenever the search term changes
    useEffect(() => {
        debouncedSearch(search);
    }, [search, debouncedSearch]);

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
            navigate('/profile');
        } else {
            navigate('/login');
        }
    };

    // Handle logout action
    const handleLogoutClick = async () => {
        try {
            const response = await fetch('http://localhost:8000/api/logout', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                credentials: 'include',
            });

            if (response.ok) {
                handleLogout();
                navigate('/');
            } else {
                console.error(`Failed to log out: ${response.status}`);
            }
        } catch (error) {
            console.error('Error logging out:', error);
        }
    };

    const addedItems = useSelector(state => state.list.addedItems);
    const [counting, setCounting] = useState(0);

    // Update the counting of added items in the cart
    useEffect(() => {
        setCounting(addedItems.length);
    }, [addedItems]);

    return (
        <div className="flex justify-center w-full items-center">
            <div className="fixed bg-white/70 dark:bg-gray-900/70 dark:text-white duration-200 top-1 z-50 w-5/6 rounded-2xl backdrop-blur-sm h-14">
                <div className="container flex justify-between items-center h-full py-1">
                    {/* Logo and Menu Links */}
                    <div>
                        <Link to="/">
                            <img src={brand} alt="Brand" className="w-[50px] h-[47px] max-phone:w-[50px] mr-10" />
                        </Link>
                    </div>

                    {/* Menu Links */}
                    <div className="lg:block font-abc font-bold text-md mr-56">
                        <ul className="flex items-center gap-10">
                            <li>
                                <Link to="/" className="text-gray-900 hover:text-black dark:hover:text-white duration-200">Home</Link>
                            </li>
                            <li>
                                <Link to="/products" className="text-gray-900 hover:text-black dark:hover:text-white duration-200">Products</Link>
                            </li>
                            <li>
                                <Link to="/graphics" className="text-gray-900 hover:text-black dark:hover:text-white duration-200">Graphics</Link>
                            </li>
                            {/* More Dropdown */}
                            <li className="relative group">
                                <span className="flex items-center gap-[2px] font-abc text-gray-900 dark:hover:text-white py-2">
                                    More
                                    <FaCaretDown className="group-hover:rotate-180 duration-1000" />
                                </span>
                                {/* Dropdown Menu */}
                                <div className="absolute z-[9999] invisible group-hover:visible w-[200px] rounded-md bg-white shadow-md dark:bg-gray-900 p-2 dark:text-white">
                                    <ul className="space-y-2">
                                        <li>
                                            <Link to="/3d" className="text-gray-500 dark:hover:text-white duration-200 inline-block w-full p-2 hover:bg-primary/20 rounded-md font-semibold">
                                                3D
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/photos" className="text-gray-500 dark:hover:text-white duration-200 inline-block w-full p-2 hover:bg-primary/20 rounded-md font-semibold">
                                                Photos
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/free-files" className="text-gray-500 dark:hover:text-white duration-200 inline-block w-full p-2 hover:bg-primary/20 rounded-md font-semibold">
                                                Free Files
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                        </ul>
                    </div>

                    {/* Navbar Right Section */}
                    <div className="flex items-center gap-4">
                        {/* Search Bar */}
                        <div className="relative">
                            <form className="form relative">
                                <button className="absolute left-2 -translate-y-1/2 top-1/2 p-1">
                                    <svg
                                        width="17"
                                        height="16"
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
                                    className="input bg-slate-100 rounded-xl px-10 py-2 border-none border-transparent focus:outline-none focus:border-blue-500 placeholder-gray-400 transition-all duration-300 shadow-sm focus:bg-white"
                                    placeholder="Search..."
                                    required=""
                                    type="text"
                                    value={search}
                                    onChange={(e) => setSearch(e.target.value)}
                                />
                            </form>
                            {/* Render filtered search results */}
                            {filteredList.length > 0 ? (
                                <ul className="absolute bg-white/100 backdrop-blur-3xl shadow-lg rounded-lg mt-2 w-full z-10">
                                    {filteredList.map((product, index) => (
                                        <Link to={`/product/${product.id}`} key={index} className="p-2 hover:bg-black/10 rounded-xl block">
                                            <li>
                                                {product.name.split(new RegExp(`(${search})`, 'gi')).map((part, i) => (
                                                    <span key={i} className={part.toLowerCase() === search.toLowerCase() ? "bg-yellow-200" : ""}>
                                                        {part}
                                                    </span>
                                                ))}
                                            </li>
                                        </Link>
                                    ))}
                                </ul>
                            ) : (
                                search && <div className="absolute bg-white/100 backdrop-blur-3xl shadow-lg rounded-lg mt-2 w-full z-10 p-2 text-gray-700">No results found</div>
                            )}
                        </div>
                        {/* Cart Icon */}
                        <Link to="/cart" className="relative p-3">
                            <FaCartShopping className="text-xl text-gray-600 dark:text-gray-400" />
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
                            <div className='cursor-pointer'>
                                <img src={brandprofile} alt="" className='w-[20px] h-[20px] mb-0.5 ml-5 ' />
                            </div>
                            {/* Profile Dropdown */}
                            {showProfileDropdown && (
                                <div className="absolute right-0 w-48 rounded-md bg-white shadow-lg dark:bg-gray-900 p-2 dark:text-white duration-500 ml-9">
                                    <p><strong>{userName}</strong></p>
                                    <hr className="my-2" />
                                    <button onClick={handleLogoutClick} className="text-red-500 hover:text-red-700">Logout</button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
