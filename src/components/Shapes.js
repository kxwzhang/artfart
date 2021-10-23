import React from 'react'
import * as R from 'ramda'

const handleAction = (e, cursorState, setCursorState, drawings, setDrawings, shapeId) => {
  if (cursorState.isDeleting) {
    console.log('State is in deleting...')
    /* Grabs index of shape that is to be deleted */
    const drawingIndex = R.findIndex(R.propEq('shapeId', shapeId))(drawings)
    /* Slice it out of the drawings state */
    const drawingsAfterDeletion = R.concat(
      R.slice(0, drawingIndex, [...drawings]), 
      R.slice(drawingIndex + 1, drawings.length,[...drawings])
    )
    setDrawings(drawingsAfterDeletion)
    setCursorState({ ...cursorState, isDeleting: false })
  }
}

/* Dynamic Component for defining shapes */
export const Shape = ({ drawing, cursorState, setCursorState, drawings, setDrawings }) => {
  const { type, startX, startY, shapeId, color } = drawing
  const props = [cursorState, setCursorState, drawings, setDrawings, shapeId]

  switch (type) {
    case 'circle':
      return (
        <circle 
          cx={startX} 
          cy={startY} 
          r="50" 
          fill={color}
          onClick={e => handleAction(e, ...props)} 
        />
      )
    case 'rectangle':
      return (
        <rect 
          x={startX} 
          y={startY} 
          width="30" 
          height="30" 
          fill={color}
          onClick={e => handleAction(e, ...props)} 
        />
      )
    case 'line':
      const endX = startX + 50
      const endY = startY + 50
      return (
        <line 
          x1={startX} 
          x2={endX} 
          y1={startY} 
          y2={endY} 
          stroke={color}
          strokeWidth="5" 
          onClick={e => handleAction(e, ...props)} 
        />
      )
    default:
      break
  }
}