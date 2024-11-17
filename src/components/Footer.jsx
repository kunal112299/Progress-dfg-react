
import React from 'react'
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8 mt-[30px]">
    <div className="container mx-auto lg:px-[70px]">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="text-center md:text-left">
          <p className="text-lg font-semibold">Design Factory Group</p>
          <p className="text-sm">Ground Floor, Bhakti Apartment, Ward No. 30, Deshbandhu Para, Near Gaudiya Math, P.O.- Siliguri, Dist.- Darjeeling, Pin Code - 734004.</p>
        </div>
        <div className="mt-4 md:mt-0">
          <ul className="flex justify-center md:justify-end space-x-4 cursor-pointer list-none">
            <li>
              <Link to="/" className="text-sm hover:text-orange-400 transition duration-300 ">Home</Link>
            </li>
            <li>
              <Link to="/aboutus" className="text-sm hover:text-orange-400 transition duration-300 ">About</Link>
            </li>
            <li>
              <Link to="/project" className="text-sm hover:text-orange-400 transition duration-300 ">Services</Link>
            </li>
            <li>
              <Link to="/contactus" className="text-sm hover:text-orange-400 transition duration-300 ">Contact</Link>
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
