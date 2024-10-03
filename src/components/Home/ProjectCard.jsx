import React from 'react'


function ProjectCard() {
  return (
    <>
      <div className="border border-gray-300 mx-4 my-6 p-4 shadow-lg hover:shadow-2xl transition-shadow duration-800 transform hover:-translate-y-2">
        <div className="overflow-hidden">
          <img 
            src="project1.jpg" 
            alt="Project" 
            className="h-[50vh] w-[80vw] object-cover transition-transform duration-300 ease-in-out hover:scale-105"
          />
        </div>
        <div className="pt-4">
          <h5 className="text-2xl font-semibold text-gray-800 mb-2">Upcoming Residential Bungalow</h5>
          <p className="text-sm text-gray-600">UTTORA TOWNSHIP, Siliguri, West Bengal.</p>
        </div>
      </div>
    </>
  );
}

export default ProjectCard
