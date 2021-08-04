import React from 'react'
import "./Footer.css"
import github from "../assets/images/github_thumb.png"
import linkedin from "../assets/images/linked_icon.png"
import email from "../assets/images/email_icon.png"

export default function Footer() {
  return (

    <footer className="footer">
      <div className="content has-text-centered">
        <a href="https://www.linkedin.com/in/willnolinmetivier/"><img src={linkedin} alt="linkedin" className="footer-icons" /></a>
        <a href="https://github.com/willnolin"><img src={github} alt="github" className="footer-icons" /></a>
        <a href="https://mail.google.com/"><img src={email} alt="email" className="footer-icons" /></a>
      </div>

    </footer>

  )
}
