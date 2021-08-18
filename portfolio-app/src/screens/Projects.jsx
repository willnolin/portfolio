import React from 'react'
import "./Projects.css"
import art from '../assets/images/Art_Wall_img.png'
import kitchen from '../assets/images/Kitchintory_img.png'
import bible from '../assets/images/Songwriter_Bible_img.png'
import hz from '../assets/images/HZ_img.png'
import wordsearch from '../assets/images/WordSearch_img.png'

export default function Projects() {
  return (
    <div className="projects-container">
      {/* <section className="projects-section"> */}
      <h2 className="projects-title">Projects</h2>
          <div data-aos="fade-up" className="image-container">
        <a href="https://art-wall.netlify.app/" target="_blank" rel="noreferrer noopener" className="project-link">
            <img src={art} alt="Art Wall" className="project-img" />
            <div className="overlay">
              <div className="description">
                <h3 className="title is-5">Art Wall</h3>
                <p className="subtitle project-description">A community where artists can find spaces to sell their artwork,
                  showcase their talent and open a space to host artists. Built with <span className="bold">React, CSS and HTML5</span> front-end and <span className="bold">Ruby on Rails</span> back-end.</p>
              </div>
            </div>
        </a>
          </div>

        <a href="https://hz-game.netlify.app/" target="_blank" rel="noreferrer noopener" className="project-link">
        <div data-aos="fade-right" className="image-container">
          <div className="overlay-container">
            <img src={hz} alt="HZ" className="project-img" />
            <div className="overlay">
              <div className="description">
                <h3 className="title is-5">HZ</h3>
                <p className="subtitle project-description">A quiz game tailored for sound engineers and anyone trying to identify certain freqiencies. Guess the frequency.  Train your ear!  Built with <span className="bold">React, CSS and HTML5</span> </p>
              </div>
            </div>
            </div>
          </div>
        </a>

        <a href="https://kitchintory.netlify.app/" target="_blank" rel="noreferrer noopener" className="project-link">
          <div data-aos="fade-left" className="image-container">
            <img src={kitchen} alt="Kitchintory" className="project-img" />
            <div className="overlay">
              <div className="description">
                <h3 className="title is-5">Kitchintory</h3>
                <p className="subtitle project-description">An app to keep track of kitchen inventory.  Add, edit and delete items from your stock. Keep track of what has expired. Built with a <span className="bold">MERN</span> stack and full CRUD. </p>
              </div>
            </div>
          </div>
        </a>
        <a href="https://3-min-wordsearch.netlify.app/" target="_blank" rel="noreferrer noopener" className="project-link">
          <div data-aos="fade-up" className="image-container">
            <img src={wordsearch} alt="3-min-wordsearch" className="project-img" />
            <div className="overlay">
              <div className="description">
                <h3 className="title is-6">Wordsearch</h3>
                <p className="subtitle project-description">A game built with <span className="bold">React, CSS and HTML5</span>. Find as many words as you can in 3 minutes!</p>
              </div>
            </div>
          </div>
        </a>
        <a href="https://willnolin.github.io/songwriter-bible/" target="_blank" rel="noreferrer noopener" className="project-link">
          <div data-aos="fade-left" className="image-container">
            <img src={bible} alt="Songerwriter Bible" className="project-img" />
            <div className="overlay">
              <div className="description">
                <h3 className="title is-5">Songwriter Bible</h3>
                <p className="subtitle project-description">A tool to help write a song.  Look up lyrics, rhymes and chord diagrams.  Jot down your ideas.  You can save your most recent idea and recall it later.</p>
              </div>
            </div>
          </div>
        </a>

      {/* </section> */}

    </div>
  )
}
