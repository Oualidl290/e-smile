import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeItem } from '../Features/slice';
import Footer from '../Footer/Footer';
import { Link } from 'react-router-dom';
import PayPalCheckoutButton from './paypalbutton';

export default function Cart() {
  const addedItems = useSelector(state => state.list.addedItems);
  const dispatch = useDispatch();
  const [downloadLink, setDownloadLink] = useState(null);

  useEffect(() => {
    // Check if there is a download link in the session storage
    const link = sessionStorage.getItem('downloadLink');
    if (link) {
      setDownloadLink(link);
      // Remove it from session storage after fetching
      sessionStorage.removeItem('downloadLink');
    }
  }, []);

  return (
    <>
      <div className='w-full h-full mt-20 flex justify-around items-center'>
        {addedItems.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-50 w-full text-aqua font-gill-sans font-bold tracking-widest text-2xl max-phone:text-lg">
            <p>Cart Is Empty!</p>
            <Link to="../">
              <button className="w-[200px] h-[50px] bg-white rounded-lg shadow-2xl text-lg items-center justify-center text-red-500">
                Back To Shop
              </button>
            </Link>
          </div>
        ) : (
          <div className='flex flex-col justify-around items-center w-[784px] max-phone:w-[400px] rounded-xl bg-white/50 gap-8 p-4 divide-y'>
            {addedItems.map((element) => (
              <div className='flex flex-col justify-around items-center w-full h-full' key={element.id}>
                <div className='flex flex-row justify-around max-phone:justify-between items-center w-full pt-4'>
                  <input type="checkbox" className='outline-none border-none w-6 h-6 rounded-lg cursor-pointer bg-transparent max-phone:invisible'/>
                  <div className='w-[85px] max-phone:w-[100px] h-[78px] max-phone:h-[50px] bg-slate-200 rounded-xl max-phone:mr-5'><img className='w-full h-full rounded-xl' src={element.image} alt={element.name} /></div>
                  <span className='truncate w-[240px]'>{element.name}</span>
                  <span className='text-2xl max-phone:text-xs text-red-700 max-phone:invisible'>$  {element.price}</span>
                  <PayPalCheckoutButton />
                  <button onClick={() => dispatch(removeItem(element.id))} className=' max-phone:ml-2 w-[73px] h-[50px] max-phone:w-[28px] max-phone:h-[28px]  outline outline-1 outline-offset-1 outline-violet-700 flex flex-row justify-center items-center rounded-2xl mr-2'>
                    <svg width="28px" height="28px" viewBox="-2.32 -2.32 30.64 30.64" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="1"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="0.1"></g><g id="SVGRepo_iconCarrier"></g> 
                      <path d="M10 12V17" stroke="#2806F4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> 
                      <path d="M14 12V17" stroke="#2806F4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> 
                      <path d="M4 7H20" stroke="#2806F4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> 
                      <path d="M6 10V18C6 19.6569 7.34315 21 9 21H15C16.6569 21 18 19.6569 18 18V10" stroke="#2806F4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> 
                      <path d="M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V7H9V5Z" stroke="#2806F4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> 
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div> 
        )}
      </div>
      {downloadLink && (
        <div className='w-full h-full flex justify-center items-center mt-4'>
          <a href={downloadLink} className='bg-blue-500 text-white py-2 px-4 rounded'>Download your product</a>
        </div>
      )}
      <Footer />
    </>
  );
}
