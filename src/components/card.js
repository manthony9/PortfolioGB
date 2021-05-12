import React from "react"
import "./card.css"

const Card = props => (
  <a href="https://ang-spoti.vercel.app">
    <div className="Card">
      <img src={props.image} />
      <h3>{props.title}</h3>
      <p>{props.text}</p>
    </div>
  </a>
)

export default Card
