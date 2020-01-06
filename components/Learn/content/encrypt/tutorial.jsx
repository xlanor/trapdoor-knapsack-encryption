import React, { Component } from 'React';

import { 
  View, 
  Dimensions,
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
  Table, 
  TableWrapper, 
  Rows, 
  Row, 
  Col } 
from 'react-native-table-component';

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
import ScrollViewPopUp from '../../../Common/ScrollViewPopUp';
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
      showBlocks: false,
      showSpinner: true,
      errorMessage: "",
      keyboardVisiblity: false,
    }
  }

  componentDidMount(){
    this.keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      this.handleKeyboardDidShow,
    );
    this.keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      this.keyboardDidHide,
    );
  }
  componentWillUnmount() {
    this.keyboardDidShowListener.remove();
    this.keyboardDidHideListener.remove();
  }
  handleKeyboardDidShow = event => {
    this.setState({
      keyboardVisiblity: true,
    })
  }

  keyboardDidHide = event =>  {
    this.setState({
      keyboardVisiblity: false,
    })
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
      console.log(lockState)
      console.log(` User Input: ${binUserInput}`)
      console.log(` Public Key: ${binPubKeyArr}`)
      let binaryBlocks = this.chunk(binUserInput,binPubKeyArr.length)
      console.log(binaryBlocks)
      actions.UPDATE_ENCRYPTION_BLOCKS_ACTION(binaryBlocks)
      actions.ALLOW_NEXT_PAGE_ACTION()
      this.setState({
        showBlocks: true,
      })
  }

  getFifthPage = () => {
    const { actions } = this.props;
    return (
      <View>
        <Text>Quiz Time</Text>
        <Text>W.I.P</Text>
      </View>
    )
  }
  getFourthPage = () => {
    const { showBlocks } = this.state
    const { lockState, actions } = this.props;
    
  
    return(
      <View>
        <Text style={styles.tutorial.textStyleHeader2}>Depending on the number of elements in your public key b, the binary values are assigned into blocks. (size of binary / size of b)</Text>
        <Text style={styles.tutorial.textStyleHeader2}>Your public key b, padding may have to be applied based on the length of the public key and the message. </Text>
        <Text style={styles.tutorial.textStyleHeader2}>The following blocks chart out the additional process of obtaining the first encryption using b.</Text>
       
        {

          lockState.encryption.binaryBlocks.length != 0
          ? 
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <View style={styles.tutorial.multipleButtonLeft}>
                  <CustomButton text="Encrypt" callback={()=>{
                      this.generateBinaryBlocks()
                    }}/>
                </View>

                <View style={styles.tutorial.multipleButtonRight}>
                  <CustomButton text="Blocks" 
                    callback={
                      ()=>{
                          this.setState({
                            showBlocks: true,
                          })
                      }
                    }
                    buttonColor="blue"
                    />
                </View>
            </View>
          :
          <View style={{flexDirection: 'row', justifyContent: 'center'}}>
            <CustomButton 
              text="Encrypt" 
              callback={
                ()=>{
                  this.generateBinaryBlocks()
                }
              }
            />
          </View>
        }
        <View style={{marginTop: 10}}>
          <Text style={styles.tutorial.textStyle}>
            Ciphertext:
          </Text>
          {
            lockState.encryption.encryptedText.length != 0 ? 
              <Text tyle={styles.tutorial.textStyle}>
                {lockState.encryption.encryptedText.join(", ")}
              </Text>
              : null
          }
        </View>
       
      </View>
    )
  }

  getThirdPage = () => {
    const { actions, lockState } = this.props;
    if (!lockState.lessonPageTabAndPages.allowNextPage){
        actions.ALLOW_NEXT_PAGE_ACTION()
    }
    return (
      <View>
        <Text style={styles.tutorial.encryptText}>The solution to it is to add padding</Text>
        <Text style={styles.tutorial.encryptText}>To get padding value:</Text>
        <Text style={styles.tutorial.encryptText}>- Remainder = binary length % n</Text>
        <Text style={styles.tutorial.encryptText}>- If the remainder is 0, padding = 0</Text>
        <Text style={styles.tutorial.encryptText}>- If the remainder is not 0, padding = n minus remainder</Text>
        <Text style={styles.tutorial.encryptTextGray}>E.G: </Text>
        <Text style={styles.tutorial.encryptTextGray}>Remainder = 8 % 3 = 2</Text>
        <Text style={styles.tutorial.encryptTextGray}>Padding = 3 - 2 = 1</Text>
        <Text style={styles.tutorial.encryptTextGray}>Add 1 '0' to the back of the binary string x</Text>
        <View style={styles.tutorial.tableView}>
          <Table borderStyle={{borderWidth: 1}}>
              <TableWrapper style={{ flexDirection: 'row' }}>
                <Col data={['b', 'x']} style={{ flex: 1, backgroundColor: '#f6f8fa' }} heightArr={[28,28]} textStyle={{textAlign: 'center' }}/>
                <Rows data={[
                      ['22','16','32'],
                      ['0','1','1'],
                  ]} 
                  flexArr={[1, 1, 1]}
                  style={{height: 28}} 
                  textStyle={{textAlign: 'center' }}
                />
              </TableWrapper>
          </Table>
        </View>
        <View style={styles.tutorial.tableView}>
          <Table borderStyle={{borderWidth: 1}}>
              <TableWrapper style={{ flexDirection: 'row' }}>
                <Col data={['b', 'x']} style={{ flex: 1, backgroundColor: '#f6f8fa' }} heightArr={[28,28]} textStyle={{textAlign: 'center' }}/>
                <Rows data={[
                      ['22','16','32'],
                      ['0','0','0'],
                  ]} 
                  flexArr={[1, 1, 1]}
                  style={{height: 28}} 
                  textStyle={{textAlign: 'center' }}
                />
              </TableWrapper>
          </Table>
        </View>
        <View style={styles.tutorial.tableView}>
          <Table borderStyle={{borderWidth: 1}}>
              <TableWrapper style={{ flexDirection: 'row' }}>
                <Col data={['b', 'x']} style={{ flex: 1, backgroundColor: '#f6f8fa' }} heightArr={[28,28]} textStyle={{textAlign: 'center' }}/>
                <Rows data={[
                      ['22','16','32'],
                      ['0','1','0'],
                  ]} 
                  flexArr={[1, 1, 1]}
                  style={{height: 28}} 
                  textStyle={{textAlign: 'center' }}
                />
              </TableWrapper>
          </Table>
        </View>
      </View>
    )
  }

  getSecondPage = () => {
    const { actions, lockState } = this.props;
    if (!lockState.lessonPageTabAndPages.allowNextPage){
        actions.ALLOW_NEXT_PAGE_ACTION()
    }
    ALLOW_NEXT_PAGE_ACTION
    return (
      <View>
        <Text style={styles.tutorial.encryptText}>However, there might be cases where binary cannot be divided into equal blocks according to knapsack size n to correspond to public key</Text>
        <View style={styles.tutorial.secondParaView}>
          <Text style={styles.tutorial.encryptTextGray}>E.g</Text>
          <Text style={styles.tutorial.encryptTextGray}>Public key b = (22,16,32) where n = 3</Text>
          <Text style={styles.tutorial.encryptTextGray}>Message = a, ASCII of a = 97</Text>
          <Text style={styles.tutorial.encryptTextGray}>Binary of 97 = 0110 0001/Text>
          <Text style={styles.tutorial.encryptTextGray}>Binary length / n =  8 / 3 = 3 (rounded up)</Text></Text>
        </View>
        <View style={styles.tutorial.tableView}>
          <Table borderStyle={{borderWidth: 1}}>
              <TableWrapper style={{ flexDirection: 'row' }}>
                <Col data={['b', 'x']} style={{ flex: 1, backgroundColor: '#f6f8fa' }} heightArr={[28,28]} textStyle={{textAlign: 'center' }}/>
                <Rows data={[
                      ['22','16','32'],
                      ['0','1','1'],
                  ]} 
                  flexArr={[1, 1, 1]}
                  style={{height: 28}} 
                  textStyle={{textAlign: 'center' }}
                />
              </TableWrapper>
          </Table>
        </View>
        <View style={styles.tutorial.tableView}>
          <Table borderStyle={{borderWidth: 1}}>
              <TableWrapper style={{ flexDirection: 'row' }}>
                <Col data={['b', 'x']} style={{ flex: 1, backgroundColor: '#f6f8fa' }} heightArr={[28,28]} textStyle={{textAlign: 'center' }}/>
                <Rows data={[
                      ['22','16','32'],
                      ['0','0','0'],
                  ]} 
                  flexArr={[1, 1, 1]}
                  style={{height: 28}} 
                  textStyle={{textAlign: 'center' }}
                />
              </TableWrapper>
          </Table>
        </View>
        <View style={styles.tutorial.tableView}>
          <Table borderStyle={{borderWidth: 1}}>
              <TableWrapper style={{ flexDirection: 'row' }}>
                <Col data={['b', 'x']} style={{ flex: 1, backgroundColor: '#f6f8fa' }} heightArr={[28,28]} textStyle={{textAlign: 'center' }}/>
                <Rows data={[
                      ['22','16','32'],
                      ['0','1','?'],
                  ]} 
                  flexArr={[1, 1, 1]}
                  style={{height: 28}} 
                  textStyle={{textAlign: 'center' }}
                />
              </TableWrapper>
          </Table>
        </View>
      </View>
    )
  }

  getFirstPage = () => {
    const { lockState } = this.props;
    const { keyboardVisiblity } = this.state;
    return (
      <View>
          {
            keyboardVisiblity
            ? null
            : (
                
              <>
               <Text style={styles.tutorial.textStyleHeader2}>Now, to encrypt a message, you need to first convert the message to binary</Text>
              </>
            )
          }
         
          <Text style={
            keyboardVisiblity
            ? { ...styles.tutorial.textStyleHeader1, marginTop: Dimensions.get('screen').height * 0.02,}
            : { ...styles.tutorial.textStyleHeader1, marginTop: 0}
          }>Enter your message to encrypt:</Text>
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
              {
                keyboardVisiblity
                ? null
                : (
                  <>
                     <Text style={styles.tutorial.textStyleHeader1}>Your message:</Text>
                    <Text style={styles.tutorial.textStyleHeader1}>{lockState.encryption.textToEncrypt}</Text>
                    <Text style={styles.tutorial.textStyleHeader1}>Binary value: {lockState.encryption.binaryString}</Text>
                    <Text style={styles.tutorial.textStyleHeader1}>Now, add the public key elements that corresponds to the value 1 in your binary.</Text>
                    <Text style={styles.tutorial.textStyleHeader1}>Move on to the following pages to see the encryption of your message using your public key!</Text>
                  </>
                )
              }
             
            </>

          }
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
      case 3:
        return this.getThirdPage()
      case 4:
        return this.getFourthPage()
      case 5:
        return this.getFifthPage()
      default:  
        return this.getFirstPage()
   }
  }

  render(){
      const { showError, errorMessage, showBlocks, keyboardVisiblity } = this.state;
      const { lockState ,actions } = this.props;
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
              <Block 
                  key={'binary-'+idx}
                  tableTitle={["Key","Binary","Total"]}
                  flexArr={flexLength}
                  tableData={block} 
                  currentPublicKey={lockState.updateParameters.publicKeyArr}
                  tableType="binary"
                  blockNo={idx+1}
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
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={
            styles.tutorial.learnTabPad
            }>

            {
              showError
              ? <PopUp visibility={showError} close={this.hideError}  message={errorMessage} icon={Error}/>
              : null
            }
            {
               showBlocks
               ? <ScrollViewPopUp   
                    visibility={showBlocks}
                    lockStateArr={lockStateArr} 
                    callback={
                      ()=>{
                        this.setState({
                          showBlocks: false,
                        })
                      }
                    }/>
               : null
            }
            <View style={styles.tutorial.textStyleTitleWrapper}>
            {
              keyboardVisiblity
              ? null
              :<Text style={styles.tutorial.textStyleTitleCenter}>Encryption</Text>
            }
            </View>
            {
              this.getPageElements()
            }
          </View>  
          </TouchableWithoutFeedback>
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