import Navbar from "./components/Navbar"
import Carousel from "./components/Home/CarouselComponent.jsx"
import Hero from "./components/Home/Hero.jsx"
import HeroProject from "./components/projects/Hero.jsx"
import Footer from "./components/Footer.jsx"

function App() {
  

  return (
    <>
      <Navbar/>
      <div className="">
        <Carousel/>
        <Hero/>
      </div>
      <HeroProject/>
      <Footer/>
    </>
  )
}

export default App
