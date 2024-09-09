import React, { useEffect, useState } from 'react'
import axios from "axios"

function Axios() {
    const [data, setData] = useState([])
    useEffect(() => {
        // axios.get("https://jsonplaceholder.typicode.com/users")
        //     .then(data => setData(data.data))
        //     .catch(error => console.log(error))

        fetchData()
    })
    const fetchData = async () => {
        let data = await axios.get("https://jsonplaceholder.typicode.com/users")
        setData(data.data)
    }
    return (
        <div>
            <h1>AXIOS</h1>
            {
                data.map((e) => {
                    return <li key={e.id}>{e.name}</li>
                })
            }
        </div>
    )
}

export default Axios