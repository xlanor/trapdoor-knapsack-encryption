import React, { Component } from 'react';
import { withNavigation } from 'react-navigation';

import { View, Button, Text } from 'react-native';

import ModuloAndMultiplicator from './ModuloAndMultiplicator'
import ErrorMessage from './ErrorMessage'

class GcdParent extends Component {
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
        showNextPage:false,
      };
  }
  calculateGCD = () => {
    const { valueM, valueN } = this.state;
    const { navigation } = this.props;
    let localValueM = valueM;
    let localValueN = valueN;
    if (localValueM > localValueN) {let temp = localValueN; localValueN = localValueM; localValueM = temp;}
    let loop = true;
    let computed = 0;
    while(localValueM) {
      var t = localValueM;
      localValueM = localValueN % localValueM;
      localValueN = t;
      console.log(`M ${localValueM} N ${localValueN}`)
    }
    let newVal = localValueN == 1 ? true:false;
    console.log(localValueN)
    this.setState({ computedGCD:localValueN, showGcd: newVal, showNextPage: newVal });
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
    const { errorMessage, showError, showGcd, computedGCD, showNextPage } = this.state;
    const { navigation } = this.props;
    const { valueM, valueN } = this.state;
    return (
      <View>
        <ModuloAndMultiplicator updateValue={this.updateValueM} />
        <ModuloAndMultiplicator updateValue={this.updateValueN} />
        <ErrorMessage errorMessage={errorMessage} showMessage={showError} />
        <Button title="Calculate GCD" onPress={() => {this.calculateGCD()} }/>
        {
          showGcd == 1? (
            
              showNextPage ? (
              <Button title="Next Page" onPress = {() => {
                  this.setState({ 
                    showGcd: false,
                    computedGCD: 5,
                    showNextPage:false}, ()=>{
                      navigation.navigate('SelectPublicKey', { valueM: valueM, valueN: valueN})
                  })
              }}/>
              ): null
            
          ):
            <Text> 
              GCD Wrong {computedGCD}
            </Text>
        }
      </View>
    );

    
  }
}
export default withNavigation(GcdParent);