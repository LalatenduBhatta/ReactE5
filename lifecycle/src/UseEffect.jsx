import { useState, useEffect } from 'react'

function UseEffect() {
    const [count1, setCount1] = useState(0)
    const [count2, setCount2] = useState(10)
    // //useEffect without second Arg.
    // useEffect(() => {
    //     //executes after every render of the component
    //     // setCount1(count1 + 1)//(should not perform any direct state changes to avoid infinite render)
    //     console.log("1st useEffect syntax");
    // })
    // //useEffect with empty dependency array as second arg.
    // useEffect(() => {
    //     //to perform any sideEffects after the initial render for one time
    //     //it executes onlu for once after 1st render
    //     console.log("useEffect with empty dependency");
    // }, [])
    // //useEffect with dependencies array as second arg
    // useEffect(() => {
    //     //executes only after the dependencies array state or props updation
    //     //use to perform some sideEffects or operations by depending on the props/state values
    //     console.log("useEffect with dependencies");
    //     if (count1 == 5) {
    //         setCount2(500)
    //     }
    // }, [count1])

    //useEffect with a return function
    // useEffect(() => {
    //     console.log("this is the 4th syntax");
    //     return () => {
    //         console.log("clean-up function");
    //     }
    // })
    return (
        <>
            {console.log("this is render()")}
            <h1>useEffect() Hook</h1>
            <h1>count1 = {count1}</h1>
            <h1>count2 = {count2}</h1>
            <button onClick={() => setCount1(count1 + 1)}>Change Count1</button>
            <button onClick={() => setCount2(count2 + 10)}>Change Count2</button>
        </>
    )
}

export default UseEffect