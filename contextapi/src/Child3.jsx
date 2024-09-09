import React from 'react'
import { useUser } from './UserContext'

function Child3() {
    const user = useUser()
    console.log(user);
    return (
        <div>
            Child3
            <h1>username:{user.username}</h1>
            <h1>age:{user.age}</h1>
            <h1>address:{user.address}</h1>
        </div>
    )
}

export default Child3