import React from 'react'
import { useCount } from '../context/CountContext'

function Chiild3() {
    const { count, setCount } = useCount()
    // console.log(count, setCount);

    return (
        <div>
            Chiild3
            <h1>{count}</h1>
            <button
                onClick={() => setCount(count + 1)}
            >
                Increment</button>
        </div>
    )
}

export default Chiild3