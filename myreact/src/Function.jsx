import { useState } from "react"
function FunctionComponent() {
    const [count, setCount] = useState(100)
    const [count1, setCount1] = useState(10)
    function handelClick() {
        setCount(count + 10)
        setCount1(count1 + 1)
    }
    return (
        <div>
            <h1>Function Component</h1>
            <h1>{count}</h1>
            <h2>{count1}</h2>
            <button
                onClick={handelClick}
            >Increment</button>
        </div>
    )
}

export default FunctionComponent