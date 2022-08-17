import React from 'react'
import { useNav } from './Navigation/useNav'
import ScrollAnimation from 'react-animate-on-scroll';
import headshot from './images/headshot.jpg'

function AboutMe({ lightTheme }) {

  const aboutRef = useNav('About');

  return (
    <div className='md:h-screen flex justify-center items-center' id='about' ref={aboutRef}>
      <div className='md:flex justify-around items-center px-10 md:px-40'>
        <section className='md:basis-5/12'>

          <ScrollAnimation animateIn="fadeInUp" >
            <h1 className='font-montserrat text-2xl border-b-2 w-fit pb-2 border-beige md:hidden'>About me</h1>
          </ScrollAnimation>

          <ScrollAnimation animateIn="fadeInUp">
            <img src={headshot} alt='headshot of Anne Lee' className='w-52 mt-4 md:mt-0 md:w-80 mx-auto rounded-full' />
          </ScrollAnimation>
        </section>

        <section className='md:basis-7/12'>
          <ScrollAnimation animateIn="fadeInUp">
            <h1 className='font-montserrat text-3xl border-b-2 w-fit pb-2 border-beige hidden md:block'>About me</h1>
            <p className='pt-6 pb-8 md:mr-12'>
              Hi, Hola and こんにちは👋<br />
              My name is Anne and I am a frontend developer based in Barcelona.
              I enjoy implementing website interface.<br />
              After working for four years as a dancer/translator, I decided to transform myself and challenge the tech industry.<br />
              I have participated the JavaScript full-stack bootcamp at Barcelona Code School, and later joined a startup company as a frontend developer.<br />
            </p>
          </ScrollAnimation>

          <ScrollAnimation animateIn="fadeInUp">
            <h3 className='font-montserrat text-xl md:text-2xl border-b-2 w-fit pb-1 border-beige'>Skill set</h3>
            <div className='flex pt-5 pb-16'>
              <ul className='pr-20'>
                <li>JavaScript</li>
                <li>React.js</li>
                <li>React Native</li>
                <li>Redux</li>
                <li>Node.js</li>
              </ul>
              <ul>
                <li>Express</li>
                <li>MongoDB</li>
                <li>HTML5</li>
                <li>CSS3</li>
                <li>Git</li>
              </ul>
            </div>
          </ScrollAnimation>

          <ScrollAnimation animateIn="fadeInUp">
            <a href='https://drive.google.com/file/d/1hU-hPq_dw34uRW4U4lnqnJCfYJc8whws/view?usp=sharing'
              className={`bg-beige px-6 py-3 font-montserrat font-normal hover:bg-stone-400 duration-200 ${!lightTheme && 'text-slate-800'}`}>View my resume</a>
          </ScrollAnimation>
        </section>


      </div>
    </div>
  )
}

export default AboutMe
