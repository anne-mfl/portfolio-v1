import React from 'react'
import { useNav } from './Navigation/useNav'
import ScrollAnimation from 'react-animate-on-scroll';
import 'animate.css';
// import homelogo from './images/homelogo.gif'
import homelogo2 from './images/logo03sec.gif'


function Home({lightTheme}) {

  const homeRef = useNav('Home');

  return (
    <div className='w-full' ref={homeRef} id='home'>

      <div className='flex justify-center items-center h-[calc(100vh_-_100px)] mx-7  md:h-[calc(100vh_-_175px)]'>
        <ScrollAnimation animateIn="fadeInUp">  
           <img src={homelogo2} alt='anne lee logo' className={`${!lightTheme && 'invert'} w-96`} />
        </ScrollAnimation>

      </div>

    </div>
  )
}

export default Home
