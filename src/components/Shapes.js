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
  const { type, startX, startY, shapeId } = drawing
  const props = [cursorState, setCursorState, drawings, setDrawings, shapeId]

  switch (type) {
    case 'circle':
      return (
        <circle 
          cx={startX} 
          cy={startY} 
          r="50" 
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
          onClick={e => handleAction(e, ...props)} 
        />
      )
    case 'line':
      return (
        <line 
          x1={startX} 
          x2={"50"} 
          y1={startY} 
          y2="150" 
          stroke="black" 
          strokeWidth="5" 
          onClick={e => handleAction(e, ...props)} 
        />
      )
    default:
      break
  }
}