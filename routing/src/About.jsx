import React from 'react'
import { Link, Outlet } from "react-router-dom"

function About() {
    return (
        <>
            <h1>Welcome to about page</h1>

            <Link to="sub">Subscription</Link> <br />
            <Link to="blogs">Blogs</Link> <br />
            <Link to="career">Careers</Link> <br />

            <div style={{ margin: "50px", backgroundColor: "green" }}>
                <Outlet />
            </div>
        </>
    )
}

export default About