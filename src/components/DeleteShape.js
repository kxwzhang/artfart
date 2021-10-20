import React from 'react'

const DeleteShape = ({
  cursorState,
  setCursorState,
}) => {
  const handleDeleteShape = (e) => {
    console.log('Entering deleting state...')
    setCursorState({ ...cursorState, isDeleting: true })
  }

  return (
    <div>
      <button 
        onClick={(e) => handleDeleteShape(e)}
        className="ShapeButton"
        style={{ color: "red" }}
      >
        Delete
      </button>
    </div>
  )
}

export default DeleteShape
