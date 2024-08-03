import React from "react";
import Heading from "../Shared/Heading";
import ProductCard from "./ProductCard";

const Products = () => {
  return (
    <div>
      <div className="container max-phone:w-full">
        {/* Header section */}
        <Heading title="Our Products" subtitle={"Explore Our Products"} />
        {/* Body section */}
        <div className="flex flex-row justify-between w-full items-center">
          <ProductCard />
        </div>
        
      </div>
    </div>
  );
};

export default Products;
