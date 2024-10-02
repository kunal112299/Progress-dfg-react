import React from 'react'

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8 mt-[30px]">
    <div className="container mx-auto lg:px-[70px]">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="text-center md:text-left">
          <p className="text-lg font-semibold">Design Factory Group</p>
          <p className="text-sm">Ambikanagar road, Nayapara, Siliguri, West Bengal 735135</p>
        </div>
        <div className="mt-4 md:mt-0">
          <ul className="flex justify-center md:justify-end space-x-4">
            <li>
              <a href="#" className="text-sm hover:text-orange-400 transition duration-300">Home</a>
            </li>
            <li>
              <a href="#" className="text-sm hover:text-orange-400 transition duration-300">About</a>
            </li>
            <li>
              <a href="#" className="text-sm hover:text-orange-400 transition duration-300">Services</a>
            </li>
            <li>
              <a href="#" className="text-sm hover:text-orange-400 transition duration-300">Contact</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex items-center justify-center md:justify-end mt-8">
        <div className="flex space-x-4">
          <a href="#" className="text-white hover:text-orange-400 transition duration-300">
            <i className="fa-brands fa-instagram w-6 h-6"></i>
          </a>
          <a href="#" className="text-white hover:text-orange-400 transition duration-300">
            <i className="fa-brands fa-facebook w-6 h-6"></i>
          </a>
          <a href="#" className="text-white hover:text-orange-400 transition duration-300">
            <i className="fa-brands fa-twitter w-6 h-6"></i>
          </a>
        </div>
      </div>
      <div className="border-t border-gray-800 mt-8 pt-4 text-center">
        <p className="text-sm">©2024 Design Factory Group. All rights reserved.</p>
      </div>
    </div>
  </footer>
  )
}

export default Footer
