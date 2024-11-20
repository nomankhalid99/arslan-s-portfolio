import './App.css'
import About from './components/About/About'
import ContactUs from './components/ContactUs/ContactUs'
import Footer from './components/Footer/Footer'
import HeroSection from './components/Herosection/HeroSection'
import Navbar from './components/Navbar/Navbar'
import Portfolio from './components/Porfolio/Portfolio'
import Services from './components/Services/Services'
import Skills from './components/Skills/Skills'
import Testimonials from './components/Testimonials/Testimonials'

function App() {

  return (
    <>
    <Navbar/>
    <HeroSection/>
    <About/>
    <Services/>
    <Portfolio/>
    <Skills/>
    <Testimonials/>
    <ContactUs/>
    <Footer/>
    </>
  )
}

export default App
