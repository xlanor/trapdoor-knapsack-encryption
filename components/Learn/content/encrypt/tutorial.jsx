import React, { Component } from 'React';

import { 
  View, 
  Button,  
  Text, 
  Image, 
  TouchableOpacity,
  TextInput,
  FlatList 
} from 'react-native';
// import stylesheet.
import styles from './styles';
// begin redux imports
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


import {
    UPDATE_ENCRYPTION_STRING_ACTION,
    UPDATE_ENCRYPTION_ASCII_STRING_ACTION,
    UPDATE_ENCRYPTION_BINARY_STRING_ACTION,
 } from '../../../../actions/updateEncryption';

class EncryptTutorial extends Component{
  constructor(props){
    super(props);
    this.state = {
      currentTextBox: "", // temporary, to be stored in redux - this is only for use in onTextChange
    }
  }

  checkPageNo = () =>{
    const { lockState } = this.props;
    return lockState.lessonPageTabAndPages.tabPage;
  }

  isEmptyInput = () => {
    const { currentTextBox } = this.state;
    console.log("Checking "+currentTextBox)
    return currentTextBox.trim() === ""? true: false;
  }

  getBinaryOfInput = () => {
    const { currentTextBox } = this.state;
    return (
        Array.from(currentTextBox)
          .reduce((acc, char) => acc.concat(char.charCodeAt().toString(2)), [])
          .map(bin => '0'.repeat(8 - bin.length) + bin )
          .join('')
    );
  }
  getBinaryString = (knapsack, yVal) => {
    let binList = [];
    yVal.forEach(( y )=>{
        let binaryStr = "";
        for(let i = knapsack.length-1; i >=0; i--){
          console.log(`Current y ${y} Current Knapsack ${knapsack[i]}`)
          if(y >= knapsack[i]){
            binaryStr = `1${binaryStr}`
            y -= knapsack[i]
          }else{
            binaryStr = `0${binaryStr}`
          }
        }
        binList.push(binaryStr)
    })
    return binList
  }

  validateInput = () => {
    const { lockState, actions } = this.props;
    const { currentTextBox } = this.state;
    if(this.isEmptyInput()){
      // TODO: show popup error
      console.log("Empty input!")
    }else{
      // compute binary equivalent
      let binString = this.getBinaryOfInput();
      actions.UPDATE_ENCRYPTION_BINARY_STRING_ACTION(binString)
      actions.UPDATE_ENCRYPTION_ASCII_STRING_ACTION(currentTextBox)

      // set the state in redux.
      // not empty input.
      //
      //actions.UPDATE_ENCRYPTION_STRING()
    }
  }

  getFirstPage = () => {
    return (
      <View>
          <Text style={styles.tutorial.textStyle}>Encryption:</Text>
          <Text style={styles.tutorial.textStyle}>Now, to encrypt a message, you need to first convert the message into and then to binary</Text>
          <Text style={styles.tutorial.textStyle}>Enter your message to encrypt:</Text>
          <TextInput style={styles.tutorial.textBoxStyle} onChangeText={(text)=>{
              this.setState({
                  currentTextBox: text,
              })
          }}/>
          <Button title="Validate Text" onPress={()=>{
            this.validateInput()
          }}/>
          <Text style={styles.tutorial.textStyle}>Your message:</Text>
          <Text style={styles.tutorial.textStyle}>Binary value:</Text>
          <Text style={styles.tutorial.textStyle}>Now, add the public key elements that corresponds to the value 1 in your binary.</Text>
          <Text style={styles.tutorial.textStyle}>Move on to the following pages to see the encryption of your message using your public key!</Text>
        </View>
    )
  }

  getPageElements = () => {
    let pageNo = this.checkPageNo()
    switch(pageNo){
      case 1: 
        return this.getFirstPage()
      default:  
        return this.getFirstPage()
   }
  }

  render(){
    return(
        <View>
          {
            this.getPageElements()
          }
        </View>  
    );
  }
}
const mapStateToProps = state => ({
  lockState: state
})

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({
    UPDATE_ENCRYPTION_STRING_ACTION,
    UPDATE_ENCRYPTION_ASCII_STRING_ACTION,
    UPDATE_ENCRYPTION_BINARY_STRING_ACTION,
  }, dispatch)
});
export default connect(mapStateToProps,mapDispatchToProps)(EncryptTutorial);