import React from 'react'
import "./Text.css";

const Text = ({size, color, position, value, className}) => {
  return (
    <div>
      <p className={`${size} ${color} ${position} ${value} ${className}`}>{value}</p>
    </div>
  )
}

export default Text
