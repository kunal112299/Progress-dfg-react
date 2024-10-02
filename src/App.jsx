import Navbar from "./components/Navbar"
import Carousel from "./components/Home/CarouselComponent.jsx"
import Hero from "./components/Home/Hero.jsx"
import Footer from "./components/Footer.jsx"

function App() {
  

  return (
    <>
      <Navbar/>
      <div className="">
        <Carousel/>
        <Hero/>
      </div>
      <Footer/>
    </>
  )
}

export default App
