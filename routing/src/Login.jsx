import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Login() {
    const navigate = useNavigate()
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const user = { username: "abcdef", password: "123456" }
    function handelSubmit(e) {
        e.preventDefault()
        if (!username || !password) {
            alert("provide all fields before submit")
        }
        else if (username.length < 6 || password.length < 6) {
            alert("provide correct inputs")
        }
        else {
            if (username == user.username && password == user.password) {
                navigate("/")
            }
            else {
                alert("inccorect login details")
            }
        }
    }
    return (
        <div>
            <h1>Login to the Website</h1>
            <form onSubmit={handelSubmit}>
                <table>
                    <tr>
                        <td><label htmlFor="username">Username :</label></td>
                        <td><input type="text" id='username'
                            onChange={(e) => setUsername(e.target.value)} value={username}
                        /></td>
                    </tr>
                    <tr>
                        <td><label htmlFor="password">Password :</label></td>
                        <td><input type="password" id='password'
                            onChange={(e) => setPassword(e.target.value)} value={password}
                        /></td>
                    </tr>
                    <tr>
                        <td><button type="submit">Login</button></td>
                    </tr>
                </table>
            </form>
        </div>
    )
}

export default Login