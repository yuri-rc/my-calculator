import React, { Component } from "react";
import './Display.css'

class Display extends Component {
  render() {
    return (
      <div className="display-content">
        <p>{this.props.displayNumber}</p>
      </div>
    )
  }
}

export default Display