import Navbar from "./components/Navbar"
import Carousel from "./components/Home/CarouselComponent.jsx"
import Hero from "./components/Home/Hero.jsx"

function App() {
  

  return (
    <>
      <Navbar/>
      <div className="">
        <Carousel/>
        <Hero/>
      </div>
    </>
  )
}

export default App
