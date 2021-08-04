import React, { useState } from 'react'
import "./Nav.css"
import Volume from './Volume'
import { Link } from 'react-router-dom'
import logo from '../assets/images/will-metivier-logo.png'
// import volumeIcon from '../assets/images/volume.png'
// import volumeMuteIcon from '../assets/images/volume-mute.png'

export default function Nav(props) {
  const { volume, setVolume } = props;
  const [activeClass, setActiveClass] = useState("");
  const [isActive, setIsActive] = useState(false)
  const [hamburgerOpen, setHamburgerOpen] = useState('')
  // const [showMute, setShowMute] = useState('')
  // const [showVolume, setShowVolume] = useState('block')

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
        <Link to="/"> <img src={logo} alt="will-metivier-logo" />
          {/* <h1 className="title is-2">Will Metivier</h1> */}
        </Link>

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
          <Link to="/about"><button className="button is-black is-outlined">About</button></Link>
          <Link to="/projects"><button className="button is-link is-outlined">Projects</button></Link>
          <Link to="/contact"><button className="button is-info is-outlined">Contact</button></Link>

        </div>
      </div>
      <div className={`hamburger-menu-content ${hamburgerOpen}`}>
        <div className="hamburger-links" onClick={handleClick}><Link to="/" className="link-text">Will Metivier</Link></div>
        <div className="hamburger-links" onClick={handleClick}><Link to="/about" className="link-text">About Will</Link></div>
        <div className="hamburger-links" onClick={handleClick}><Link to="/projects" className="link-text">Projects</Link></div>
        <div className="hamburger-links" onClick={handleClick}><Link to="/contact" className="link-text">Contact Will</Link></div>
      </div>
    </nav>
  )
}
