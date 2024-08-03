import React from 'react';
import Modal from 'react-modal';
const CustomAlert = ({ isOpen, onRequestClose, onContinue, onGoToCart }) => {
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            style={{
                overlay: {
                    backgroundColor: 'rgba(0, 0, 0, 0.7)',
                },
                content: {
                    position: 'fixed',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: '380px',
                    padding: '20px',
                    borderRadius: '10px',
                    margin: 'auto',
                },
            }}            ariaHideApp={false}
            className="bg-white rounded-lg shadow-xl p-6"
        >
            <span className='flex justify-center items-center'><svg width="50px" height="50px" viewBox="-97.28 -97.28 706.56 706.56" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#ffffff" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>success-filled</title> <g id="Page-1" stroke-width="0.00512" fill="none" fill-rule="evenodd"> <g id="add-copy-2" fill="#65e70d" transform="translate(42.666667, 42.666667)"> <path d="M213.333333,3.55271368e-14 C95.51296,3.55271368e-14 3.55271368e-14,95.51296 3.55271368e-14,213.333333 C3.55271368e-14,331.153707 95.51296,426.666667 213.333333,426.666667 C331.153707,426.666667 426.666667,331.153707 426.666667,213.333333 C426.666667,95.51296 331.153707,3.55271368e-14 213.333333,3.55271368e-14 Z M293.669333,137.114453 L323.835947,167.281067 L192,299.66912 L112.916693,220.585813 L143.083307,190.4192 L192,239.335893 L293.669333,137.114453 Z" id="Shape"> </path> </g> </g> </g></svg></span>
            <h2 className="text-2xl font-bold mb-4 text-green-500 stroke-yellow-400 items-center flex justify-center">Addition Success !</h2>
            <div className="flex justify-around mr-4">
                <button
                    onClick={onContinue}
                    className="w-[120px] h-[50px] outline outline-violet-700 outline-1 font-abc text-violet-700 text-xl rounded-2xl ml-8 font-bold"
                >Back
                </button>
                <button
                    onClick={onGoToCart}
                    className="w-[120px] h-[50px] outline outline-violet-700 outline-1 font-abc text-violet-700 text-xl rounded-2xl ml-8 font-bold"
                >
                    Cart
                </button>
            </div>
        </Modal>
    );
};

export default CustomAlert;
