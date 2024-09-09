import React, { useEffect, useState } from 'react'

function Example3() {
    const [count, setCount] = useState(0)
    const [bgcolor, setBgolor] = useState("white")
    useEffect(() => {
        if (count > 0 && count % 2 == 0) {
            setBgolor("green")
        }
        else if (count > 0 && count % 2 != 0) {
            setBgolor("red")
        }
        else if (count < 0) {
            setBgolor("blue")
        } else {
            setBgolor("white")
        }
    }, [count])
    return (
        <>
            <h1>Using Dependencies in useEffect</h1>
            <div style={{
                height: "200px", textAlign: "center", border: "2px solid black",
                width: "500px", margin: "auto", background: bgcolor, alignContent: "center"
            }}>
                <button onClick={() => setCount(count + 1)}>+</button>
                <b>{count}</b>
                <button onClick={() => setCount(count - 1)}>-</button>
            </div>
        </>
    )
}

export default Example3