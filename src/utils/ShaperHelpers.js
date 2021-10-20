import React from 'react'
import { v4 as uuidv4 } from 'uuid'
import { Circle, Rectangle, Line } from '../components/Shapes'

export const getElOffset = el => {
  const shape = el.getBoundingClientRect()

  return {
    top: shape.top + window.pageYOffset,
    left: shape.left + window.pageXOffset
  }
}

/* Grabs x and y coordinates at currennt cursor location on the page */
export const getCoords = e => {
  if (e.pageX || e.pageY) return { x: e.pageX, y: e.pageY }

  return {
    x: e.clientX,
    y: e.clientY
  }
}

/* Handle mouse down */
export const mouseDown = (e, cursorState, setCursorState, drawings, setDrawings) => {
  if (cursorState.isDrawing) {
    let mouseCoords = getCoords(e)
    let offset = getElOffset(e.target)
    const startX = mouseCoords.x - offset.left
    const startY = mouseCoords.y - offset.top

    const uuid = uuidv4()

    setDrawings([ ...drawings, ...[{
      startX: startX, 
      startY: startY, 
      type: cursorState.type,
      isDrawing: false,
      shapeId: uuid,
    }]])
    
    setCursorState({
      ...cursorState,
      isDrawing: false,
    })
  }
}