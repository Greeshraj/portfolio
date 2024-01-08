import React from 'react'
import { AiFillAppstore } from "react-icons/ai";
import { FaMobile, FaGlobe } from "react-icons/fa";
import { SiProgress, SiAntdesign } from "react-icons/si";
import Title from '../layouts/Title';
import Card from './Card';

const Features = () => {
  return (
    <section
      id="features"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <Title des="My Interest in" />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20">
        <Card
          title="Full Stack Development"
          des="Versatile Full Stack Developer with expertise in both frontend and backend technologies. Proficient in creating end-to-end solutions that cater to diverse business needs. know range of frameworks to build web applications."
        />
        <Card
          title="Data Science"
          des="Data Scientist with a keen eye for extracting meaningful insights from complex datasets. Experienced in applying statistical models, machine learning algorithms, and analytical techniques to drive informed decision-making."
           
        />
        <Card
          title="Research"
          des="Dedicated Researcher committed to pushing boundaries and expanding knowledge in Economics. Experienced in conducting systematic investigations and contributing to the collective understanding."
          
        />
        <Card
          title="App Development"
          des="Experienced App Developer proficient in creating seamless digital experiences for mobile and desktop platforms. Skilled in designing intuitive user interfaces and developing robust backend systems. "
           
        />
         
        <Card
          title="Hosting Websites"
          des="Experienced in website hosting, I specialize in ensuring seamless online experiences by deploying and managing websites on various hosting platforms. Proficient in configuring servers, optimizing performance, and implementing security."
        />
      </div>
    </section>
  );
}

export default Features