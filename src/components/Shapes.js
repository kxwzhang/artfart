import React from 'react'

export const Circle = ({ color }) => {
  return (
    <svg style={{ height: "100px", width: "100px" }}>
      <circle cx="50" cy="50" r="50"/>
    </svg>
  )
}

export const Rectangle = ({ color }) => {
  return (
    <svg style={{ height: "100px", width: "100px" }}>
      <rect x="10" y="10" width="30" height="30"/>
    </svg>
  )
}

export const Line = ({ color = 'black' }) => {
  return (
    <svg style={{ height: "100px", width: "100px" }}>
      <line x1="10" x2="50" y1="110" y2="150" stroke={color} strokeWidth="5"/>
    </svg>
  )
}