import React, { useState } from 'react'
import "./Task3.css"

function Task3() {
    const [circles, setCircles] = useState([])
    const createCircle = () => {
        let obj = {
            isSelected: false,
            id: Math.trunc(Math.random() * 10000)
        }
        setCircles([...circles, obj])
    }
    function selectCircle(id) {
        let newCircles = circles.map(ele => {
            if (ele.id == id) {
                ele.isSelected = !ele.isSelected
            }
            return ele
        })
        setCircles(newCircles)
    }
    function deleteCircle() {
        let newCircles = circles.filter(ele => !ele.isSelected)
        setCircles(newCircles)
    }
    return (
        <>
            <div className="buttons">
                <button onClick={createCircle}>Create Circle</button>
                <button onClick={deleteCircle}>Delete Circle</button>
            </div>
            <div className="info">
                <h1>No of Circles :{circles.length}</h1>
                <h1>No of Selected Circles :
                    {circles.filter(ele => ele.isSelected).length}</h1>
            </div>
            <div className="circles">
                {
                    circles.map(ele => {
                        return (
                            <div className="circle"
                                style={{
                                    backgroundColor:
                                        ele.isSelected ? "red" : "green"
                                }}
                                onClick={() => selectCircle(ele.id)}>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

export default Task3