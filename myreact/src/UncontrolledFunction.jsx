import React, { useRef } from 'react'

function UncontrolledFunction() {
    const usernameRef = useRef(null)
    const passwordRef = useRef(null)
    function handelSubmit(event) {
        event.preventDefault();
        let username = usernameRef.current.value
        let password = passwordRef.current.value
        console.log(username, password);
        // usernameRef.current.value = ""
        // passwordRef.current.value = ""
        event.target.reset()
    }
    return (
        <div>
            <h1>useRef() hook</h1>
            <form onSubmit={handelSubmit}>
                <label htmlFor="username">Username :</label>
                <input type="text" name="username" id="username" ref={usernameRef} />
                <label htmlFor="password">Password :</label>
                <input type="password" name="password" id="password" ref={passwordRef} />
                <button type='submit'>Login</button>
            </form>
        </div>
    )
}

export default UncontrolledFunction