import React from 'react'
import { bannerImg } from "../../assets/index";

const RightBanner = () => {
  return (
    <div className="w-full lgl:w-1/2 flex justify-center items-center relative">
      <img
        className="w-[300px] h-[400px] lgl:w-[450px] lgl:h-[600px] z-10 shadow-lg border rounded-lg"
        src={bannerImg}
        alt="bannerImg"
      />
      <div className="absolute bottom-0 w-[400px] h-[200px] lgl:w-[500px] lgl:h-[600px] bg-gradient-to-r from-[#1e2024] to-[#202327] shadow-shadowOne flex justify-center items-center"></div>
      
    </div>
  );
}

export default RightBanner