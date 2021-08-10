import React from 'react'
import "./Footer.css"
import github from "../assets/images/github_thumb.png"
import linkedin from "../assets/images/linked_icon.png"
import email from "../assets/images/email_icon.png"
import resume from "../assets/resources/WillM_Resume.pdf"
import FileSaver from 'file-saver'

export default function Footer() {

  const saveFile = () => {
    FileSaver.saveAs(
      resume,
      "WillM_Resume.pdf"
    );
  }
  return (

    <footer className="footer">
      <div className="content is-flex has-text-centered is-justify-content-space-around">
        <a href="https://www.linkedin.com/in/willnolinmetivier/"><img src={linkedin} alt="linkedin" className="footer-icons" /></a>
        <a href="https://github.com/willnolin"><img src={github} alt="github" className="footer-icons" /></a>
        <a href="https://mail.google.com/"><img src={email} alt="email" className="footer-icons" /></a>
        <button className="button is-black is-outlined" onClick={saveFile}>
          Download Resume
        </button>
      </div>

    </footer>

  )
}
