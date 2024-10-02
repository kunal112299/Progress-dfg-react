import React from 'react'

function Hero() {
  return (
    <>
     <div className="h-[28vh] md:h-[36vh] lg:h-[50vh] w-[100%]  mt-[10px] flex">
        <div className="w-[50%] flex justify-center items-center ">
          <h1 className="pacifico-regular text-2xl md:text-6xl lg:text-6xl p-8 px-6 lg:px-18 lg:w-[80%] w-100%">Turning Houses into Homes, inside and out</h1>
        </div>
        <div className="w-[50%] flex justify-center items-center flex-col">
          <p className="pt-9 pr-4 text-[8px] mb-[30px] md:text-[13px] lg:text-[15px] lg:px-[10px] text-gray-400 text-justify"> At Design Factory Group, we're passionate about turning houses into homes, inside and out. Our mission is to transform every space into a personalized and functional oasis that reflects the unique style and personality of our clients. With a focus on both interior and exterior design, we take a holistic approach to creating harmonious living environments. From cozy living rooms to inviting outdoor retreats, we believe that every detail matters in making a house feel like a true home. With our expertise and dedication, we're committed to exceeding our clients' expectations and helping them achieve their dream living spaces.</p>
        </div>
       </div>
       <div className="h-[24vh] md:h-[36vh] lg:h-[50vh] w-[100%]  mt-[10px] flex">
          <div className="w-[50%]">
              <img className="w-full h-full object-cover" src="img4.jpg" alt=""/>
          </div>
          <div className="w-[50%] flex justify-center items-center">
              <h1 className="pacifico-regular text-[14px] md:text-2xl lg:text-3xl p-8 px-6 lg:px-18 lg:w-[80%] w-100%">From bare walls to vibrant tales, our designs inspire, Where interiors meets imagination, Every Space Sings.</h1>
          </div>
      </div>
    </>
  )
}

export default Hero
