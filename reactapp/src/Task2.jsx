import React, { useState } from 'react'

function Task2() {
    const [count, setCount] = useState(0)
    const checkPrime = (number) => {
        if (number <= 1) return false
        if (number == 2) return true
        if (number % 2 == 0) return false
        let flag = true
        for (let i = 3; i < Math.trunc(number / 2); i++) {
            if (number % 2 == 0) {
                flag = false
                return flag
            }
        }
        return flag
    }
    return (
        <>
            <div>
                <button onClick={() => setCount(count + 1)}>+</button>
                <b>{count}</b>
                <button onClick={() => setCount(count - 1)}>-</button>
            </div>
            <div>
                {
                    count > 0 ? count % 2 == 0 ? <h1>{count} is even</h1> : <h1>{count} is odd</h1> :
                        count == 0 ? <h1>{count} is zero</h1> : <h1>{count} is negative</h1>
                }
                {
                    checkPrime(count) && <h1>{count} is a prime number</h1>
                }
            </div>
        </>
    )
}

export default Task2