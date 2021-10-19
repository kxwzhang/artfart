import React, { useState } from 'react'
import { getElOffset, getCoords, mapShape } from '../utils/ShaperHelpers'
import { Circle, Rectangle, Line } from '../components/Shapes'

const CreateShape = ({ 
  shape, 
  cursorState,
  setCursorState,
  drawings,
  setDrawings,
}) => {
  /* Handle mouse down */
  const mouseDown = (e) => {
    let mouseCoords = getCoords(e)
    let offset = getElOffset(e.target)
    console.log('offset', offset)
    const startX = mouseCoords.x - offset.left
    const startY = mouseCoords.y - offset.top
    setCursorState({ 
      ...cursorState, 
      width: 5, 
      height: 5, 
      offsetX: offset.left, 
      offsetY: offset.top,
      startX: startX, 
      startY: startY, 
      previousX:startX, 
      previousY:startY, 
      isDrawing: true, 
    })
  }

  const handleCreateShape = (e) => {
    console.log('Creating shape...')
    setCursorState({ ...cursorState, isDrawing: true })
    mouseDown(e)
  }

  return (
    <div>
      <button onMouseDown={(e) => handleCreateShape(e)}>{mapShape(shape)}</button>
    </div>
  )
}

export default CreateShape
