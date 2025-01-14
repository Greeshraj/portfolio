// Banner.js
import React from 'react';
import LeftBanner from './LeftBanner';
import RightBanner from './RightBanner';
import HelpButton from './HelpButton';
import FindMe from './FindMe';
const Banner = () => {
  return (
    <>
      <section id="home" className="w-full pt-10 pb-20 flex flex-col gap-15 xl:gap-0 lgl:flex-row items-center border-b-[1px] font-titleFont border-b-black">
      <LeftBanner />
      <RightBanner />
      {/* <HelpButton /> */}
      {/* <FindMe/> */}
    </section>
    <section id="home" className="w-full pt-10 pb-20 flex flex-col gap-15 xl:gap-0 lgl:flex-row items-center border-b-[1px] font-titleFont border-b-black">
      
      {/* <HelpButton /> */}
      <FindMe/>
    </section>
    </>
  );
}

export default Banner;
