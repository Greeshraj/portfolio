import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Extraactivity = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          {/* <p className="text-sm text-designColor tracking-[4px]">2007 - 2010</p> */}
          <h2 className="text-3xl md:text-4xl font-bold">Extra Curricular Activities</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="National Social Services"
            subTitle="NSS IIT Kharagpur"
            result="Volunteer"
            des="Participated in the 7-day's annual camp held in Malma village, actively engaging in activities such as tree planting to promote environmental
            sustainability, welfare initiatives that benefited over 500 residents and 100+ households, taught children, conducted impactful public rallies,
            organized awareness programs, and distributed books and medicines."
          />
          <ResumeCard
            title="Scounts & Guides"
            subTitle="Jawahar Navodaya Vidyalaya, Jhansi UP"
            result="Attained 'Rajya Puraskar'"
            des=" In the realm of Scouts & Guides at Jawahar Navodaya Vidyalaya, Jhansi UP, my journey culminated in the prestigious 'Rajya Puraskar'. This recognition symbolizes dedication, leadership, and the spirit of adventure embraced during the enriching experience"
          />
          
        </div>
      </div>
       
    </motion.div>
  );
};

export default Extraactivity;
