import React from 'react';
import bannerImg2 from "/Images/banner2.png";
import { FaShoppingBag } from "react-icons/fa";
import {Link} from 'react-router-dom';


const Banner = () => {
  return (
    <div className="relative py-12 xl:px-28 px-4">
   
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_left,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]">
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_800px_at_100%_200px,#d5c5ff,transparent)]"></div>
      </div>

      <div className="py-28 flex flex-col md:flex-row-reverse justify-between items-center gap-14">
        <div className="md:w-1/2">
          <img
            src={bannerImg2}
            alt="Banner"
            className="w-full h-auto rounded-lg shadow-lg animate-slide-left-to-right"
          />
        </div>
        <div className="text-center md:text-left">
          <h1 className="text-5xl font-light mb-5">Collections</h1>
          <p className="text-xl mb-7">You can explore our collection from various brands here.</p>
          <Link to={'/Shopping'}>
          <button className="bg-black hover:bg-orange-500 text-white px-6 py-2 font-semibold rounded-sm flex items-center">
            <FaShoppingBag className="mr-2" />Shop Now
          </button></Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
