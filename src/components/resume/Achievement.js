import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Achievement = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          {/* <p className="text-sm text-designColor tracking-[4px]">2007 - 2010</p> */}
          <h2 className="text-3xl md:text-4xl font-bold">Achievemnts</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Hack-An-Intern Hackathon"
            subTitle="KodeInKgp IIT Kharagpur"
            result="2nd Rank"
            des="Secured 2nd place in the Full Stack Development at the KodeinKGP-organized Hack-An-Intern Hackathon, with team and won cash prize's."
          />
          {/* <ResumeCard
            title="Semester Grade"
            subTitle="9.14/10 SGPA in 6th Semester"
            result="Top 10"
            des=" Elevating academic excellence, this achievement boasts a remarkable 9.14/10 SGPA in the 6th semester, earning a well-deserved spot among the top 10 performers"
          /> */}
          <ResumeCard
            title="IIT JEE Advance -2021"
            subTitle="Secured Category Rank 909"
            result="Ranked 909 out of 58,780 General Category EWS Students"
            des="Embarking on the challenging journey of IIT JEE Advance 2021, I clinched an impressive Category Rank of 809. In a field of 58,780 aspiring minds, my dedication and perseverance earned me the distinguished 908th position. This accomplishment stands as a testament to unwavering commitment and the pursuit of excellence in the pursuit of knowledge."
          />
        </div>
      </div>
       
    </motion.div>
  );
};

export default Achievement;
