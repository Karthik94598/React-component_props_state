import React, { Component } from 'react'

export default class ctut extends Component {
  render() {
    return (
      <div>
        <h1>Hello {this.props.name}</h1>
        <p>I am reporting from class components.</p>

      </div>
    )
  }
}
