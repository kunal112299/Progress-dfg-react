import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Modal from './components/projects/Modal.jsx'
import MainProject from './components/projects/main.jsx'
import './index.css'
import { BrowserRouter as Router , Route , Routes } from 'react-router-dom'
import AboutUsMain from './components/AboutUs/AboutUsMain.jsx'
import EmailForm from './components/ContactUs/EmailForm.jsx'
import Animation from './assets/Animation.jsx'
import ContactMain from './components/ContactUs/ContactMain.jsx'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App/>}/>
        <Route path="/project" element={<MainProject/>}/>
        <Route path="/modal" element={<Modal/>} />
        <Route path='/aboutus' element={<AboutUsMain/>}/>
        <Route path='/contactus' element={<ContactMain/>}/>
        <Route path='/animation' element={<Animation/>}/>
      </Routes>
    </Router>
  </StrictMode>
)
