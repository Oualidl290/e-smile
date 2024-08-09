import React from "react";

const Heading = ({ title, subtitle }) => {
  return (
    <div className="text-center mb-10 max-w-full mx-auto space-y-2">
      <h1 className="text-3xl font-bold lg:text-2xl">{title}</h1>
      <p className="text-xs text-gray-400">{subtitle}</p>
    </div>
  );
};

export default Heading;
