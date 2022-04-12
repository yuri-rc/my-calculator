import React, { Component } from "react";
import './Interface.css';
import Display from "./Display";
import Buttons from './Buttons';

class Interface extends Component {

  constructor(pros) {
    super(pros)

    this.handleSetNumber = this.handleSetNumber.bind(this)
    this.handleClear = this.handleClear.bind(this)
    this.handleOperation = this.handleOperation.bind(this)
    this.handleResult = this.handleResult.bind(this)
    this.hadlePI = this.hadlePI.bind(this)

    this.state = {
      current: '',
      accumulator: '',
      operator: '',
    }
  }

  handleSetNumber(event) {
    const { current } = this.state
    this.setState({
      current: current + event.target.name,
    });

  }

  handleOperation(event) {
    const { current, operator } = this.state
    if (operator === '') {
      this.setState({
        operator: event.target.name,
        accumulator: current,
        current: '',
      });
    }
  }

  handleResult() {
    const { current, accumulator, operator } = this.state
    console.log(operator);
    let result = Number(accumulator);
    switch (operator) {
      case '+':
        result += Number(current)
        break
      case '-':
        result -= Number(current)
        break
      case '*':
        result *= Number(current)
        break
      case '/':
        result /= Number(current)
        break
      case '^':
        result = Math.pow(result, current)
        break
      default:
        result = current
    }
    this.setState({
      current: result,
      operator: '',
      accumulator: '',
    })

  }

  handleClear() {
    this.setState({
      current: '',
      accumulator: '',
    })
  }

  hadlePI() {
    this.setState({
      current: Math.PI
    })
  }

  render() {
    return (
      <main>
        <Display displayNumber={this.state.current} />
        <Buttons
          handleSetNumber={this.handleSetNumber}
          handleClear={this.handleClear}
          handleOperation={this.handleOperation}
          handleResult={this.handleResult}
          hadlePI={this.hadlePI}
        />
      </main>
    )
  }
}

export default Interface