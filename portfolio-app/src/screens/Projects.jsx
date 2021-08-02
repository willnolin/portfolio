import React from 'react'
import "./Projects.css"
import art from '../assets/images/Art-Wall-SS.png'
import kitchen from '../assets/images/Kitchintory-SS.png'
import bible from '../assets/images/SB-SS.png'
import hz from '../assets/images/HZ-SS.png'

export default function Projects() {
  return (
    <div className="projects-container">
      <section className="projects-section">
        <a href="https://art-wall.netlify.app/">
          <img src={art} alt="Art Wall" className="project-img" />
        </a>

        <a href="https://hz-game.netlify.app/" >
          <img src={hz} alt="HZ" className="project-img" />
        </a>

        <a href="https://kitchintory.netlify.app/">
          <img src={kitchen} alt="Kitchintory" className="project-img" />
        </a>

        <a href="https://willnolin.github.io/songwriter-bible/">
          <img src={bible} alt="Songerwriter Bible" className="project-img" />
        </a>
      </section>

    </div>
  )
}
