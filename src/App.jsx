import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { Navbar } from './components/Navbar'
import { Landing_Page } from './components/Landing_Page'
import { Common_header } from './components/Common_header'
import { Section1 } from './components/Section1'
import { Section2 } from './components/Section2'
import { Section4 } from './components/Section4'
import { Section5 } from './components/Section5'
import { Section6 } from './components/Section6'
import { Section7 } from './components/Section7'
import { Footer } from './components/Footer'

function App() {


  return (
    <>
     <div>
      <Navbar/>
      {/* {"Content } */}
       <Landing_Page/>
       <Section1/>
       <Section2/>
       <Section4/>
       <Section5/>
       <Section6/>
       <Section7/>
       <Footer/>
     </div>
    </>
  )
}

export default App
