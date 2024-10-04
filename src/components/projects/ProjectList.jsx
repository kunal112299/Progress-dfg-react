import React, { useState } from 'react';
import ProjectCard from '../Home/ProjectCard.jsx';
import ProjectData from '../../Json/Project.json';
import Modal from './Modal.jsx';

function ProjectList() {
  const [projectType, setProjectType] = useState('residential');
  const [selectedProject, setSelectedProject] = useState(null); // State to store selected project
  const [isModalOpen, setIsModalOpen] = useState(false);

  const projectData = ProjectData[projectType]; // Select either residential or commercial projects

  // Function to handle card click
  const handleClick = (project) => {
    setSelectedProject(project); // Set the selected project data
    setIsModalOpen(true);        // Open the modal
  };

  const closeModal = () => {
    setSelectedProject(null);  // Clear selected project
    setIsModalOpen(false);     // Close the modal
  };

  return (
    <div className="mt-24 px-5" id="project">
      <div className="flex justify-center items-center">
        <div className="md:text-4xl text-2xl roboto-slab-400">
          <h1>Projects</h1>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && selectedProject && (
        <Modal 
          images={selectedProject.img}     // Pass the selected images to Modal
          projectName={selectedProject.name} // Pass the project name to Modal
          onClose={closeModal}             // Function to close the modal
        />
      )}

      {/* Residential and Commercial Buttons */}
      <div className="flex justify-center gap-6 pt-10 text-xl">
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

      {/* Project Cards */}
      <div className="flex justify-center items-center w-full pt-8">
        <div className="flex flex-wrap justify-center gap-6 w-full">
          {projectData.length > 0 ? (
            projectData.map((project, index) => (
              <div key={index} className="w-full sm:w-1/2 lg:w-1/3">
                <ProjectCard
                  url={project.img[0]}  // Display the first image as a thumbnail
                  title={project.name}  // Project name
                  desc={project.description} // Project description
                  onClick={() => handleClick(project)} // Handle click event for the card
                />
              </div>
            ))
          ) : (
            <p>No projects available</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProjectList;
