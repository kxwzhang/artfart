import React from 'react'

const CreateShape = ({ 
  shape, 
  cursorState,
  setCursorState,
}) => {
  const handleCreateShape = (e) => {
    console.log('Entering drawing state...')
    setCursorState({ ...cursorState, isDrawing: true, type: shape })
  }

  return (
    <div>
      <button 
        onClick={(e) => handleCreateShape(e)}
        className="ShapeButton"
      >
        {shape}
      </button>
    </div>
  )
}

export default CreateShape
