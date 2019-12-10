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
    UPDATE_ENCRYPTION_PADDING_ACTION,
    UPDATE_ENCRYPTION_BLOCKS_ACTION,
 } from '../../../../actions/updateEncryption';

 import {
  ALLOW_NEXT_PAGE_ACTION
 } from '../../../../actions/tabPage';
import { ScrollView } from 'react-native-gesture-handler';

import Block from '../../../Common/Blocks'

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
      console.log("Empty input!")
    }else{
      // compute binary equivalent
      let binString = this.getBinaryOfInput();
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
  }

  getSecondPage = () => {
    const { lockState } = this.props;
    
    console.log("lockstate enc"+lockState.encryption)
    console.log("lockstate enc block"+lockState.encryption.binaryBlocks)
    let lockStateArr = null;
    if(lockState.encryption.binaryBlocks.length != 0){
      lockStateArr = lockState.encryption.binaryBlocks.map((block, idx)=>{
        return (
          <>
            <Text>Block #{idx}</Text>
            <Block 
                key={`binary${idx+1}`}
                tableTitle={["Key","Binary","Total"]}
                flexArr={new Array(lockState.encryption.binaryBlocks.length+1).fill(1)}
                tableData={block} 
                currentPublicKey={lockState.updateParameters.publicKeyArr}
                tableType="binary"
            />
          </>
          )
        })
      console.log(lockStateArr)
    }
    
    return(
      <ScrollView>
        <Text style={styles.tutorial.textStyle}>Encryption</Text>
        <Text style={styles.tutorial.textStyle}>Depending on the number of elements in your public key b, the binary values are assigned into blocks. (size of binary / size of b)</Text>
        <Text style={styles.tutorial.textStyle}>Your public key b:</Text>
        <Text style={styles.tutorial.textStyle}>Padding may have to be applied based on the length of the public key and the message</Text>
        <Text style={styles.tutorial.textStyle}>The following blocks chart out the additional process of obtaining the first encryption using b.</Text>
        <Button title="Generate Blocks" onPress={()=>{
          this.generateBinaryBlocks()
        }}/>
        {
          /*
            Block.propTypes = {
              flexArr: PropTypes.array.isRequired,
              tableTitle: PropTypes.array.isRequired,
              tableData: PropTypes.array.isRequired,
            };

          */
         lockStateArr
          
        }
      </ScrollView>
    )
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
      case 2: 
        return this.getSecondPage()
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
    UPDATE_ENCRYPTION_PADDING_ACTION,
    UPDATE_ENCRYPTION_BLOCKS_ACTION,
    ALLOW_NEXT_PAGE_ACTION,
  }, dispatch)
});
export default connect(mapStateToProps,mapDispatchToProps)(EncryptTutorial);