import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          {/* <p className="text-sm text-designColor tracking-[4px]"></p> */}
          <h2 className="text-3xl md:text-4xl font-bold">Education Qualification</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="BS Economics (4YR)"
            subTitle="Indian Institute of Technology Kharagpur (2021-25)"
            result="7.81/10"
            des="Pursuing a Bachelor's degree in Economics (4-year program) at the esteemed Indian Institute of Technology, Kharagpur, from 2021 to 2025. Currently maintaining a strong academic record with a notable result of 7.81/10, reflecting dedication to excellence in the field of Economics and a commitment to scholarly pursuits. "
          />
          <ResumeCard
            title="Senior Secondary Education"
            subTitle="Jawahar Navodaya Vidyalaya Mahoba UP (2018-20)"
            result="91.40%"
            des="Excelled in Senior Secondary Education at Jawahar Navodaya Vidyalaya, Mahoba, Uttar Pradesh, during the period 2018-2020, securing an impressive result of 91.40%. This academic phase further honed my skills and deepened my knowledge, laying a solid groundwork for future endeavors."
          />
          <ResumeCard
            title="Higher School Education"
            subTitle="Jawahar Navodaya Vidyalaya Mahoba UP(2013-18)"
            result="79.20 %"
            des="Successfully navigated the academic landscape at Jawahar Navodaya Vidyalaya in Mahoba, Uttar Pradesh, from 2013 to 2018, attaining a noteworthy result of 79.20%. This period not only enriched my educational foundation but also fostered personal growth and development"
          />
        </div>
      </div>
      {/* part Two */}

     
    </motion.div>
  );
};

export default Education;
