import React from 'react'
import './about.css'
import me from '../../assets/me-removebg-preview.png'

const About = () => {
  return (
    <div className="about">
      <div className="about-left">
        <div className="a-card">
          <img src={me} alt="me" className="a-img" />
        </div>
      </div>
      <div className="about-right">
        <h1 className="a-title">About Me</h1>
        <p className="a-sub">
          It is a long established fact that a reader will be distracted by the
          readable content.
        </p>
        <p className="a-desc">
          I am Skilled in HTML, CSS, JavaScript, ReactJS, Redux and working
          knowledge of Figma for UI/UX.
        </p>
        <div className="icon-container">
          <i class="fab fa-html5"></i>
          <i class="fab fa-css3-alt"></i>
          <i class="fab fa-bootstrap"></i>
          <i class="fab fa-js"></i>
          <i class="fab fa-react"></i>
          <i class="fab fa-node-js"></i>
          <i class="fas fa-database"></i>
          <i class="fab fa-github"></i>
        </div>
      </div>
    </div>
  )
}

export default About
