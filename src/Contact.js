import React from 'react'
import { useNav } from './Navigation/useNav'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from "@fortawesome/free-regular-svg-icons"
import ScrollAnimation from 'react-animate-on-scroll';


function Contact({ lightTheme }) {

  const contactRef = useNav('Contact')

  return (
    <>
      <div className='mx-8 mt-32 mb-24 md:mt-0 md:mb-0 md:mx-40 md:h-screen flex justify-center items-center' id='contact' ref={contactRef}>

        <ScrollAnimation animateIn="fadeInUp">
          <h1 className='font-montserrat text-3xl border-b-2 w-fit pb-2 border-beige mb-10'>Get in touch</h1>
          <p className='pb-12'>I am currently looking for a frontend developer position. <br />
            Contact me if you are interested in working together or if you have any questions!</p>
          <a href="mailto:anne.gemma.lee@gmail.com" className={`bg-beige px-6 py-3 font-montserrat font-normal hover:bg-stone-400 duration-200 ${!lightTheme && 'text-slate-800'}`}>Send me an email</a>

          <div className='opac flex mt-12 md:hidden'>
            <a href="https://github.com/anne-mfl" className='p-2 block text-3xl text-center hover:text-stone-400 duration-300'><FontAwesomeIcon icon={faGithub} /></a>
            <a href="https://www.linkedin.com/in/anne-gemma-lee" className='p-2 block text-3xl text-center hover:text-stone-400 duration-300'><FontAwesomeIcon icon={faLinkedin} /></a>
            <a href="https://www.instagram.com/tr_anne_vel/" className='p-2 block text-3xl text-center hover:text-stone-400 duration-300'><FontAwesomeIcon icon={faInstagram} /></a>
            <a href="mailto:anne.gemma.lee@gmail.com" className='p-2 block text-3xl text-center hover:text-stone-400 duration-300'><FontAwesomeIcon icon={faEnvelope} /></a>
          </div>
        </ScrollAnimation>

      </div>


      <p className='pb-1 text-center bottom-0'>© Anne Lee 2022. All Rights Reserved.</p>

    </>
  )
}

export default Contact