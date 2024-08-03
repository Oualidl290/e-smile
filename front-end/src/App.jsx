import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'; // Import Navigate for redirection
import Home from './components/Home/home';
import Navbar from './components/Navbar/Navbar';
import Product from './components/shop/products';
import Cart from './components/shop/cart';
import Login from './components/Auth/login';
import Register from './components/Auth/register';
import Profile from './components/Auth/profile'; // Import the Profile component
import Showproduct from './components/shop/showproduct';
import Frame from './components/shop/showproduct';
import MobileNavbar from './components/Navbar/MobileNavbar';
import useWindowSize from './components/Navbar/Window';

const App = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [user, setUser] = useState(null);

    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        const storedIsLoggedIn = localStorage.getItem('isLoggedIn');
    
        if (storedUser && storedIsLoggedIn) {
            setUser(JSON.parse(storedUser));
            setIsLoggedIn(JSON.parse(storedIsLoggedIn));
        }
    
        const fetchUserData = async () => {
            try {
                const response = await fetch('http://localhost:8000/api/user', {
                    headers: { 'Content-Type': 'application/json' },
                    credentials: 'include',
                });
    
                if (response.ok) {
                    const data = await response.json();
                    setUser(data);
                    setIsLoggedIn(true);
                    // Save user state to localStorage
                    localStorage.setItem('user', JSON.stringify(data));
                    localStorage.setItem('isLoggedIn', JSON.stringify(true));
                } else {
                    setIsLoggedIn(false);
                    localStorage.setItem('isLoggedIn', JSON.stringify(false));
                }
            } catch (error) {
                console.error('Error fetching user data:', error);
                setIsLoggedIn(false);
                localStorage.setItem('isLoggedIn', JSON.stringify(false));
            }
        };
    
        fetchUserData();
    }, []);
    
    const handleLogin = (userData) => {
        setUser(userData);
        setIsLoggedIn(true);
        // Save user state to localStorage
        localStorage.setItem('user', JSON.stringify(userData));
        localStorage.setItem('isLoggedIn', JSON.stringify(true));
    };
    
    const handleLogout = () => {
        setUser(null);
        setIsLoggedIn(false);
        // Clear user state from localStorage
        localStorage.removeItem('user');
        localStorage.setItem('isLoggedIn', JSON.stringify(false));
    };
    const { width } = useWindowSize();
    

    return (
        <BrowserRouter>
            <div className="bg-slate-200 dark:bg-gray-900 dark:text-white duration-200 overflow-hidden subpixel-antialiased">
                {/* Pass authentication state and handlers to Navbar */}
                <div>
      {width > 500 ? (
        <Navbar
          isLoggedIn={isLoggedIn}
          user={user}
          handleLogout={handleLogout}
        />
      ) : (
        <MobileNavbar
          isLoggedIn={isLoggedIn}
          user={user}
          handleLogout={handleLogout}
        />
      )}
    </div>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/products" element={<Product />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/login" element={<Login onLogin={handleLogin} />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/product/:id" element={<Frame />} />
                    
                    <Route
                        path="/profile"
                        element={user ? <Profile user={user} /> : <Navigate to="/profile" />}
                    />
                </Routes>
            </div>
        </BrowserRouter>
    );
};

export default App;