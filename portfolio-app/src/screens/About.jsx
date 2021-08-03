import React from 'react'
import "./About.css"

export default function About() {
  return (
    <div className="about-container">
      <div className="about-text">
        <h2 className="about-title">About Will</h2>
        <p className="about-paragraph">Will is a Software Engineer building full stack applications with React JS,
          Ruby on Rails, Express, MongoDB, PostgreSQL, Javascript and html5.
          Will is also an experienced freelance Audio Engineer with a demonstrated history of working in the music industry.
          He takes pride in delivering a great customer experience, which he has proven through years of customer
          service and his recent group collaborations and git workflow at General Assembly.
          <br />
          <br />
          He is a compassionate professional with a certificate in Software Engineering from General Assembly,
          a BA focused in Film, Television, Computer Science
          from University of Vermont and a certificate in Audio Engineering from Recording Connection.</p>
      </div>
      <div className="about-photo">
        <img src="https://res.cloudinary.com/willnolin/image/upload/v1628007781/Will_hq87ar.png"
          alt="will-pic" className="will-image" />
      </div>
    </div>
  )
}
