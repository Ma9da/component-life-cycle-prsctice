import React, { Component } from 'react'
import Counter from './Counter'

export class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      mount: true
    }
    this.mountCounter = () => this.setState({ mount: true })
    this.unmountCounter = () => this.setState({ mount: false })
  }
  render() {
    return (
      <div className="container">
        <div>
          <button onClick={this.mountCounter} disabled={this.state.mount}>mount counter</button>
          <button onClick={this.unmountCounter} disabled={!this.state.mount}>unmount counter</button>
        </div>
        {this.state.mount ? <Counter /> : null}
      </div>
    )
  }
}

export default App