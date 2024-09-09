import React, { useEffect, useState } from 'react'

function Example1() {
    const [data, setData] = useState([])
    const url = "https://jsonplaceholder.typicode.com/users"
    useEffect(() => {
        // fetch(url).then((res) => res.json())
        //     .then((d) => setData(d))
        //     .catch(err => console.log(err))

        fetchData()
    }, [])
    async function fetchData() {
        let response = await fetch(url)
        let data = await response.json()
        setData(data)
    }

    return (
        <>
            <h1>Performing Async Operations in react</h1>
            <h2>All data of 10 users</h2>
            <table border={1} style={{ borderCollapse: "collapse" }} cellPadding={15}>
                <thead bgcolor={"black"} style={{ color: "white" }}>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>UserName</th>
                        <th>Email</th>
                        <th>Phone</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map(e => {
                            return (
                                <tr key={e.id}>
                                    <td>{e.id}</td>
                                    <td>{e.name}</td>
                                    <td>{e.username}</td>
                                    <td>{e.email}</td>
                                    <td>{e.phone}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </>
    )
}

export default Example1