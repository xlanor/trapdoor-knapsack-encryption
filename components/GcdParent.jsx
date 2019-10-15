import React, { Component } from 'react';

import { View, Button, Text } from 'react-native';

import ModuloAndMultiplicator from './ModuloAndMultiplicator'
import ErrorMessage from './ErrorMessage'

export default class GcdParent extends Component {
  constructor(props){
      super(props);
      this.state = {
        upperLimit: 1000,
        lowerLimit: 1,
        valueM: '',
        valueN: '',
        showGCDButton: false,
        showError: false,
        errorMessage: '',
        showGcd: false,
        computedGCD: 5,
      };
  }
  calculateGCD = () => {
    const { valueM, valueN } = this.state;
    let localValueM = valueM;
    let localValueN = valueN;
    if (localValueM > localValueN) {let temp = localValueN; localValueN = localValueM; localValueM = temp;}
    let loop = true;
    while (loop) {
        if (localValueM == 0) {
          this.setState({ computedGCD:localValueN, showGcd: true });
          loop = false;
        }
        localValueN %= localValueM;
        if (localValueN == 0){
          this.setState({ computedGCD:localValueM, showGcd: true });
          loop = false;
        }
        if(loop) localValueM %= localValueN;
    }
  }
  isValidNumber = (stringToVerify) => {
    let str = String(stringToVerify);
    console.log(`Received String ${str}`)
    let reg = new RegExp('^[0-9]+$');
    return str.match(reg) === null ? false: true;
  }
  validateMandN = () => {
    const { valueM, valueN } = this.state;
    console.log(`Checking value ${valueM} and ${valueN}`)
    let csl = this.isValidNumber(valueM) ? "" : "Modulus is not an integer!";
    let showErr = csl === "" ? false : true;
    if(!showErr){
      csl = this.isValidNumber(valueN)  ? "" : "Multiplier is not an integer";
    }
    showErr = csl === "" ? false : true;
    this.setState({
        errorMessage: csl,
        showError: showErr,
    })

  }
  updateValueM = (valueMInput) =>{
      console.log(`Received value ${valueMInput}`)
      this.setState({ valueM: valueMInput }, () => { this.validateMandN() })

  }
  updateValueN = (valueNInput) => {
      console.log(`Received value ${valueNInput}`)
      let csl = this.isValidNumber(valueNInput)
      this.setState({ valueN: valueNInput }, () => { this.validateMandN() })
  }
  render(){
    const { errorMessage, showError, showGcd, computedGCD } = this.state;
    return (
      <View>
        <ModuloAndMultiplicator updateValue={this.updateValueM} />
        <ModuloAndMultiplicator updateValue={this.updateValueN} />
        <ErrorMessage errorMessage={errorMessage} showMessage={showError} />
        <Button title="Calculate GCD" onPress={() => {this.calculateGCD()} }/>
        {
          showGcd ?
          <Text >Calculated GCD: {computedGCD}</Text>:
          null
        }
        {
          showGcd ? 
            computedGCD != 1 ?
              <Text>GCD of m and n must be 1!</Text>:
              null:
          null
        }
      </View>
    );

    
  }
}