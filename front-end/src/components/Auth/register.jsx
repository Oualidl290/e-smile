import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import loginimage from '../../assets/logo/l.png';
import { Link } from 'react-router-dom';
import Footer from '../Footer/Footer';

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:8000/api/register', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    name,
                    email,
                    password,
                }),
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            setName('');
            setEmail('');
            setPassword('');
            navigate('/login');
        } catch (err) {
            console.error('Registration error:', err);
            setError('An error occurred while registering. Please try again.');
        }
    };

    return (
        <>
            <div className="container flex flex-row justify-center items-center w-full h-[800px]">
                <div className="login-container flex flex-col items-center justify-around w-[500px] h-[500px] bg-white rounded-xl shadow-2xl" data-aos="fade-up">
                    <form onSubmit={handleSubmit} className="login-form flex flex-col items-center justify-around w-[480px] h-full bg-white">
                        <img src={loginimage} alt="" className='w-[80px] h-[80px]' />
                        <h1 className='font-abc text-xl rounded-7xl'>Join Smile Comunity</h1>
                        {error && (
                            <div className="text-red-500 mb-2">{error}</div>
                        )}
                        <input
                            type="text"
                            className="form-control w-[380px] h-[50px] bg-slate-100 rounded-3xl placeholder-gray-400 pl-[20px]"
                            placeholder="UserName"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                        <input
                            type="email"
                            className="form-control w-[380px] h-[50px] bg-slate-100 rounded-3xl placeholder-gray-400 pl-[20px]"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <input
                            type="password"
                            className="form-control w-[380px] h-[50px] bg-slate-100 rounded-3xl placeholder-gray-400 pl-[20px]"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        <button className="w-[280px] h-[60px] bg-violet-700 text-white font-abc text-xl font-bold rounded-xl" type="submit">
                            Sign Up
                        </button>
                        <Link to='/login'><span className='text-red-800 font-mono mb-5'>Alredy have an account ?</span></Link>
                    </form>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Register;
