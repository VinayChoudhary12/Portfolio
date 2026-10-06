import React from 'react'
import "./Card.css"
import mern from "../../assets/mern.png"
function Card({title,image}) {
  return (

    <div className="Card">
    <h1>{title}</h1>
      <div className="hovercard">
        <img src={image} alt="img" ></img>
      </div>

    </div>
  )
}

export default Card
