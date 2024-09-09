import React from 'react'
import Child1 from './Child1'
import { UserContextWrapper } from './UserContext'

function App() {
    return (
        <>
            <UserContextWrapper>
                <Child1 />
            </UserContextWrapper>
        </>
    )
}

export default App