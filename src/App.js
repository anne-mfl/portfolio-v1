import React, { useState } from 'react'
import './App.css';
import Home from './Home.js'
import AboutMe from './AboutMe.js'
import Projects from './Projects';
import Contact from './Contact';
import Nav from './Navigation/Nav'
import NavProvider from './Navigation/NavContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from "@fortawesome/free-regular-svg-icons"
import ScrollAnimation from 'react-animate-on-scroll';


function App() {

  const head = [1, 2, 3, 4]

  // console.log(head.reverse())


  const [lightTheme, setLightTheme] = useState(true)

  return (

    <div className={lightTheme
      ? 'App font-rubik text-light-black font-light'
      : 'App font-rubik bg-slate-800 text-white font-light'
    }>
      <NavProvider>
        <Nav lightTheme={lightTheme} setLightTheme={setLightTheme} />
        <Home lightTheme={lightTheme} />
        <AboutMe lightTheme={lightTheme} />
        <Projects />
        <Contact lightTheme={lightTheme} />
      </NavProvider>

      <div className='hidden md:block fixed bottom-8 right-5'>
        <ScrollAnimation animateIn="fadeInRight" className='opac'>
          <a href="https://github.com/anne-mfl" className='p-2 block text-3xl text-center hover:text-stone-400 duration-300'><FontAwesomeIcon icon={faGithub} /></a>
          <a href="https://www.linkedin.com/in/anne-gemma-lee" className='p-2 block text-3xl text-center hover:text-stone-400 duration-300'><FontAwesomeIcon icon={faLinkedin} /></a>
          <a href="https://www.instagram.com/tr_anne_vel/" className='p-2 block text-3xl text-center hover:text-stone-400 duration-300'><FontAwesomeIcon icon={faInstagram} /></a>
          <a href="mailto:anne.gemma.lee@gmail.com" className='p-2 block text-3xl text-center hover:text-stone-400 duration-300'><FontAwesomeIcon icon={faEnvelope} /></a>
        </ScrollAnimation>
      </div>
    </div >
  );
}

export default App;
