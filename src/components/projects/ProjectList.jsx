import React, { useState } from 'react';
import ProjectCard from '../Home/ProjectCard.jsx';
import ProjectData from '../../Json/Project.json';


function ProjectList() {
  
  const [projectType, setProjectType] = useState('residential');

  
  const projectData = ProjectData[projectType];
    
  return (
    <div className='mt-24 px-5' id='project'>
      <div className="flex justify-center items-center">
        <div className="md:text-4xl text-2xl roboto-slab-400">
          <h1>Projects</h1>
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
              url={projectData[projectData.length - 1].img}
              title={projectData[projectData.length - 1].name}
              desc={projectData[projectData.length - 1].description}
            />
          ) : (
            <p>No projects available</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProjectList;
