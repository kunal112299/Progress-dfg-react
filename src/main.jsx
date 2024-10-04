import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Modal from './components/projects/Modal.jsx'
import MainProject from './components/projects/main.jsx'
import './index.css'
import { BrowserRouter as Router , Route , Routes } from 'react-router-dom'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App/>}/>
        <Route path="/project" element={<MainProject/>}/>
        <Route path="/modal" element={<Modal/>} />
      </Routes>
    </Router>
  </StrictMode>
)
