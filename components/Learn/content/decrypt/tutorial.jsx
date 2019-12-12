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

import {
  ALLOW_NEXT_PAGE_ACTION
 } from '../../../../actions/tabPage';

// import stylesheet.
import styles from './styles';
// begin redux imports
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { ScrollView } from 'react-native-gesture-handler';

import Block from '../../../Common/Blocks'

class DecryptTutorial extends Component{
  constructor(props){
    super(props);
    this.state = {
      decryptedText: "",
    }
  }

  checkPageNo = () =>{
    const { lockState } = this.props;
    return lockState.lessonPageTabAndPages.tabPage;
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


  removePadding = (binStringList, padNumber) => {
    let binString = binStringList.join('')
    return padNumber == 0 ? (
        binString.substring(0,(binString.length-padNumber))
    ): binString
  }
  convertBinToText = (binaryString) => {
    let dec = []
    // characters are done in blocks of 8.
    for (let i = 0; i <= binaryString.length-8; i+= 8){
        let ascii = parseInt(binaryString.substring(i, i+8), 2)
        dec.push(String.fromCharCode(ascii))
    }
    return dec.join('')
  }

  decrypt = () => {
    const { actions, lockState } = this.props;
    let encryptedText = lockState.encryption.encryptedText;
    let modulo = lockState.updateParameters.modulo;
    let inverse = lockState.updateParameters.inverse;
    let multiplier = lockState.updateParameters.multiplier;
    let padding = lockState.updateParameters.padding;
    let privateKey = lockState.updateParameters.privateKeyArr;
    let decrypted = [];
    encryptedText.forEach((enc)=>{
        let multiplied = enc * inverse;
        let modVal = multiplied % modulo;
        decrypted.push(modVal)
    })
    console.log(decrypted)

    let binStringList = this.getBinaryString(privateKey, decrypted)
    console.log(binStringList)
    let unpadded = this.removePadding(binStringList,padding)
    let dec = this.convertBinToText(unpadded)
    this.setState({
      decryptedText: dec,
    })


    
  }
  getThirdPage = () => {
    const { decryptedText } = this.state;
    const { actions,lockState } = this.props;
    if (! lockState.lessonPageTabAndPages.allowNextPage){
      actions.ALLOW_NEXT_PAGE_ACTION()
      this.decrypt()

    }
    return (
      <>
        <View style={styles.tutorial.textStyleTitleWrapper}>
          <Text style={styles.tutorial.textStyleTitleCenter}>Decryption</Text>
        </View>
        <Text style={styles.tutorial.textStyle}>Convert the binary values to decimal, this decimal is the ascii value of the message.</Text>
        <Text style={styles.tutorial.textStyle}>Now, convert the ascii value back to characters to get back the plaintext message.</Text>
        <Text style={styles.tutorial.textStyle}>Don't forget to subtract the padding applied!</Text>
      <Text style={styles.tutorial.textStyle}>Current Padding: {lockState.encryption.padding}</Text>
      { decryptedText != ""
        ? <>
          <Text> Decrypted Text:</Text> 
          <Text> {decryptedText}</Text>
          </>
        : null
      }
      </>
    )
  }
  getSecondPage = () => {

    const { actions,lockState } = this.props;
    if (! lockState.lessonPageTabAndPages.allowNextPage){
      actions.ALLOW_NEXT_PAGE_ACTION()

    }
    return (
      <>
        <View style={styles.tutorial.textStyleTitleWrapper}>
          <Text style={styles.tutorial.textStyleTitleCenter}>WIP - to be done</Text> 
        </View>
      </>
    )
  }
  getFirstPage = () => {
    const { actions,lockState } = this.props;
    if (! lockState.lessonPageTabAndPages.allowNextPage){
      actions.ALLOW_NEXT_PAGE_ACTION()
      console.log(lockState);

    }
    return (
      <>
        <View style={styles.tutorial.textStyleTitleWrapper}>
          <Text style={styles.tutorial.textStyleTitleCenter}>Decryption</Text>
        </View>
        <Text style={styles.tutorial.textStyleCiphertext}>The current ciphertext is:</Text>
        <Text style={styles.tutorial.textStyleCiphertext}>({lockState.encryption.encryptedText.join(', ')})</Text>
        <Text style={styles.tutorial.textStyleSmallerText}>Use the inverse multiplier w^-1 to compute: R= w^-1 * ciphertext mod m</Text>
        <Text style={styles.tutorial.textStyleSmallerText}>Then, use a to decrypt R1 and R2 and find plaintext binary X</Text>
        <Text style={styles.tutorial.textStyleSmallerText}>By comparing with a, we then obtain the binary value.</Text>
        <Text style={styles.tutorial.textStyleSmallerText}>As the knapsack is super-increasing, it is comparatively easier to get the binary values.</Text>
      </>
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
    return(
        <>
         {
           this.getPageElements()
         }
        </>
    )
  }
}


const mapStateToProps = state => ({
  lockState: state
})

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({
    ALLOW_NEXT_PAGE_ACTION,
  }, dispatch)
})

export default connect(mapStateToProps,mapDispatchToProps)(DecryptTutorial);