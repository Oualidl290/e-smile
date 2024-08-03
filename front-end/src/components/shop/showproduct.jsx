import React from "react";
import axios from "axios";
import { useState , useEffect } from "react";
import Footer from "../Footer/Footer";
import { useParams } from "react-router-dom";

export default function Frame() {
  const [product, setProduct] = useState(null);
  const { id } = useParams();

  
  useEffect(() => {
    const fetchProduct = async () => {
        try {
            const response = await axios.get(`http://127.0.0.1:8000/api/products/${id}`);
            setProduct(response.data.product);
        } catch (error) {
            console.error("Error fetching product:", error);
        }
    };

    fetchProduct();
}, [id]);

  return (
    <>
        <div className="flex flex-col justify-center items-center mt-20 antialiased">
            <div className="flex flex-col w-[1300px] h-[800px] subpixel-antialiased">
                {product && (
                    <div key={product.id} className="relative flex-grow rounded-[20px] bg-white">
                        <div className="absolute left-0 top-0 w-full h-full bg-white rounded-[20px]" />
                        <div className="absolute left-3 top-3 flex flex-col gap-2.5 p-[0px] bg-zinc-300 rounded-[40px] w-[480px] h-[348px]">
                            <img
                                className="w-full h-full rounded-[20px]"
                                src={product.image}
                                alt="Product"
                            />
                        </div>
                        <div className="relative ml-28">
                            <div className="absolute left-[411px] top-[66px] flex flex-col gap-2">
                                <p className="text-black text-[15px] font-bold font-['Comfortaa']">
                                    {product.name}
                                </p>
                                <p className="text-red-600 text-[17px] font-extralight font-['Crimson Pro']">
                                    70% off sale for a limited time
                                </p>
                                <div className="relative flex items-center gap-2">
                                    <p className="text-violet-950 text-[15px] font-normal font-['Comfortaa']">
                                        SVGcraftor
                                    </p>
                                    <div className="flex gap-1">
                                        {[...Array(5)].map((_, idx) => (
                                            <img
                                                key={idx}
                                                className="w-[20px] h-[20px]"
                                                src="/public/Vector2.png"
                                                alt="Rating"
                                            />
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className="absolute left-[411px] top-[208px] flex items-center gap-4">
                                <p className="text-black text-[27px] font-normal font-['Comfortaa']">
                                    {product.price} USD
                                </p>
                            </div>
                            <div className="absolute left-[412px] top-[240px] flex flex-row">
                                <p className="text-red-600 text-[15px] font-normal font-['Comfortaa'] line-through">
                                    USD 20.36
                                </p>
                                &nbsp;&nbsp;
                                <p className="text-lime-600 text-xl font-normal font-['Comfortaa']">
                                    (40% off)
                                </p>
                            </div>
                            <div className="absolute left-[411px] top-[301px] flex flex-col gap-2.5">
                                <button onClick={() => handleAddItem(product)} className="w-[340px] h-14 bg-violet-700 rounded-[20px] flex items-center justify-center shadow-md">
                                    <span className="text-white text-[25px] font-normal font-['Comfortaa']">
                                        Add To Cart
                                    </span>
                                </button>
                            </div>
                            <div className="absolute left-[821px] top-[301px] w-[91px] h-14 bg-transparent rounded-[20px] border border-blue-700 shadow-md">
                                <button className="w-[91px] h-[48px] flex items-center justify-center">
                                    <img
                                        className="w-[24px] h-[30px] mt-1"
                                        src="/public/Vector3.png"
                                        alt="Icon"
                                    />
                                </button>
                            </div>
                            <div className="absolute left-[411px] top-[25px] flex items-center gap-2.5 p-2.5 bg-red-600/20 rounded-[10px] shadow-sm">
                                <img
                                    className="w-[20px] h-[20px] drop-shadow-sm"
                                    src="/public/Vector.png"
                                    alt="Icon"
                                />
                                <p className="text-black text-[10px] font-normal font-['Comfortaa']">
                                    New markdown! Biggest sale in 60+ days
                                </p>
                            </div>
                        </div>
                        <div className="absolute left-[24px] top-[400px] w-[889px] flex flex-col gap-4">
                            <div className="w-full border-t border-stone-400/50 ml-32" />
                            <div className="flex flex-row justify-around">
                                <div className="w-[399px]">
                                    <h2 className="text-black text-[24px] font-bold font-['Comfortaa']">
                                        Item Details
                                    </h2>
                                    <div className="flex flex-col justify-around items-start h-[60px] w-[400px] p-4">
                                        <div className="flex flex-row justify-around items-start">
                                            <img
                                                className="w-[30px] h-[20px]"
                                                src="/public/Vector4.png"
                                                alt="Icon"
                                            />
                                            <p className="text-lg font-light font-['Comfortaa'] ml-6">
                                                Digital download
                                            </p>
                                        </div>
                                        <div className="flex flex-row justify-around items-start">
                                            <img
                                                className="w-[30px] h-[20px]"
                                                src="/public/Frame.png"
                                                alt="Icon"
                                            />
                                            <p className="text-lg font-light font-['Comfortaa'] ml-6">
                                                Digital file type(s): 1 PDF
                                            </p>
                                        </div>
                                    </div>
                                    <p className="mt-[40px] w-[500px] text-sm font-normal font-['Comfortaa']">
                                        160+ 3D Spiderman Tumbler Wrap Bundle, 20oz Skinny Tumbler Wrap,
                                        20 oz Tumbler Png Sublimation Design, Digital Instant Download
                                        Designs
                                    </p>
                                    <a href=""><p className="mt-[80px] text-stone-500 text-[14px] font-light font-['Comfortaa'] flex flex-row justify-center">
                                        Product Reviews
                                    </p></a>
                                </div>
                                <div className="border-l border-stone-400/50 w-40 ml-20" />
                                <div className="w-[600px] ml-10">
                                    <h2 className="text-black text-[24px] font-bold font-['Comfortaa']">
                                        Delivery
                                    </h2>
                                    <p className="mt-[20px] text-black/60 text-[25px] font-semibold font-['Comfortaa']">
                                        Instant Download
                                    </p>
                                    <p className="mt-[40px] w-[500px] text-sm font-normal font-['Comfortaa']">
                                        Your files will be available to download once payment is
                                        confirmed. <span className="underline"><a href="">Here's how.</a></span>
                                        <br />
                                        Instant download items don’t accept returns, exchanges or
                                        cancellations. Please contact the seller about any problems with
                                        your order.
                                    </p>
                                    <a href=""><p className="mt-[40px] text-stone-500 text-[14px] font-light font-['Comfortaa'] flex flex-row justify-center">
                                        Show more...
                                    </p></a>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
        <Footer />
    </>
);
}