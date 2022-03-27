import React, { Component } from 'react'
import Counter from './Counter'

export class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      mount: true,
      ignoreProp: 0
    }
    this.mountCounter = () => this.setState({ mount: true })
    this.unmountCounter = () => this.setState({ mount: false })
    this.ignoreProp = () => this.setState({ ignoreProp: Math.random() })
  }
  render() {
    return (
      <div className="container">
        <div>
          <button onClick={this.mountCounter} disabled={this.state.mount}>mount counter</button>
          <button onClick={this.unmountCounter} disabled={!this.state.mount}>unmount counter</button>
          <button onClick={this.ignoreProp}>ignore prop</button>
        </div>
        {this.state.mount ?
          <Counter ignoreProp={this.state.ignoreProp} />
          : null}
      </div>
    )
  }
}

export default App