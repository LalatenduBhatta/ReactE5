import { Component } from 'react'

class Third extends Component {
    constructor() {
        super()
        this.msg = "It's a class component"
    }
    render() {
        console.log(this.props);
        return (
            <div>
                <h1>{this.msg}</h1>
                <h1>NAME={this.props.name}</h1>
                <h1>AGE={this.props.age}</h1>
                <h1>MSG={this.props.msg}</h1>
            </div>
        )
    }
}

export default Third