import './App.css';
import React, { useState } from 'react'
import * as R from 'ramda'
import CreateShape from './components/CreateShape'
import DeleteShape from './components/DeleteShape';
import { mouseDown } from './utils/ShaperHelpers'
import { Shape } from './components/Shapes'

function App() {
  /* States */
  const initialCursorState = {
    startX: 0,
    startY: 0,
    isDrawing: false,
    isDeleting: false,
    type: null,
    shapeId: null,
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

  const DeleteButton = () => {
    return (
      <DeleteShape 
        cursorState={cursorState}
        setCursorState={setCursorState}
        drawings={drawings}
        setDrawings={setDrawings}
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
          <DeleteButton />
        </div>
      </div>
      <svg width="100%" height="100vh" className="Canvas">
        {!R.isEmpty(drawings) &&
        R.map((drawing) => {
          return (
            <Shape 
              key={drawing.shapeId} 
              drawing={drawing} 
              drawings={drawings} 
              setDrawings={setDrawings} 
              cursorState={cursorState} 
              setCursorState={setCursorState}
            />
          )
        })(drawings)}
      </svg>
    </div>
  )
}

export default App;
