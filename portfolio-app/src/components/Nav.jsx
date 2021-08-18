import React, { useState } from 'react'
import "./Nav.css"
import Volume from './Volume'
import { Link } from 'react-router-dom'
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
        <a href="#home"> <img src={logo} alt="will-metivier-logo" className="logo"/>

</a>
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
        <a href="#projects"><button className="button is-link is-outlined">Projects</button></a>
        <a href="#about"><button className="button is-black is-outlined">About</button></a>
        <a href="#contact"><button className="button is-info is-outlined">Contact</button></a>

        </div>
      </div>
      <div className={`hamburger-menu-content ${hamburgerOpen}`}>
        <div className="hamburger-links" onClick={handleClick}><a href="#home" className="link-text">Will Metivier</a></div>
        <div className="hamburger-links" onClick={handleClick}><a href="#projects" className="link-text">Projects</a></div>
        <div className="hamburger-links" onClick={handleClick}><a href="#about" className="link-text">About Will</a></div>
        <div className="hamburger-links" onClick={handleClick}><a href="#contact" className="link-text">Contact Will</a></div>
      </div>
    </nav>
  )
}
