import React from 'react'


function ProjectCard({url, title, desc, onClick }) {
  return (
    <>
      <div className="border border-gray-300 mx-4 my-6 p-4 shadow-lg hover:shadow-2xl transition-shadow duration-800 transform hover:-translate-y-2 cursor-pointer"  onClick={onClick}>
        <div className="overflow-hidden">
          <img 
            src={url} 
            alt="Project" 
            className="h-[30vh] md:h-[50vh] w-[80vw] object-cover transition-transform duration-300 ease-in-out hover:scale-105"
          />
        </div>
        <div className="pt-4">
          <h5 className="text-2xl font-semibold  mb-2 text-orange-400">{title}</h5>
          <p className="text-sm text-gray-600">{desc}</p>
        </div>
      </div>
    </>
  );
}

export default ProjectCard
