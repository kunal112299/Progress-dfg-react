import React from 'react';

function Modal({ images, projectName, onClose }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-11/12 sm:w-3/4 md:w-1/2 lg:w-1/3 relative z-60 max-h-[80vh] overflow-y-auto"> {/* Added max height and overflow */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">{projectName}</h2>
          <button className="text-black text-lg font-bold" onClick={onClose}>
            X
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {images.map((image, index) => (
            <div key={index} className="text-center">
              <img
                src={image}
                alt={`Project Image ${index + 1}`}
                className="w-full h-auto rounded-md"
              />
            </div>
          ))}
        </div>
        <div className="flex justify-end mt-4">
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-md"
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
