import React from 'react'
import SingleProject from '../singleProject/SingleProject'
import './projects.css'
import { products } from '../../data'

const Projects = () => {
  return (
    <div className="itemlist">
      <div className="il-text">
        <h1 className="il-title">My Projects</h1>
      </div>

      <div className="il-list">
        {products.map((item) => (
          <SingleProject key={item.id} img={item.img} link={item.link} />
        ))}
      </div>
    </div>
  )
}

export default Projects
