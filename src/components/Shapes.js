import React from 'react'

export const Circle = ({ props }) => {
  const { startX, startY } = props
  return (
      <circle cx={startX} cy={startY} r="50" />
  )
}

export const Rectangle = ({ props }) => {
  const { startX, startY } = props
  return (
      <rect x={startX} y={startY} width="30" height="30" />
  )
}

export const Line = ({ props }) => {
  const { startX, startY } = props
  return (
    <line x1={startX} x2={"50"} y1={startY} y2="150" stroke="black" strokeWidth="5" />
  )
}