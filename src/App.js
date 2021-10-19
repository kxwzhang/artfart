import './App.css';
import React, { useState } from 'react'
import CreateShape from './components/CreateShape'
import { mapShape, mouseDown } from './utils/ShaperHelpers'

function App() {
  /* States */
  const initialCursorState = {
    startX: 0,
    startY: 0,
    isDrawing: false,
    type: null,
  }
  const [cursorState, setCursorState] = useState(initialCursorState)
  const [drawings, setDrawings] = useState([]) /* List of all shapes that are drawn */

  /* Grabs all local state for Button component */
  const ShapeButton = ({ shape }) => {
    return (
      <CreateShape 
        shape={shape} 
        cursorState={cursorState}
        setCursorState={setCursorState}
      />
    )
  }
  
  const shapes = ['circle', 'rectangle', 'line']

  return (
    <div 
      className="App" 
      onClick={(e) => mouseDown(e, cursorState, setCursorState, drawings, setDrawings)}
    >
      <div className="Nav">
        <div>Welcome to ArtFart</div>
        <div className="Controls">
          {shapes.map(shape => <ShapeButton shape={shape} />)}
        </div>
      </div>
      <svg width="100%" height="100vh" className="Canvas">
        {drawings.length > 0 &&
        drawings.map((drawing, index) => {
          const Shape = mapShape(drawing, index)
          return (
            Shape
          )
        })}
      </svg>
    </div>
  )
}

export default App;
