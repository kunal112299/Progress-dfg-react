import React, { useState } from 'react';
import ProjectCard from '../Home/ProjectCard.jsx';
import ProjectData from '../../Json/Project.json';
import {Link} from 'react-router-dom'

function Hero() {
  
  const [projectType, setProjectType] = useState('residential');

  
  const projectData = ProjectData[projectType];
    
  return (
    <div className='mt-12 px-5' id='project'>
      <div className="flex justify-between items-center">
        <div className="md:text-4xl text-2xl roboto-slab-400">
          <h1>Our latest Projects</h1>
        </div>
        <div className="absolute md:right-24 md:text-xl hidden md:flex">
          <Link to="/project" className='flex flex-row items-center gap-2 hover:text-2xl hover:text-orange-400 duration-500'>
            See All <ion-icon name="arrow-forward-outline"></ion-icon>
          </Link>
        </div>
      </div>

      {/* Residential and Commercial */}
      <div className="flex justify-center gap-6 pt-10 text-xl ">
        <div
          className={`cursor-pointer ${projectType === 'residential' ? 'text-orange-400' : ''} hover:text-2xl duration-500`}
          onClick={() => setProjectType('residential')}
        >
          Residential
        </div>
        <div
          className={`cursor-pointer ${projectType === 'commercial' ? 'text-orange-400' : ''} hover:text-2xl duration-500`}
          onClick={() => setProjectType('commercial')}
        >
          Commercial
        </div>
      </div>

      {/* Card Section */}
      <div className="flex justify-center items-center w-full pt-8">
        <div className="w-full max-w-[80vw] md:max-w-[70vw] lg:max-w-[60vw]">
          {/* Display the last project data if available */}
          {projectData.length > 0 ? (
            <ProjectCard
              url={projectData[projectData.length - 1].img[0]}
              title={projectData[projectData.length - 1].name}
              desc={projectData[projectData.length - 1].description}
            />
          ) : (
            <p>No projects available</p>
          )}
        </div>
      </div>

      {/* Button for Mobile */}
      <div className="md:hidden flex justify-center mt-4">
        <Link to='/project' className='flex flex-row items-center gap-2 text-xl hover:text-2xl hover:text-orange-400 duration-500'>
          See All <ion-icon name="arrow-forward-outline"></ion-icon>
        </Link>
      </div>
    </div>
  );
}

export default Hero;
