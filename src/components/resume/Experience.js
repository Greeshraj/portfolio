import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          {/* <p className="text-sm text-designColor tracking-[4px]">2010 - 2022</p> */}
          <h2 className="text-3xl md:text-4xl font-bold">Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Application Developer"
            subTitle="MedSolu Pvt Ltd (Feb' 23 - Apr' 23), Under IIT Guwahat Professer"
            result="Internship"
            des="Conducted research on a wide range of health insurance type,analyzing policies, and pricing structures to provide informed recommendations.
            Collaborated closely with a dynamic team to optimize project profitability through the implementation of strategic financial planning.
            Generated impactful reports and presentations, by using the data visualization tools to finding effective solutions. Link to LOE is"
            link=""
          />
          <ResumeCard
            title="Technical Team Head"
            subTitle="Kshitij IIT Kharagpur - (Aug' 22 - Present)"
            result="Society Involvement"
            des="Led team in developing a comprehensive website for fest. Used React]$ for frontend, Node]S backend with MongoDB for data management.
            Organized a successful hackathon during the lest year's fest,sponsored by MongoDB, showcasing exceptional organizational and leadership.
            Developed a Campus Ambassador website with team, facilitating registrations from over 1200+ students, enhancing fest's reach and impact.
            Leading the development of 3D website for the 2024 fest as Head , showcasing a forward-thinking approach to immersive online experiences."
            link=""
          />
          <ResumeCard
            title="Library Alumni Affairs Secretary"
            subTitle="LBS Hall, IIT Kharagpur"
            result="Hall Involvement"
            des="At this position I Effectively managed administrative duties and proactively fostered meaningful alumni engagement for the session 2022-23.
            Demonstrated strong organizational and communication skills in coordinating events and initiatives to enhance the hall library facilities for all."
            link=""
          />
        </div>
      </div>
     
    </motion.div>
  );
};

export default Experience;
