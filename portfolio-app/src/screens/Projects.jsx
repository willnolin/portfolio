import React from 'react'
import "./Projects.css"
import art from '../assets/images/Art-Wall-SS.png'
import kitchen from '../assets/images/Kitchintory-SS.png'
import bible from '../assets/images/SB-SS.png'
import hz from '../assets/images/HZ-SS.png'
import wordsearch from '../assets/images/Wordsearch-SS.png'

export default function Projects() {
  return (
    <div className="projects-container">
      <section className="projects-section">

        <a href="https://art-wall.netlify.app/">
          <div className="image-container">
            <img src={art} alt="Art Wall" className="project-img" />
            <div className="overlay">
              <div className="description">
                <h3 className="title is-5">Art Wall</h3>
                <p className="subtitle project-description">A community where artists can find spaces to sell their artwork, showcase their talent and open a space to host artists.</p>
              </div>
            </div>
          </div>
        </a>

        <a href="https://hz-game.netlify.app/">
          <div className="image-container">
            <img src={hz} alt="HZ" className="project-img" />
            <div className="overlay">
              <div className="description">
                <h3 className="title is-5">HZ</h3>
                <p className="subtitle project-description">A quiz game tailored for sound engineers and anyone trying to identify certain freqiencies. Guess the frequency.  Train your ear!</p>
              </div>
            </div>
          </div>
        </a>

        <a href="https://kitchintory.netlify.app/">
          <div className="image-container">
            <img src={kitchen} alt="Kitchintory" className="project-img" />
            <div className="overlay">
              <div className="description">
                <h3 className="title is-5">Kitchintory</h3>
                <p className="subtitle project-description">An app to keep track of kitchen inventory.  Add, edit and delete items from your stock. Keep track of what has expired. </p>
              </div>
            </div>
          </div>
        </a>
        <a href="https://willnolin.github.io/songwriter-bible/">
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
        <a href="https://5-min-wordsearch.netlify.app/">
          <div className="image-container">
            <img src={wordsearch} alt="5-min-wordsearch" className="project-img" />
            <div className="overlay">
              <div className="description">
                <h3 className="title is-6">Wordsearch</h3>
                <p className="subtitle project-description">Find as many words as you can in 5 minutes!</p>
              </div>
            </div>
          </div>
        </a>

      </section>

    </div>
  )
}
