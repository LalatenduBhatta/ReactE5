import React, { useState } from 'react'

function Task1() {
    const [flag, setFlag] = useState(true)
    function handelColor() {
        setFlag(!flag)
    }
    return (
        <>
            <div style={{
                height: "200px", width: "500px",
                textAlign: "center", alignContent: "center",
                border: "2px solid black", background: flag ? "blue" : "red"
            }}>
                <button onClick={handelColor}>{flag ? "red" : "blue"}</button>
            </div>
        </>
    )
}

export default Task1