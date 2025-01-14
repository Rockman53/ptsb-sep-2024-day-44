import React from 'react'

import './HomePage.css'

function HeroSection () {
  return (
    <div className='hero-section'>
      <h1>Hello, my name is Kyle.</h1>
      <p>I am a baby web developer. This is my first version of a portfolio!</p>
    </div>
  )
}

function AboutMeSection () {
  return (
    <div className='about-me-section'>
      <h2>About Me</h2>
      <p>I am a web developer. Please give me a really great.</p>
    </div>
  )
}

const webDevProjects = [
  {
    title: 'Project 1',
    description: 'This is the first project.',
    image: 'https://picsum.photos/200/300',
    link: 'https://www.google.com'
  },
  {
    title: 'Project 2',
    description: 'This is the second project.',
    image: 'https://picsum.photos/200/300',
    link: 'https://www.google.com'
  },
  {
    title: 'Project 3',
    description: 'This is the third project.',
    image: 'https://picsum.photos/200/300',
    link: 'https://www.google.com'
  }
]

function ProjectsSection () {
  return (
    <div className='projects-section'>
      <h2>Projects</h2>
      <div className='projects-container'>
        {webDevProjects.map((project, index) => (
          <div key={index} className='project-card'>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <img src={project.image} alt={project.title} height={100} />
            <a href={project.link}>View Project</a>
          </div>
        ))}
      </div>
    </div>
  )
}

function ContactSection () {
  return (
    <div className='contact-section'>
      <h2>Contact Me</h2>
      <p>Email: timmy@gmail.com</p>
      <p>Phone: 123-456-7890</p>
    </div>
  )
}

export default function HomePage () {
  return (
    <div className='home-page'>
      <HeroSection />
      <AboutMeSection />
      <ProjectsSection />
      <ContactSection />
    </div>
  )
}
