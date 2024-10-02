import React from 'react'
import { Carousel } from "flowbite-react";

function CarouselComponent() {
  return (
    <div className="h-[50vh] sm:h-[60vh] xl:h-[85vh] 2xl:h-[50vh]">
      <Carousel pauseOnHover>
        <img src="img1.jpg" alt="..." className='h-[50vh] sm:h-[60vh] xl:h-[85vh] 2xl:h-[50vh]'/>
        <img src="img2.jpg" alt="..." className='h-[50vh] sm:h-[60vh] xl:h-[85vh] 2xl:h-[50vh]'/>
        <img src="img3.jpg" alt="..." className='h-[50vh] sm:h-[60vh] xl:h-[85vh] 2xl:h-[50vh]'/>
        <img src="img4.jpg" alt="..." className='h-[50vh] sm:h-[60vh] xl:h-[85vh] 2xl:h-[50vh]'/>
        <img src="img5.jpg" alt="..." className='h-[50vh] sm:h-[60vh] xl:h-[85vh] 2xl:h-[50vh]'/>
      </Carousel>
    </div>
  );
}

export default CarouselComponent;
