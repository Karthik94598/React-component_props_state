import React, { Component } from 'react'

export default class  extends Component {
    constructor(){
        super()
        this.state={
            Text:"Connect me on linkedin"
        }
    }
    changeText=()=>{
        this.setState({
            Text:"ThankYou for Connecting , Let's start to share knowledge! "
        })
    };
  render() {
    return (
      <div>
        <h1>States</h1>
        <p>{this.state.Text}</p>
        <button onClick={this.changeText}>Connect</button>
      </div>
    )
  }
}
