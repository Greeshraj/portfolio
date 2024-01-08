import React from 'react'
import Title from '../layouts/Title'
import { face_recog,color_detect,human_count,yt_download,wt_predict,website } from "../../assets/index";
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title=""
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="Automated Color Detection from image"
          des="Developed color detection application by using OpenCV and Pandas, allowing to obtain colors names by clicking on picture.

          •Utilized a dataset with 865 color names & RGB values to calculate the distance from  each color,showing proficiency in python.
          
          •Implemented mouse event handling,image  processing & creating a  user-friendly interface with OpenCV, Pandas, and numpy."
          src={color_detect}
        />
        <ProjectsCard
          title="Facetronix:Attendance Tracking with Face Recognition"
          des="Developed accurate and efficient Face Recognition Attendance System with OpenCV, Flask,and ML libraries like scikit-learn.

          •Utilized KNN algorithm for facial recognition, achieving instant identification and integration with a Flask web application.
          
          •Cutting-Edge Biometric Attendance Ecosystem (Face), synergizing OpenCV, Flask, and avant-garde machine learning libraries."
          src={face_recog}
        />
        <ProjectsCard
          title="Weight Prediction with Random Forests"
          des=" •Engineered a Python script using libraires for weight category prediction, incorporating StandardScaler for feature scaling.

          •Implemented Random Forest Classifier & Numpy, Pandas, Matplotlib for Data manipulation, visulaization and analysis.
          
          •Created a function for real-time weight category prediction, seamlessly integrating user input array with preprocessed data."
          src={wt_predict}
        />
        <ProjectsCard
          title="Personal Portfolio Website"
          des=" Created a personal portfolio website."
          src={website}
        />
        <ProjectsCard
          title="E-commerce Website"
          des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={wt_predict}
        />
        <ProjectsCard
          title="Chatting App"
          des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={wt_predict}
        />
      </div>
    </section>
  );
}

export default Projects