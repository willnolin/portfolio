import React from 'react'
import "./Projects.css"
import art from '../assets/images/ART_WALL_SS.png'
import kitchen from '../assets/images/Kitchintory-SS.png'
import bible from '../assets/images/SB-SS.png'
import hz from '../assets/images/HZ-SS.png'
import wordsearch from '../assets/images/Wordsearch-SS.png'

export default function Projects() {
  return (
    <div className="projects-container">
      <section className="projects-section">

        <a href="https://art-wall.netlify.app/" target="_blank" rel="noreferrer noopener">
          <div className="image-container">
            <img src={art} alt="Art Wall" className="project-img" />
            <div className="overlay">
              <div className="description">
                <h3 className="title is-5">Art Wall</h3>
                <p className="subtitle project-description">A community where artists can find spaces to sell their artwork,
                  showcase their talent and open a space to host artists. Built with <span className="bold">React, CSS and HTML5</span> front-end and <span className="bold">Ruby on Rails</span> back-end.</p>
              </div>
            </div>
          </div>
        </a>

        <a href="https://hz-game.netlify.app/" target="_blank" rel="noreferrer noopener">
          <div className="image-container">
            <img src={hz} alt="HZ" className="project-img" />
            <div className="overlay">
              <div className="description">
                <h3 className="title is-5">HZ</h3>
                <p className="subtitle project-description">A quiz game tailored for sound engineers and anyone trying to identify certain freqiencies. Guess the frequency.  Train your ear!  Built with <span className="bold">React, CSS and HTML5</span> </p>
              </div>
            </div>
          </div>
        </a>

        <a href="https://kitchintory.netlify.app/" target="_blank" rel="noreferrer noopener">
          <div className="image-container">
            <img src={kitchen} alt="Kitchintory" className="project-img" />
            <div className="overlay">
              <div className="description">
                <h3 className="title is-5">Kitchintory</h3>
                <p className="subtitle project-description">An app to keep track of kitchen inventory.  Add, edit and delete items from your stock. Keep track of what has expired. Built with a <span className="bold">MERN</span> stack and full CRUD. </p>
              </div>
            </div>
          </div>
        </a>
        <a href="https://willnolin.github.io/songwriter-bible/" target="_blank" rel="noreferrer noopener">
          <div className="image-container">
            <img src={bible} alt="Songerwriter Bible" className="project-img" />
            <div className="overlay">
              <div className="description">
                <h3 className="title is-5">Songwriter Bible</h3>
                <p className="subtitle project-description">A tool to help write a song.  Look up lyrics, rhymes and chord diagrams.  Jot down your ideas.  You can save your most recent idea and recall it later.</p>
              </div>
            </div>
          </div>
        </a>
        <a href="https://3-min-wordsearch.netlify.app/" target="_blank" rel="noreferrer noopener">
          <div className="image-container">
            <img src={wordsearch} alt="3-min-wordsearch" className="project-img" />
            <div className="overlay">
              <div className="description">
                <h3 className="title is-6">Wordsearch</h3>
                <p className="subtitle project-description">A game built with <span className="bold">React, CSS and HTML5</span>. Find as many words as you can in 3 minutes!</p>
              </div>
            </div>
          </div>
        </a>

      </section>

    </div>
  )
}
