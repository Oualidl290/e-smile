import React, { useState } from 'react';
import loginimage from '../../assets/logo/l.png';
import { Link } from 'react-router-dom';
import Footer from '../Footer/Footer';

const Login = ({ onLogin }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:8000/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                credentials: 'include',
                body: JSON.stringify({
                    email,
                    password,
                }),
            });

            if (response.ok) {
                const userData = await response.json();
                onLogin(userData);
                setError(null);
                window.location.href = '/';
            } else {
                const errorData = await response.json();
                setError(`${errorData.error || 'Password or Email Invalid !'}`);
            }
        } catch (err) {
            console.error('Login error:', err);
            setError('Error logging. try again.');
        }
    };

    return (
        <>
            <div className="container flex flex-row justify-center items-center w-full h-[800px]">
                <div className="login-container flex flex-col items-center justify-around w-[400px] h-[500px] bg-white rounded-xl shadow-2xl" data-aos="fade-up"
             >
                    <form onSubmit={handleSubmit} className="login-form flex flex-col items-center justify-around w-[400px] h-full bg-white rounded-xl">
                        <img src={loginimage} alt="" className='w-[80px] h-[80px]' />
                        <h1 className='font-abc text-xl rounded-7xl font-bold'>Login and Smile</h1>
                        {error && (
                            <div className="text-red-500 mb-2">{error}</div>
                        )}
                        <input
                            type="email"
                            className="form-control w-[350px] h-[50px] bg-slate-100 rounded-3xl placeholder-gray-400 pl-[20px]"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <input
                            type="password"
                            className="form-control w-[350px] h-[50px] bg-slate-100 rounded-3xl placeholder-gray-400 pl-[20px]"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        <Link to='/resetPassword' className='text-slate-500 font-mono font-xs'><span>forget password?</span></Link>
                        <button className="w-[200px] h-[50px] bg-violet-700 text-white font-abc text-xl font-bold rounded-xl hover:scale-105 duration-500" type="submit">
                            Sign In
                        </button>
                        <div className='flex flex-row items-start w-full justify-center mt-10'><span  className='text-slate-500 font-mono font-xs'>dont have account ? </span><Link to='/register'><p className='text-violet-700 font-abc font-md'>Sign Up</p></Link></div>
                    </form>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Login;
