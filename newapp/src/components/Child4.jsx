import React from 'react'
import { useCount } from '../context/CountContext'
import { useColor } from '../context/ColorContext'

function Child4() {
    const { count, setCount } = useCount()
    const { color, setColor } = useColor()

    return (
        <div style={{ background: color }}>
            Child4
            <h1>{count}</h1>
            <button onClick={() => setCount(count - 1)}
            >Decrement</button>
            <button onClick={() => setColor(pre => {
                if (pre == "green") {
                    return "red"
                } else {
                    return "green"
                }
            })}>Change color</button>
        </div>
    )
}

export default Child4