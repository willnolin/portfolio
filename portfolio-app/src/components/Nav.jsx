import React from 'react'
import "./Nav.css"
import { Link } from 'react-router-dom'


export default function Nav() {
  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <Link to="/"><h1 className="title is-2">Will Metivier</h1></Link>


        <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" className="navbar-menu">

        <div className="navbar-end">
          <Link to="/about"><button className="button is-primary is-outlined">About</button></Link>
          <Link to="/projects"><button className="button is-link is-outlined">Projects</button></Link>
          <Link to="/contact"><button className="button is-info is-outlined">Contact</button></Link>

        </div>
      </div>
    </nav>
  )
}
