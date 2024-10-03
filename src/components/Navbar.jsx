import React, { useState } from 'react'
import Button from './Button.jsx';
import { Link } from 'react-router-dom';
export default function Navbar() {

  let Links = [
    {
      name:"Home", link:"/"
    },
    {
      name:"Projects", link:"/project"
    },
    {
      name:"Hiring", link:"#"
    },
    {
      name:"About Us", link:"#"
    }
  ];
  const [open, setopen] = useState(false);
  return (
    <div className="shadow-md w-full fixed top-0 left-0 z-50">
      <div className="md:flex items-center justify-between bg-white py-4 ms:px-10 px-7">
        <div className="font-bold text-2xl cursor-pointer flex items-center pacifico-regular text-gray-900 whitespace-nowrap">
          Design Factory
        </div>
        <div onClick={()=>setopen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
        <ion-icon name={ open ? 'close' : 'menu'}></ion-icon>
        </div>
        <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static left-0 w-full md:z-auto z-[-1] bg-white md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-19': 'top-[-490px]'}`}>
          {
            Links.map((link) => (
              <li key={link.name} className='md:ml-8 text-xl whitespace-nowrap md:my-0 my-7'>
                <Link to={`${link.link}`} className='text-gray-800  hover:text-orange-400 duraion-500'>{link.name}</Link>
              </li>
            ))
          }
          <Button>
            Contact Us
          </Button>
        </ul>
      </div>
    </div>
  )
}
