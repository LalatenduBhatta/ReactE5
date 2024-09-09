import React, { Component } from 'react'

class ClassLifeCycle extends Component {
    constructor() {
        //this is the 1st method of mounting phase which initialize the varibale and state
        super()
        this.state = { count: 0, color: "red" }
    }
    static getDerivedStateFromProps(props, state) {
        //this is the second method of mounting phase and it returns state value from the props data

        //this method is also the 1st method of updating phase which everytime updates the state value
        //with props data after every state or props updation
        console.log("this is getDerivedStateFromProps()");
        return { color: props.color }
    }
    componentDidMount() {
        //this is the last method of mounting phase
        //it executes only for once after the initial render of the component
        //this method used for the side effects like data fetching and asynchronous operations
        console.log("this is componentDidMount()");
    }
    shouldComponentUpdate() {
        //this is the 2nd method of updation phase which defines the component will re-render or not
        // it returns boolean value the default return type is true 
        console.log("this is shouldComponentUpdate()");
        return true
    }
    getSnapshotBeforeUpdate(prevProps, prevState) {
        //this method is used to get the values of previous props and state data
        //using those we can perform any operation in the component
        //this method should be used along with the componentDidUpdate() method
        console.log("this is getSnapshotBeforeUpdate()");
        // console.log(prevState, prevProps);
        return null
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        //to perform any side effects for the component after updation of state or props data
        //this method is the last method of updation phase,it executes after component re-render
        console.log("this is componentDidUpdate()");
        // console.log(prevProps, prevState, snapshot);
    }
    componentWillUnmount() {
        //this method executes when the component is going to be remove from the DOM
        //this is used for the clean-up functionality of the state or props values of the component
        console.log("this is componentWillUnmount()")
    }

    render() {
        //this is the 3rd method of mounting method executes after the derived method
        //the 3rd method of updation phase after shouldComponentUpdate() method
        console.log("this is render()");
        return (
            <>
                <h1 style={{ color: this.state.color }}>Class Life Cycle Methods</h1>
                <h1>{this.state.count}</h1>
                <button onClick={() => this.setState({ count: this.state.count + 1 })}>Change Count</button>
                <h2>{this.props.color}</h2>
                <button onClick={() => this.setState({ color: "blue" })}>Change Color</button>
            </>
        )
    }
}

export default ClassLifeCycle