import React from 'react'
import Navbar from '../Navbar/Navbar'
import Banner from '../banner/Banner'
import Features from '../features/Features'
import Projects from '../projects/Projects'
import Resume from '../resume/Resume'
import Contact from '../contact/Contact'

export default function Home() {
  return (
    <div>
     <div className="w-full h-auto bg-bodyColor text-lightText px-4">
      <div className="max-w-screen-xl mx-auto">
        <Navbar />
        <Banner />
        <Features />
        <Projects />
        <Resume />
        <Contact />
      </div>
    </div>
      
    </div>
  )
}
