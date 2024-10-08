import React from 'react'
import EmailForm from './EmailForm'
import Animation from '../../assets/Animation.jsx'

function ContactMain() {
  return (
    <div className='w-full flex flex-col md:flex-row justify-center items-center mt-20'>
      <div className='md:w-1/2 w-full mt-[-100px]'>
        <Animation/>
      </div>
      <div className='md:w-1/2 w-full h-full mt-[-100px]'>
        <EmailForm/>
      </div>
    </div>
  )
}

export default ContactMain
