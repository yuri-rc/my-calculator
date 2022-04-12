import React, { Component } from "react";
import './Buttons.css'

class Button extends Component {
  render() {
    return (
      <button
        className={this.props.buttonType}
        onClick={this.props.onClick}
        name={this.props.name}
      >
      {this.props.name}
      </button>
    );
  }
}

export default Button;
