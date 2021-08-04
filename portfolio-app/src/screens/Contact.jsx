import React from 'react'
import "./Contact.css"
import github from "../assets/images/github_thumb.png"
import linkedin from "../assets/images/linked_icon.png"
import email from "../assets/images/email_icon.png"


export default function Contact() {
  return (
    <div className="contact-container">
      <h1 className="contact-title">Will wants to hear from you!</h1>
      <a href="https://www.linkedin.com/in/willnolinmetivier/"><img src={linkedin} alt="linkedin" className="icons" /></a>
      <a href="https://github.com/willnolin"><img src={github} alt="github" className="icons" /></a>
      <h1 className="contact-title">...email him..</h1>
      <a href="https://mail.google.com/"><img src={email} alt="email" className="icons" /></a>
      <h1 className="email-address">willnolin@gmail.com</h1>
    </div>
  )
}
