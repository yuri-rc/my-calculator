import React, { Component } from "react";
import './Buttons.css'
import Button from "./Button";

class Buttons extends Component {
  render() {
    return (
      <div className="buttons-content">
        <Button
          buttonType='button-ac'
          name='AC'
          onClick={this.props.handleClear}
        />
        <Button
          buttonType='blue-button'
          name='π'
          onClick={this.props.hadlePI}
        />
        <Button
          buttonType='blue-button'
          name='^'
          onClick={this.props.handleOperation}
        />
        <Button
          buttonType='blue-button'
          name='/'
          onClick={this.props.handleOperation}
        />
        <Button
          buttonType='normal-button'
          name='7'
          onClick={this.props.handleSetNumber}
        />
        <Button
          buttonType='normal-button'
          name='8'
          onClick={this.props.handleSetNumber}
        />
        <Button
          buttonType='normal-button'
          name='9'
          onClick={this.props.handleSetNumber}
        />
        <Button
          buttonType='blue-button'
          name='*'
          onClick={this.props.handleOperation}
        />
        <Button
          buttonType='normal-button'
          name='4'
          onClick={this.props.handleSetNumber}
        />
        <Button
          buttonType='normal-button'
          name='5'
          onClick={this.props.handleSetNumber}
        />
        <Button
          buttonType='normal-button'
          name='6'
          onClick={this.props.handleSetNumber}
        />
        <Button
          buttonType='blue-button'
          name='-'
          onClick={this.props.handleOperation}
        />
        <Button
          buttonType='normal-button'
          name='1'
          onClick={this.props.handleSetNumber}
        />
        <Button
          buttonType='normal-button'
          name='2'
          onClick={this.props.handleSetNumber}
        />
        <Button
          buttonType='normal-button'
          name='3'
          onClick={this.props.handleSetNumber}
        />
        <Button
          buttonType='blue-button'
          name='+'
          onClick={this.props.handleOperation}
        />
        <Button
          buttonType='button-0 normal-button'
          name='0'
          onClick={this.props.handleSetNumber}
        />
        <Button
          buttonType='normal-button'
          name='.'
          onClick={this.props.handleSetNumber}
        />
        <Button
          buttonType='button-equal'
          name='='
          onClick={this.props.handleResult}
        />
      </div>
    );
  }
}

export default Buttons;
