import React, { useState } from 'react'
import { useNav } from './Navigation/useNav'
import ScrollAnimation from 'react-animate-on-scroll';
import comments from './images/comments.png'
import ecommerce from './images/ecommerce.png'
import crowdfunding from './images/crowdfunding.png'
import dropdownnav from './images/dropdownnav.png'
import pricing from './images/pricing.png'
import dashboard from './images/dashboard.png'
import faq from './images/faq.png'
import signup from './images/signup.png'
import rating from './images/rating.png'
import mobapp from './images/mobapp.png'
import webapp from './images/webapp.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode, faGlobe } from "@fortawesome/free-solid-svg-icons"


function Projects() {

  const projectsRef = useNav('Projects');

  const [display, setDisplay] = useState({
    comments: false,
    ecommerce: false,
    crowdfunding: false,
    dashboard: false,
    dropdownnav: false,
    pricing: false,
    faq: false,
    signup: false,
    rating: false,
    webapp: false,
    mobapp: false,
  })

  const projects = [
    {
      name: comments,
      title: 'Interactive Comments Section',
      using: 'React/Redux/TailwindCSS',
      repo: 'https://github.com/anne-mfl/interactive-comments-section',
      site: 'https://anne-mfl.github.io/interactive-comments-section/'
    },
    {
      name: ecommerce,
      title: 'E-commerce Product Page with Lightbox',
      using: 'React/SCSS',
      repo: 'https://github.com/anne-mfl/ecommerce-product-page',
      site: 'https://anne-mfl.github.io/ecommerce-product-page/'
    },
    {
      name: crowdfunding,
      title: 'Crowdfunding Product Page',
      using: 'React/TailwindCSS',
      repo: 'https://github.com/anne-mfl/crowdfunding-product-page',
      site: 'https://anne-mfl.github.io/crowdfunding-product-page/'
    },
    {
      name: dashboard,
      title: 'Time Tracking Dashboard',
      using: 'React',
      repo: 'https://github.com/anne-mfl/time-tracking-dashboard',
      site: 'https://anne-mfl.github.io/time-tracking-dashboard/'
    },
    {
      name: dropdownnav,
      title: 'Intro Section with Dropdown Navigation',
      using: 'React/TailwindCSS',
      repo: 'https://github.com/anne-mfl/intro-section-with-dropdown-navigation',
      site: 'https://anne-mfl.github.io/intro-section-with-dropdown-navigation/'
    },
    {
      name: pricing,
      title: 'Pricing Component with Toggle',
      using: 'React/TailwindCSS',
      repo: 'https://github.com/anne-mfl/pricing-component-with-toggle',
      site: 'https://anne-mfl.github.io/pricing-component-with-toggle/'
    },
    {
      name: faq,
      title: 'FAQ Accordion Card',
      using: 'React',
      repo: 'https://github.com/anne-mfl/FAQ-accordion-card',
      site: 'https://anne-mfl.github.io/FAQ-accordion-card/'
    },
    {
      name: signup,
      title: 'Sign-up Form',
      using: 'React',
      repo: 'https://github.com/anne-mfl/intro-component-with-signup-form',
      site: 'https://anne-mfl.github.io/intro-component-with-signup-form/'
    },
    {
      name: rating,
      title: 'Interactive Rating Component',
      using: 'React',
      repo: 'https://github.com/anne-mfl/interactive-rating-component',
      site: 'https://anne-mfl.github.io/interactive-rating-component/'
    },
    {
      name: mobapp,
      title: 'iReport Mobile App',
      using: 'React Native',
      repo: 'https://gitlab.com/anne_lee/mobile-app-project',
      site: '',
      desc: 'Features: Users can post about incidents & events that happened with CRUD operation / Users can comment on each post / Uploading pictures and videos via Cloudinary / Obtaining current location using Google API '
    },
    {
      name: webapp,
      title: 'MERN stack citizen report app - iReport',
      using: 'React',
      repo: 'https://gitlab.com/anne_lee/first-project',
      site: 'http://142.93.105.20/',
      desc: 'Features in addition to mobile version: Stripe payments for donation / Contact form using Node mailer / Place autocomplete using Google API'
    }
  ]

  return (
    <div className='mx-6 md:mx-36' id='projects' ref={projectsRef}>
      <ScrollAnimation animateIn="fadeInUp">
        <h1 className='font-montserrat text-2xl md:text-3xl border-b-2 w-fit pb-2 border-beige mb-8 mt-40'> Projects</h1>
      </ScrollAnimation>

      <div className='grid md:grid-cols-3'>
        {projects.map((project, i) => (
          <ScrollAnimation
            animateIn="fadeInUp"
            delay={i % 3 === 1 ? 200 : i % 3 === 2 && 400}>
            <div
              className='overflow-hidden relative'
              onMouseEnter={() => setDisplay({ [project.name]: true })}
              onMouseLeave={() => setDisplay({ [project.name]: false })}
            >
              <img
                src={project.name}
                key={project.name}
                alt={`${project.name} thumbnail`}
                className={`transform scale-100 duration-200 ${display[project.name] && 'scale-110 blur-sm brightness-50'} ${project.name === mobapp && 'h-60'}`}
              />

              {display[project.name] &&
                <div className='absolute top-0 left-0 w-full h-full duration-200 flex justify-center items-center text-white'>
                  <div className=''>
                    <h1 className='text-center text-lg font-normal'>{project.title}</h1>
                    <p className='text-center'>{project.using}</p>

                    <p className='text-sm mx-5 mt-2'>{project.desc}</p>

                    <div className='text-center mt-5'>
                      <a href={`${project.repo}`}
                        target="_blank"
                        rel="noreferrer noopener"
                        className='mx-3 hover:text-stone-400 hover:duration-500'
                      ><FontAwesomeIcon icon={faCode} className='h-5' /></a>
                      <a href={`${project.site}`}
                        target="_blank"
                        rel="noreferrer noopener"
                        className={project.name === mobapp
                          ? 'mx-3 cursor-auto pointer-events-none'
                          : 'mx-3 hover:text-stone-400 hover:duration-500'}><FontAwesomeIcon icon={faGlobe} className='h-5' /></a>
                    </div>
                  </div>
                </div>
              }
            </div>
          </ScrollAnimation>
        ))}


      </div>
    </div>
  )
}

export default Projects

