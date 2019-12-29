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

import BlocksDecrypt from '../../../Common/BlocksDecrypt';
import CustomButton from '../../../Common/Button';
import Block from '../../../Common/Blocks';

class DecryptTutorial extends Component{
  constructor(props){
    super(props);
    this.state = {
      decryptedText: "",
      currentDecryptedBlocks: null,
      showBlocks: false,
    }
  }

  checkPageNo = () =>{
    const { lockState } = this.props;
    return lockState.lessonPageTabAndPages.tabPage;
  }

  getBinaryString = (knapsack, yVal) => {
    const { lockState } = this.props;
    let returnObj = {
        ['binlist']: [],
        ['blocks']:[],
    }
    yVal.forEach(( y, idx )=>{
        let binaryStr = "";
        let blocksInner = {
          ['inital_enc']: lockState.encryption.encryptedText[idx],
          ['initial_r']: Number(y), // get new object so its not mutated
          ['current_r']:[],
          ['knapsack']:[],
          ['decrypted']: [],
          ['new_r']: [],
        }
        for(let i = knapsack.length-1; i >=0; i--){
          console.log(`Current y ${y} Current Knapsack ${knapsack[i]}`)
          blocksInner.knapsack.push(knapsack[i])
          blocksInner.current_r.push(Number(y))
          if(y >= knapsack[i]){
            binaryStr = `1${binaryStr}`
            y -= knapsack[i]
            blocksInner.decrypted.push('1')
          }else{
            binaryStr = `0${binaryStr}`
            blocksInner.decrypted.push('0')
          }
          blocksInner.new_r.push(Number(y))
        }
        returnObj.blocks.push(blocksInner)
        returnObj.binlist.push(binaryStr)
    })
    return returnObj
  }


  removePadding = (binStringList, padNumber) => {
    let binString = binStringList.join('')
    if(padNumber != 0){
        return binString.substring(0,(binString.length-padNumber))
    }
    else{
        return binString
    }
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
    console.log(`Decrypted lockState = ${lockState.updateParameters}`)
    let encryptedText = lockState.encryption.encryptedText;
    let modulo = lockState.updateParameters.modulo;
    let inverse = lockState.updateParameters.inverse;
    let multiplier = lockState.updateParameters.multiplier;
    let padding = lockState.encryption.padding;
    let privateKey = lockState.updateParameters.privateKeyArr;
    let decrypted = [];
    encryptedText.forEach((enc)=>{
        let multiplied = enc * inverse;
        let modVal = multiplied % modulo;
        decrypted.push(modVal)
        console.log ("Enc "+enc)
        console.log ("multiplied "+multiplied)
        console.log ("modVal "+modVal)
    })
    let binStringList = this.getBinaryString(privateKey, decrypted)
    console.log("Binary String List")
    console.log(binStringList)
    console.log("Padding "+padding)
    let unpadded = this.removePadding(binStringList.binlist,padding)
    console.log(`Unpadded ${unpadded}`)
    let dec = this.convertBinToText(unpadded)
  

    this.setState({
      decryptedText: dec,
      currentDecryptedBlocks: binStringList,
    })


    
  }
  getThirdPage = () => {
    const { decryptedText } = this.state;
    const { actions,lockState } = this.props;
    if (! lockState.lessonPageTabAndPages.allowNextPage){
      actions.ALLOW_NEXT_PAGE_ACTION()

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
      <CustomButton text="Decrypt" callback={()=>{
          this.decrypt()
      }}/>
      { 
        decryptedText != ""
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
        <Text style={styles.tutorial.textStyleSmallerText1}>As the knapsack is super-increasing, it is comparatively easier to get the binary values.</Text>
      
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
      const { lockState } = this.props;
      {
        /*
          BlockDecrypt.propTypes = {
            flexArr: PropTypes.array.isRequired,
            tableTitle: PropTypes.array.isRequired,
            currentR: PropTypes.array.isRequired,
            pubKey: PropTypes.array.isRequired,
            postSub: PropTypes.array.isRequired,
            binary: PropTypes.array.isRequired,
            binaryOrdered: PropTypes.array.isRequired,
            encryptedInput: PropTypes.number.isRequired,
            inverse: PropTypes.number.isRequired,
            modulo: PropTypes.number.isRequired,
            rVal: PropTypes.number.isRequired,
          };
        */
      }
    const { currentDecryptedBlocks } = this.state;
    let blockArray = null;
    if (currentDecryptedBlocks !== null){
      let flexLength = []
      for (let i = 0; i < lockState.updateParameters.publicKeyArr.length; i++){
        flexLength.push(1);
      }
      let decryptedArr = []
      decryptedArr.push(
        currentDecryptedBlocks.blocks.map ((x, idx)=> {
          return (
            <View>
              <BlocksDecrypt
                key = {`${idx}`}
                flexArr={flexLength}
                tableTitle={
                  [
                    'Current R',
                    'Public Key',
                    'Decrypted',
                    'Binary',
                    'Ordered'
                ]}
                currentR={
                  currentDecryptedBlocks.blocks.current_r
                }
                pubKey={
                  currentDecryptedBlocks.blocks.knapsack
                }
                postSub = {
                  currentDecryptedBlocks.blocks.new_r
                }
                binary = {
                  currentDecryptedBlocks.blocks.decrypted
                }
                binaryOrdered = {
                  currentDecryptedBlocks.blocks.decrypted.reverse()
                }
                encryptedInput = {
                  currentDecryptedBlocks.blocks.inital_enc
                }
                inverse = {
                  lockState.updateParameters.inverse
                }
                modulo = {
                  lockState.updateParameters.modulo
                }
                rVal = {
                  currentDecryptedBlocks.blocks.initial_r
                }
              />
            </View>
          )
        })

      )
    }
    return(
      
      <View style={styles.tutorial.learnTabPad}>
         {
           this.getPageElements()
         }
      </View>
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