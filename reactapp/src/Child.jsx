import React, { useState } from 'react'

function Child() {
    const [flag, setFlag] = useState(true)
    const [number, setNumber] = useState(24)
    return (
        <>
            <h1>This is child component</h1>
            {
                flag ? <h1>All the best for olympic gold in hockey </h1> :
                    <h2>Better luck next time</h2>
            }
            {number % 2 == 0 && <h1>{number} is an even number</h1>}
        </>
    )
}

export default Child