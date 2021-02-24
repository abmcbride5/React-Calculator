import React from 'react';
import Table from './table';
import Input_clear from './input_clear';
import findValue from '../helperFunctions/operationFunctions';

class Calculator extends React.Component {

    constructor(props){
        super();
        this.state = {
            input: [],
        }
        this.setInput = this.setInput.bind(this);
        this.setEquality = this.setEquality.bind(this);
        this.setClear = this.setClear.bind(this);
    }

    setInput(num) {
        let input = this.state.input;
        let newInput = input.concat(num);
        this.setState({
            input: newInput
        })
    }

    setEquality(){
        let value = findValue(this.state.input);
        this.setState({
            input: value
        })
    }
    setClear(){
        this.setState({
            input: []
        })
    }
  
  render() {
      return (
    <div className="calculator">
      <Input_clear input={this.state.input} setClear={this.setClear} />
     <Table setInput={this.setInput} setEquality={this.setEquality} />
    </div>
  )}
}

export default Calculator;