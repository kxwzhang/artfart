import React from 'react'
import { Circle, Rectangle, Line } from '../components/Shapes'

export const getElOffset = el => {
  const shape = el.getBoundingClientRect()

  return {
    top: shape.top + window.pageYOffset,
    left: shape.left + window.pageXOffset
  }
}

export const getCoords = e => {
  if (e.pageX || e.pageY) return { x: e.pageX, y: e.pageY }

  return {
    x: e.clientX,
    y: e.clientY
  }
}



export const mapShape = (shape) => {
    switch (shape) {
      case 'circle':
        return <Circle />
      case 'rectangle':
        return <Rectangle />
      case 'line':
        return <Line />
    
      default:
        break;
    }
  }