import { useState } from "react";
const ControlledFunction = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [usernameError, setUsernameError] = useState("")
    function usernameHandel(event) {
        let value = event.target.value
        if (value.length < 6) {
            setUsernameError("username is too short")
        } else {
            setUsernameError("")
        }
        setUsername(value)
    }
    const submitHandeler = (event) => {
        event.preventDefault()
        if (!username || !password) {
            alert("provide all fields before login")
        }
        else if (usernameError) {
            alert("provide correct inputs")
        }
        else {
            console.log(username, password);
            setUsername("")
            setPassword("")
        }
    }
    return (
        <div>
            <h1>Controlled Function Component</h1>
            <form onSubmit={submitHandeler}>
                <label>Username :</label>
                <input type="text" id="username" onChange={usernameHandel} value={username} />
                <span style={{ color: "red" }}>{usernameError}</span> <br /> <br />
                <label >Password :</label>
                <input type="password" onChange={(event) => setPassword(event.target.value)} value={password} />
                <br />  <br />
                <button type="submit">Login</button>
            </form>
            <h1>Username={username}</h1>
            <h1>password={password}</h1>
        </div>
    )
}

export default ControlledFunction