import React from 'react';
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const data = [
  {
    "img": "/employee/img2.jpg",
    "name": "Himanshu Singh",
    "title": "Principal Architect",
    "desc": "Architecture is about to come up with some aesthetic designs and structures that are not only beautiful but also functional."
  },
  {
    "img": "/employee/img4.jpg",
    "name": "Nishikanta Sarkar",
    "title": "Principal Designer",
    "desc": "Civil engineering is a professional engineering discipline that deals with the design, construction, and maintenance of the physical and naturally built environment."
  },
  {
    "img": "/employee/img3.jpg",
    "name": "Sunita Sen",
    "title": "Interior Designer",
    "desc": "Their attention to detail and commitment to excellence exceeded my expectations."
  },
  {
    "img": "/employee/img1.jpg",
    "name": "Mukul Joshi",
    "title": "Associate Architect",
    "desc": "Architecture is about creating spaces that are both functional and beautiful, enhancing how we live and interact with our surroundings."
  }
];

var settings = {
  dots: true,
  infinite: true, 
  speed: 500,
  slidesToShow: 1, 
  slidesToScroll: 1, 
  autoplay: true,
    speed: 500,
    autoplaySpeed: 5000,
    cssEase: "linear",
  responsive: [
    {
      breakpoint: 1024, // Tablets and smaller laptops
      settings: {
        slidesToShow: 1, // Show 2 cards on medium-sized screens
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 768, // Smaller tablets
      settings: {
        slidesToShow: 1, // Show 2 cards on smaller tablets
        slidesToScroll: 1,
        infinite: true
      }
    },
    {
      breakpoint: 600, // Large phones
      settings: {
        slidesToShow: 1, // Show 1 card on large phones
        slidesToScroll: 1,
        dots: true
      }
    },
    {
      breakpoint: 480, // Small phones
      settings: {
        slidesToShow: 1, // Show 1 card on small phones
        slidesToScroll: 1
      }
    }
  ]
};

function Aboutus() {
  return (
    <>
    
      <div className="w-[80%] sm:w-[90%] md:w-[50%] m-auto coarosel-container"> 
        <div className="mt-20 slider-container">
          <Slider {...settings}>
            {
              data.map((d, index) => (
                <div key={index} className='bg-white rounded-xl text-black h-[500px] shadow-md'>
                  <div className="h-56 sm:h-48 rounded-t-xl bg-orange-400 flex justify-center items-center">
                    <img src={d.img} alt={d.name} className='w-32 h-32 sm:w-44 sm:h-44 rounded-full object-cover'/>
                  </div>
                  <div className="flex items-center flex-col p-4 gap-2 sm:gap-4 carousel-description">
                  <i class='bx bxs-quote-alt-left'></i><p className='sm:text-xl text-sm text-justify'>{d.desc}</p><i class='bx bxs-quote-alt-right'></i>
                    <h1 className='text-lg sm:text-xl font-bold'>{d.name}</h1>
                    <h2 className='text-sm sm:text-md text-gray-500'>({d.title})</h2>
                  </div>
                </div>
              ))
            }
          </Slider>
        </div>
      </div>
      
    </>
  );
}

export default Aboutus;
