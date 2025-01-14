import React from 'react'
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaReact, FaNodeJs, FaPython } from "react-icons/fa";
import { SiTailwindcss, SiFigma, SiNextdotjs, SiJavascript, SiExpress } from "react-icons/si";

const LeftBanner = () => {
    const [text] = useTypewriter({
      words: ["Data Science Enthusiastic.", "Full Stack Developer.", "Software Developer."],
      loop: true,
      typeSpeed: 20,
      deleteSpeed: 10,
      delaySpeed: 2000,
    });
  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h4 className=" text-lg font-normal">Welcome to the World of Development</h4>
        <h1 className="text-6xl font-bold text-white">
          Hey, I'm <span className="text-designColor capitalize">Greeshraj Patairiya</span>
        </h1>
        <h2 className="text-4xl font-bold text-white">
          a <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide">
        At IIT Kharagpur, I am currently a Fourth-year undergraduate student studying economics,
        my true passion lies in software development, data science, and machine learning., 
         I am confident in my ability to solve complex problems and deliver innovative solutions.
          Whether it be developing full-stack applications or utilizing machine learning algorithms,
          I am always striving to learn and take on new challenges.
        </p>
      </div>
    </div>
  );
}

export default LeftBanner