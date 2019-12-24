import React, { Component } from 'React';

import { 
  View, 
  KeyboardAvoidingView,
  Button,  
  Text, 
  Image, 
  TouchableOpacity,
  TouchableWithoutFeedback,
  TextInput,
  FlatList, 
  Keyboard
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
    UPDATE_ENCRYPTION_PADDING_ACTION,
    UPDATE_ENCRYPTION_BLOCKS_ACTION,
    UPDATE_ENCRYPTED_STRING_ACTION,
 } from '../../../../actions/updateEncryption';

 import {
  ALLOW_NEXT_PAGE_ACTION
 } from '../../../../actions/tabPage';
import { ScrollView } from 'react-native-gesture-handler';

import Block from '../../../Common/Blocks'

import PopUp from '../../../Common/PopUp';
import CustomButton from '../../../Common/Button';
import Error from '../../../../assets/images/Error.png'

class EncryptTutorial extends Component{
  constructor(props){
    super(props);
    const { lockState } = this.props;
    let currentEncryptText = lockState.encryption.textToEncrypt;
    this.state = {
      currentTextBox: currentEncryptText === "" ? "" : currentEncryptText, // temporary, to be stored in redux - this is only for use in onTextChange
      showError: false,
      errorMessage: "",
    }
  }

  showError = ( message ) => {
    this.setState({
      showError: true,
      errorMessage: message,
    })
  }

  hideError = () => {
    this.setState({
      showError: false,
    })
  }

  sumReducer = (accumulator, currentValue) => {
      return Number(accumulator)+Number(currentValue);
  }

  checkPageNo = () =>{
    const { lockState } = this.props;
    return lockState.lessonPageTabAndPages.tabPage;
  }

  isEmptyInput = () => {
    const { currentTextBox } = this.state;
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

  chunk = (binaryString, trapdoorSize) => {
    const { actions } = this.props;
    let binBlocks = []
    let upper = binaryString.length - trapdoorSize
    console.log("Upper limit "+upper)
    console.log("Trapdoor size:"+trapdoorSize)
    for(let i = 0; i <= upper; i+= trapdoorSize){
      binBlocks.push(binaryString.substring(i,i+trapdoorSize));
    }
    // need to pad
    if(binaryString.length % trapdoorSize != 0){
      let padding =  trapdoorSize - (binaryString.length % trapdoorSize);
      let start = binaryString.length - (binaryString.length % trapdoorSize);
      let blockStr = binaryString.substring(start);
      console.log(`Padding to ${padding}`)
      for (let j = 0; j < padding; j++){
        blockStr += '0';
      }
      binBlocks.push(blockStr);
      actions.UPDATE_ENCRYPTION_PADDING_ACTION(padding);
    }else{
      actions.UPDATE_ENCRYPTION_PADDING_ACTION(0);
    }
    let binBlocksNumeric = []
    for(let i = 0; i < binBlocks.length; i++){
      // for each number string inside bin blocks, cast it to an array of numbers.
      console.log(binBlocks[i]);
      let binLen = binBlocks[i].length;
      let numeric = binBlocks[i].split('').map(Number)
      let differential = binLen-numeric.length;
      while(differential != 0){
        numeric.unshift(0) // prepends
        differential -= 1
      }
      binBlocksNumeric.push(
          numeric
      )
      
    }
    return binBlocksNumeric;
  }

  validateInput = () => {
    const { lockState, actions } = this.props;
    const { currentTextBox } = this.state;
    if(this.isEmptyInput()){
      // TODO: show popup error
      this.showError("Encryption String cannot be empty!")
    }else{
      // compute binary equivalent
      let binString = this.getBinaryOfInput()
      actions.UPDATE_ENCRYPTION_STRING_ACTION(currentTextBox)
      actions.UPDATE_ENCRYPTION_BINARY_STRING_ACTION(binString)
      actions.UPDATE_ENCRYPTION_ASCII_STRING_ACTION(currentTextBox)
      actions.ALLOW_NEXT_PAGE_ACTION()
    }
  }

  generateBinaryBlocks = () => {
      const { lockState, actions } = this.props
      let binUserInput = lockState.encryption.binaryString;
      let binPubKeyString = lockState.updateParameters.publicKeyString;
      let binPubKeyArr = lockState.updateParameters.publicKeyArr;
      let binaryBlocks = this.chunk(binUserInput,binPubKeyArr.length)
      console.log(binaryBlocks)
      actions.UPDATE_ENCRYPTION_BLOCKS_ACTION(binaryBlocks)
      actions.ALLOW_NEXT_PAGE_ACTION()
  }

  getThirdPage = () => {
    const { actions } = this.props;
    return (
      <View>
        <Text>Quiz Time</Text>
        <Text>W.I.P</Text>
      </View>
    )
  }

  getSecondPage = () => {
    const { lockState, actions } = this.props;
    
    console.log("lockstate enc"+lockState.encryption)
    console.log("lockstate enc block"+lockState.encryption.binaryBlocks)
    let lockStateArr = null;
    if(lockState.encryption.binaryBlocks.length != 0){
      let flexLength = []
      for (let i = 0; i < lockState.updateParameters.publicKeyArr.length; i++){
        flexLength.push(1);
      }
      let encryptedArr = [];
      lockStateArr = lockState.encryption.binaryBlocks.map((block, idx)=>{
        encryptedArr.push( block.map((x, index)=>{
            return Number(lockState.updateParameters.publicKeyArr[index]) * Number(x)
        }))   
        return (
          <View key={'binary-'+idx}>
            <Text style={styles.tutorial.textStyleHeader3}>Block #{idx}</Text>
            <Block 
                key={'binary-'+idx}
                tableTitle={["Key","Binary","Total"]}
                flexArr={flexLength}
                tableData={block} 
                currentPublicKey={lockState.updateParameters.publicKeyArr}
                tableType="binary"
            />
          </View>
          )
        })
        console.log(encryptedArr)
        for(let i = 0; i < encryptedArr.length; i++){
          encryptedArr[i] = encryptedArr[i].reduce(this.sumReducer)
        }
        if(lockState.encryption.encryptedText.length == 0){
          actions.UPDATE_ENCRYPTED_STRING_ACTION(encryptedArr)
        }
         
    }
    
    return(
      <ScrollView style={{ marginBottom: 100}}>
        <Text style={styles.tutorial.textStyleTitle}>Encryption</Text>
        <Text style={styles.tutorial.textStyleHeader2}>Depending on the number of elements in your public key b, the binary values are assigned into blocks. (size of binary / size of b)</Text>
        <Text style={styles.tutorial.textStyleHeader2}>Your public key b, padding may have to be applied based on the length of the public key and the message. </Text>
        <Text style={styles.tutorial.textStyleHeader2}>The following blocks chart out the additional process of obtaining the first encryption using b.</Text>
        <Button title="Generate Blocks" onPress={()=>{
          this.generateBinaryBlocks()
        }}/>
        {
         lockStateArr
        }
        {
          lockState.encryption.encryptedText.length != 0 ? 
            <Text>{lockState.encryption.encryptedText.join(", ")}</Text>
            : null
        }
      </ScrollView>
    )
  }

  getFirstPage = () => {
    const { lockState } = this.props;
    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View>
          <Text style={styles.tutorial.textStyleHeader2}>Now, to encrypt a message, you need to first convert the message into ASCII and then to binary</Text>
          <Text style={styles.tutorial.textStyleHeader1}>Enter your message to encrypt:</Text>
          <TextInput defaultValue={
            lockState.encryption.textToEncrypt === ""
            ? null
            : lockState.encryption.textToEncrypt
            
          }
            style={styles.tutorial.textBoxStyle} onChangeText={(text)=>{
              this.setState({
                  currentTextBox: text,
              })
          }}/>
          <View style={styles.tutorial.buttonRow}>
            <CustomButton text="Validate" callback={this.validateInput}/>
          </View>
          {
            lockState.encryption.textToEncrypt === ""
            ? null
            :<>
              <Text style={styles.tutorial.textStyleHeader1}>Your message:</Text>
              <Text style={styles.tutorial.textStyleHeader1}>{lockState.encryption.textToEncrypt}</Text>
              <Text style={styles.tutorial.textStyleHeader1}>Binary value: {lockState.encryption.binaryString}</Text>
              <Text style={styles.tutorial.textStyleHeader1}>Now, add the public key elements that corresponds to the value 1 in your binary.</Text>
              <Text style={styles.tutorial.textStyleHeader1}>Move on to the following pages to see the encryption of your message using your public key!</Text>
            </>

          }
        </View>
      </TouchableWithoutFeedback>
    )
  }

  getPageElements = () => {
    let pageNo = this.checkPageNo()
    switch(pageNo){
      case 1: 
        return this.getFirstPage()
      case 2: 
        return this.getSecondPage()
      case 3:
        return this.getThirdPage()
      default:  
        return this.getFirstPage()
   }
  }

  render(){
      const { showError, errorMessage } = this.state;
      return(
          <View style={styles.tutorial.learnTabPad}>
            {
              showError
              ? <PopUp visibility={showError} close={this.hideError}  message={errorMessage} icon={Error}/>
              : null

            }
            <View style={styles.tutorial.textStyleTitleWrapper}>
            {
                <Text style={styles.tutorial.textStyleTitleCenter}>Encryption</Text>
            }
            </View>
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
    UPDATE_ENCRYPTION_PADDING_ACTION,
    UPDATE_ENCRYPTION_BLOCKS_ACTION,
    UPDATE_ENCRYPTED_STRING_ACTION,
    ALLOW_NEXT_PAGE_ACTION,
  }, dispatch)
});
export default connect(mapStateToProps,mapDispatchToProps)(EncryptTutorial);