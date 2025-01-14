import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaReact, FaNodeJs, FaPython } from "react-icons/fa";
import { SiTailwindcss, SiFigma, SiNextdotjs, SiJavascript, SiExpress } from "react-icons/si";

export default function FindMe() {
  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div>
        <h2 className="text-base uppercase font-titleFont mb-4">
          Find me in
        </h2>
        <div className="flex gap-4">
          <span className="bannerIcon">
            <a href="https://www.facebook.com/greeshraj.patairiya.319/">
              <FaFacebookF />
            </a>
          </span>
          <span className="bannerIcon">
            <a href="https://twitter.com/patairiya_gmuni">
              <FaTwitter />
            </a>
          </span>
          <span className="bannerIcon">
            <a href="https://www.linkedin.com/in/greeshraj/">
              <FaLinkedinIn />
            </a>
          </span>
        </div>
      </div>
      <div>
        <h2 className="text-base uppercase font-titleFont mb-4">
          BEST SKILL ON
        </h2>
        <div className="flex gap-4">
          <span className="bannerIcon">
            <FaReact />
          </span>
          <span className="bannerIcon">
            <SiExpress />
          </span>
          <span className="bannerIcon">
            <FaNodeJs />
          </span>
          <span className="bannerIcon">
            <SiJavascript />
          </span>
          <span className="bannerIcon">
            <FaPython />
          </span>
        </div>
      </div>
    </div>
  );
}
