import React, { useState } from 'react';
import ProjectCard from '../Home/ProjectCard.jsx';
import ProjectData from '../../Json/Project.json';
import {Link} from 'react-router-dom'
import Modal from './Modal.jsx';

function Hero() {
  
  const [projectType, setProjectType] = useState('residential');
  const [selectedProject, setSelectedProject] = useState(null); // State to store selected project
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const projectData = ProjectData[projectType];
    
  const handleClick = (project) => {
    setSelectedProject(project); // Set the selected project data
    setIsModalOpen(true);        // Open the modal
  };

  const closeModal = () => {
    setSelectedProject(null);  // Clear selected project
    setIsModalOpen(false);     // Close the modal
  };
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

      {isModalOpen && selectedProject && (
        <Modal 
          images={selectedProject.img}     // Pass the selected images to Modal
          projectName={selectedProject.name} // Pass the project name to Modal
          onClose={closeModal}             // Function to close the modal
        />
      )}


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
              onClick={() => handleClick(projectData[projectData.length - 1])}
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
