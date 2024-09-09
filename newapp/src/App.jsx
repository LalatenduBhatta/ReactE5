import React from 'react'
import { CountContextWrapper } from './context/CountContext'
import Child1 from './components/Child1'
import Child2 from './components/Child2'
import { ColorContextWrapper } from './context/ColorContext'

function App() {
  return (
    <>
      <ColorContextWrapper>
        <CountContextWrapper>
          <Child1></Child1>
          <Child2 />
        </CountContextWrapper>
      </ColorContextWrapper>
    </>
  )
}

export default App