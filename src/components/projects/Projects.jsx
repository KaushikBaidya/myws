import React from 'react'
import SingleProject from '../singleProject/SingleProject'
import './projects.css'

const Projects = () => {
  return (
    <div className="itemlist">
      <div className="il-text">
        <h1 className="il-title">My Projects</h1>
      </div>

      <div className="il-list">
        <SingleProject />
        <SingleProject />
        <SingleProject />
        <SingleProject />
        <SingleProject />
        <SingleProject />
      </div>
    </div>
  )
}

export default Projects
