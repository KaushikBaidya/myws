import React from 'react'
import './singleProject.css'

const SingleProject = ({ img, link, name }) => {
  return (
    <div className="item">
      <div className="item-brw">
        <div className="item-circle a"></div>
        <div className="item-circle b"></div>
        <div className="item-circle c"></div>
      </div>
      <a href={link} target="_blank" rel="noreferrer">
        <img src={img} alt="" className="p-img" />
      </a>
    </div>
  )
}

export default SingleProject
