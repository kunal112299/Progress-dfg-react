import Navbar from "./components/Navbar"
import Carousel from "./components/Home/CarouselComponent.jsx"
import Hero from "./components/Home/Hero.jsx"
import HeroProject from "./components/projects/Hero.jsx"
import Footer from "./components/Footer.jsx"
import Aboutus from "./components/AboutUs/Aboutus.jsx"
import { Link } from 'react-router-dom'

function App() {
  

  return (
    <>
      <Navbar/>
      <div className="">
        <Carousel/>
        <Hero/>
      </div>
      <HeroProject/>
    <div>
      <div className="mt-12 px-5" id='#aboutus'>
        <div className="flex justify-between items-center">
        <div className="md:text-4xl text-2xl roboto-slab-400">
          <h1>Know more about us...</h1>
        </div>
        <div className="absolute md:right-24 md:text-xl hidden md:flex">
          <Link to="/aboutus" className='flex flex-row items-center gap-2 hover:text-2xl hover:text-orange-400 duration-500'>
            See All <ion-icon name="arrow-forward-outline"></ion-icon>
          </Link>
        </div>
      </div>
    </div>
    <Aboutus/>
    <div className="md:hidden flex justify-center mt-10">
        <Link to='/aboutus' className='flex flex-row items-center gap-2 text-xl hover:text-2xl hover:text-orange-400 duration-500 mt-4'>
          See All <ion-icon name="arrow-forward-outline"></ion-icon>
        </Link>
    </div>
  </div>
      <Footer/>
    </>
  )
}

export default App
