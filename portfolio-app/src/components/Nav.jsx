import React, { useState, useRef } from 'react'
import "./Nav.css"
import { Link } from 'react-scroll'

import logo from '../assets/images/will-metivier-logo.png'
// import volumeIcon from '../assets/images/volume.png'
// import volumeMuteIcon from '../assets/images/volume-mute.png'

export default function Nav(props) {
  const { volume, setVolume, saveFile } = props;
  const [activeClass, setActiveClass] = useState("");
  const [isActive, setIsActive] = useState(false)
  const [hamburgerOpen, setHamburgerOpen] = useState('')



  const handleClick = () => {
    setIsActive(prevState => !prevState)
    if (isActive) {
      setActiveClass("is-active")
      setHamburgerOpen("show-hamburger")
    } else {
      setActiveClass("")
      setHamburgerOpen("")
    }
  }

  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">

      <div className="navbar-brand">
        {/* <Link to="/"> <img src={logo} alt="will-metivier-logo" className="logo"/>

        </Link> */}
        <Link
          to="home" 
          spy={true} 
          smooth={true} 
          duration={500} >
          <img src={logo} alt="will-metivier-logo" className="logo" />
        </Link>
        <button className="button is-black is-outlined nav-resume-btn" onClick={saveFile}>
          Download Resume
        </button>
        {/* <Volume volume={volume} setVolume={setVolume} /> */}

        <a role="button" className={`navbar-burger ${activeClass}`} aria-label="menu"
          aria-expanded={isActive} data-target="navbarBasicExample" onClick={handleClick}>
          <span aria-hidden={"true"}></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" className={`navbar-menu`}>

        <div className="navbar-end">
        <Link 
          to="projects" 
          spy={true} 
          smooth={true} 
          duration={500} 
        >
            <button className="button is-link is-outlined">Projects</button>
          </Link>
        <Link 
          to="about" 
          spy={true} 
          smooth={true} 
          duration={500} 
          >
            <button className="button is-black is-outlined">About</button>
        </Link>
        <Link 
          to="contact" 
          spy={true} 
          smooth={true} 
          duration={500} 
          >
            <button className="button is-black is-outlined">Contact</button>
        </Link>
        </div>
      </div>

      <div className={`hamburger-menu-content ${hamburgerOpen}`}>
        <div className="hamburger-links" onClick={handleClick}>
          <Link
            to="home" 
            spy={true} 
            smooth={true} 
            duration={500} className="link-text">
            Will Metivier
          </Link>
        </div>
        <div className="hamburger-links" onClick={handleClick}>
          <Link
            to="projects" 
            spy={true} 
            smooth={true} 
            duration={500} className="link-text">
            Projects
          </Link>
        </div>
        <div className="hamburger-links" onClick={handleClick}>
          <Link
            to="about" 
            spy={true} 
            smooth={true} 
            duration={500} className="link-text">
            About Will
          </Link>
        </div>
        <div className="hamburger-links" onClick={handleClick}>
          <Link
            to="contact" 
            spy={true} 
            smooth={true} 
            duration={500} className="link-text">
            Contact Will
          </Link>
        </div>
      </div>
    </nav>
  )
}
