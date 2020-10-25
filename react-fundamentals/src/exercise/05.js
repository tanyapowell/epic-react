// Styling
// http://localhost:3000/isolated/exercise/05.js

import React from 'react'
import '../box-styles.css'

const Box = ({children, size, color}) => (
  <div className={`box box--${size}`} style={{backgroundColor: `${color}`}}>
    {children}
  </div>
)

function App() {
  return (
    <div>
      <Box size="small" children="small lightblue box" color="lightblue"/>
      <Box size="medium" children="medium pink box" color="pink"/>
      <Box size="large" children="large orange box" color="orange"/>
    </div>
  )
}

export default App
