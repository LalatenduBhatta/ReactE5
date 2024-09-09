import React from 'react'

function Child({ name, getAddress }) {
    let address = "UP"
    function handelClick() {
        // console.log("btn is clicked");
        getAddress(address)
    }
    return (
        <div>
            <h1>Child component</h1>
            <button onClick={handelClick}>
                Send Data</button> <br />
            <b>{name}</b>
        </div>
    )
}

export default Child