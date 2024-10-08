import React from 'react'
import Lottie from 'lottie-react'
import HomeContactUs from '../Json/HomeContactUs.json'

 

function Animation() {
  return (
    <>
    <div className="h-full w-full">
        <Lottie animationData={HomeContactUs} />    
    </div>
      
    </>
  )
}

export default Animation
