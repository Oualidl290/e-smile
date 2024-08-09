import React from "react";

const Button = ({ text, bgColor, textColor, handler = () => {} }) => {
  return (
    <button
      onClick={handler}
      className={`${bgColor} ${textColor} cursor-pointer hover:scale-125 duration-500 py-3 px-12 rounded-xl relative z-10 mt-5 shadow-xl outline outline-violet-700  outline-1 text-violet-700`}
    >
      {text}
    </button>
  );
};

export default Button;
