import React, { Component } from 'React';

import {
  View,
  Button,
  Text,
  Clipboard,
  Image,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  Keyboard,
  FlatList,
  Alert
} from 'react-native';

import CustomButton from '../../../Common/Button';
// begin redux imports
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import{
    UPDATE_SIMULATOR_PRIVATE_KEY_ACTION,
    UPDATE_SIMULATOR_PRIVATE_KEY_VALID_ACTION,
    UPDATE_SIMULATOR_MODULO_ACTION,
    UPDATE_SIMULATOR_MODULO_VALID_ACTION,
    UPDATE_SIMULATOR_PUBLIC_KEY_ACTION,
    UPDATE_SIMULATOR_GEN_KEY_COMPLETED_ACTION,
    UPDATE_SIMULATOR_TEXT_TO_ENC_ACTION,
    UPDATE_SIMULATOR_TEXT_TO_ENC_VALID_ACTION,
    UPDATE_SIMULATOR_TEXT_TO_DECRYPT_ACTION,
    UPDATE_SIMULATOR_DECRYPTED_TEXT_ACTION,
    UPDATE_SIMULATOR_PRIVATE_KEY_SUM_ACTION,
    UPDATE_SIMULATOR_MULTIPLIER_ACTION,
    UPDATE_SIMULATOR_MULTIPLIER_VALID_ACTION,
    UPDATE_SIMULATOR_PADDING_ACTION,
    UPDATE_SIMULATOR_RESET_ENC_ACTION,
    UPDATE_SIMULATOR_RESET_DEC_ACTION
 } from '../../../../redux-modules/actions/simulators';

 import {
   UNLOCK_TROPHY_KEYMASTER,
   UNLOCK_TROPHY_SAFETY_FIRST,
   UNLOCK_TROPHY_BREAK_WALL,
   SHOW_TROPHY_ACTION,
 } from '../../../../redux-modules/actions/manageTrophies';

import Error from '../../../../assets/images/Error.png'
import EditButton from '../../../../assets/images/EditButton.png'
import Copy from '../../../../assets/images/Copy.png'
import Success from '../../../../assets/images/success.png'

import PopUp from '../../../Common/PopUp'
import AlertPopUp from '../../../Common/AlertPopUp'

// import stylesheet.
import styles from './styles';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

    /*


const initialState = {
    privateKey: "",
    privateKeyValid: false,
    modulus: "",
    modulusValid: false,
    publicKey: "",
    genKeyCompleted: false,
    textToEncrypt: "",
    textToDecrypt: "",
    decryptedText: "",
}

    */
class SimulatorPage extends Component{
    constructor(props){
        super(props);
        this.state = {
            currentSimulatorPage: "menu", // menu by default.
            currentPrivateKeyInput: "",
            currentModulusInput: "",
            currentMultiplierInput: "",
            showError: false,
            errorMessage: "",
            currentPlainTextInput:"",
            encryptedOutput: [],
            currentEncryptedTextInput:"",
            currentPaddingInput: "",
            decrypted: "",
            showAlertPopUp: false,
            alertPopUpMessage: "",
            localPublicKey: "",
            localPublicKeyValid: false,
        }
    }


    convertBinToText = (binaryString) => {
        let dec = []
        // characters are done in blocks of 8.
        for (let i = 0; i <= binaryString.length-8; i+= 8){
            let ascii = parseInt(binaryString.substring(i, i+8), 2)
            dec.push(String.fromCharCode(ascii))
        }
        return decodeURIComponent(escape(dec.join('')))
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
    sumReducer = (accumulator, currentValue) => {
        return Number(accumulator)+Number(currentValue);
    }
    isEmptyInput = (textToCheck) => {
        console.log(`Received Text to check ${textToCheck}`)
        if (typeof(textToCheck) === undefined)
            return true
        return textToCheck.trim() === ""? true: false;
      }
    isValidNumber = (stringToVerify) => {
        let str = String(stringToVerify);
        let reg = new RegExp('^[0-9]+$');
        return str.match(reg) === null ? false: true;
      }

      isGreaterInteger = ( a, b )  =>{
        return a < b;
     }
    isGreater = (a, b, idx) => {
        // returns true by default if idx is 0, if not whether a > b.
        return idx == 0 ? true: a < b;
    }

    setCurrentSimulatorPage = (curPage) => {
        this.setState({
            currentSimulatorPage: curPage,
        })
    }

    enableError = (message) => {
        this.setState({
            showError: true,
            errorMessage: message,
        })
    }


    disableError = () => {
        this.setState({
            showError: false,
            errorMessage: "",
        })
    }


   computePublicKey = () => {
        const { lockState, actions, trophyKeymaster } = this.props;
        // for every element in the public key, multiply by the multiplier and get the remainder.
        let privateKeyString = lockState.simulator.privateKey
        let privateKey = privateKeyString.split(',')
        let modulo = lockState.simulator.modulus
        let multiplier = lockState.simulator.multiplier
        let newPk = []
        console.log(`Modulo ${modulo} Multiplier ${multiplier} Private Key ${privateKey}`)
        for (let i = 0; i < privateKey.length; i++){
            let pub = (privateKey[i] * multiplier) % modulo
            newPk.push(pub);
        }
        if( !lockState.simulator.genKeyCompleted ){
            actions.UPDATE_SIMULATOR_PUBLIC_KEY_ACTION(newPk);
            if (!trophyKeymaster){
              actions.UNLOCK_TROPHY_KEYMASTER();
              actions.SHOW_TROPHY_ACTION();
            }

        }
    }
    xgcd = (a,m) =>{ // validate inputs
        [a, m] = [Number(a), Number(m)]
        if (Number.isNaN(a) || Number.isNaN(m)) {
            return NaN // invalid input
        }
        a = (a % m + m) % m
        if (!a || m < 2) {
            return NaN // invalid input
        }
        // find the gcd
        const s = []
        let b = m
        while(b) {
            [a, b] = [b, a % b]
            s.push({a, b})
        }
        if (a !== 1) {
            return NaN // inverse does not exists
        }
        // find the inverse
        let x = 1
        let y = 0
        for(let i = s.length - 2; i >= 0; --i) {
            [x, y] = [y,  x - y * Math.floor(s[i].a / s[i].b)]
        }
        return (y % m + m) % m

    }
    calculateGCD = (mod,multiplier) => {
        if(mod > multiplier) {
           // swap them around.
           let temp = multiplier
           multiplier = mod
           mod = temp
        }
        while(mod){
          let temp = mod
          mod = multiplier % mod
          multiplier = temp
        }
        return (multiplier == 1)

     }

    getBinaryOfInput = (textToGet) => {
        let utf8 =unescape(encodeURIComponent(textToGet));
        return (
            Array.from(utf8)
              .reduce((acc, char) => acc.concat(char.charCodeAt().toString(2)), [])
              .map(bin => '0'.repeat(8 - bin.length) + bin )
              .join('')
        );
    }

    generateBinaryBlocks = (binaryString) => {
        const { lockState, actions } = this.props
        let binUserInput = binaryString
        let binPubKeyArr = lockState.simulator.publicKey
        let binaryBlocks = this.chunk(binUserInput,binPubKeyArr.length)
        return binaryBlocks
    }

    getBinaryString = (knapsack, yVal) => {
        let binList = [];
        yVal.forEach(( y )=>{
            let binaryStr = "";
            for(let i = knapsack.length-1; i >=0; i--){
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
            actions.UPDATE_SIMULATOR_PADDING_ACTION(padding);
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


    validateNumeric = (numericString) => {
        // splits the numeric.
        let splitKey = numericString.split(',');
        for(let i = 0; i < splitKey.length; i++){
          let checkNum = this.isValidNumber(splitKey[i]);
          if(!checkNum){
              return false;
          }
        }
        return true;
     }


    validateSuperIncreasing = (total, numericString) => {
        // splits the private key.
        let splitKey = numericString.split(',');
        let currentMax = 0
        for(let i = 0; i < splitKey.length; i++){
          let curNo = Number(splitKey[i])
          let checkSuperIncreasing = this.isGreater(currentMax,curNo,i)
          if (checkSuperIncreasing){
            currentMax += (curNo);
          }else{
            return false;
          }
        }
        total.size = splitKey.length - 1
        total.total = currentMax
        total.arrOfVals = splitKey
        return true;
    }

    validateLocalPublicKey = () => {
      const { localPublicKey } = this.state;
      console.log(`Checking ${localPublicKey}`)
      if (!this.validateNumeric(localPublicKey)){
          this.enableError("Non numeric message received!")
      }else{
        this.setState((prevState)=>({
            localPublicKeyValid: true,
          })
        )
      }
    }

    validateCurrentPrivateKey = () => {
        const { actions } = this.props;
        const { currentPrivateKeyInput } = this.state;
        if (!this.validateNumeric(currentPrivateKeyInput)){
            this.enableError("Non numeric message received!")
            actions.UPDATE_SIMULATOR_PRIVATE_KEY_VALID_ACTION(false);
        }else{
            // check if it is superincreasing
            let total = { total: 0, size: 0, arrOfVals: [] } // create object to pass by reference1
            if(!this.validateSuperIncreasing(total, currentPrivateKeyInput)){
                this.enableError("Sequence is not superincreasing!")
                actions.UPDATE_SIMULATOR_PRIVATE_KEY_VALID_ACTION(false);
            }else{
                // sets the state.
                actions.UPDATE_SIMULATOR_PRIVATE_KEY_SUM_ACTION(total.total);
                actions.UPDATE_SIMULATOR_PRIVATE_KEY_ACTION(currentPrivateKeyInput);
            }
        }

    }

    validateCurrentModulus = () => {
        const { actions, lockState } = this.props;
        const { currentModulusInput } = this.state;
        if(!this.validateNumeric(currentModulusInput)){
            this.enableError("Non numeric modulo received!")
            actions.UPDATE_SIMULATOR_MODULO_VALID_ACTION(false);
          }else{
            // check if is bigger
            let curMod = Number(currentModulusInput)
            if(!this.isGreaterInteger( lockState.simulator.privateKeySum , curMod )){
              this.enableError(`Modulus is not larger than ${lockState.simulator.privateKeySum}!`)
              actions.UPDATE_SIMULATOR_MODULO_VALID_ACTION(false);
            }else{
                // integer is greater.
                actions.UPDATE_SIMULATOR_MODULO_ACTION(curMod);
            }
          }
    }

    validateCurrentMultiplier = () => {
        const { actions, lockState } = this.props;
        const { currentMultiplierInput } = this.state;
        let mod = Number(lockState.simulator.modulus)

        if (!this.validateNumeric(currentMultiplierInput)){
           this.enableError("Non numeric multiplier received!")
           actions.UPDATE_SIMULATOR_MULTIPLIER_VALID_ACTION(false);
        }else{
          let curMult = Number(currentMultiplierInput)

          if(!this.calculateGCD(mod,curMult)){
            this.enableError(`GCD of ${mod} and ${curMult} is not 1!`)
            actions.UPDATE_SIMULATOR_MULTIPLIER_VALID_ACTION(false);
          }else{
              console.log(`Dispatching ${curMult}`)
              actions.UPDATE_SIMULATOR_MULTIPLIER_ACTION(curMult);
          }
        }
    }
    validateEncryptionText = () => {
        const { lockState, trophySafetyFirst, actions } = this.props;
        const { currentPlainTextInput, localPublicKey } = this.state;
        if (this.isEmptyInput(currentPlainTextInput)){
            this.enableError("Input cannot be empty!")
        }else{
            let binString = this.getBinaryOfInput(currentPlainTextInput)
            let binBlocks = this.generateBinaryBlocks(binString)
            let encryptedArr = [];
            let lockStateArr = binBlocks.map((block, idx)=>{
              encryptedArr.push( block.map((x, index)=>{
                  return Number(localPublicKey[index]) * Number(x)
              }))
            })
            for(let i = 0; i < encryptedArr.length; i++){
                encryptedArr[i] = encryptedArr[i].reduce(this.sumReducer)
            }
            this.setState({
                encryptedOutput: encryptedArr,
            },()=>{
                if(!trophySafetyFirst){
                  actions.UNLOCK_TROPHY_SAFETY_FIRST()
                  actions.SHOW_TROPHY_ACTION()
                }
            })

        }
    }
    validateDecryptionText = () => {
        const { lockState, actions, trophyBreakWall  } = this.props
        const { currentEncryptedTextInput, currentPaddingInput } = this.state

        if (this.isEmptyInput(currentEncryptedTextInput)){
            this.enableError("Encrypted Input cannot be empty!")
        }else if (!this.validateNumeric(currentEncryptedTextInput)){
            // check if they are valid numbers.
            this.enableError("Text input is NOT numeric!")
        }else if (!this.isValidNumber(currentPaddingInput)){
            this.enableError("Padding is not a numerical value!")
        }else if (this.isEmptyInput(currentPaddingInput)) {
            this.enableError("Padding Input cannot be empty!")
        }else{
            let padding = Number(currentPaddingInput)
            console.log("Current padding input: "+padding)
            // convert the text to an array of numbers.
            let encryptedNumberArray = currentEncryptedTextInput.replace(/, +/g, ",").split(",").map(Number);
            let decrypted = []
            // compute the current inverse
            let currentInverse = this.xgcd(lockState.simulator.multiplier,lockState.simulator.modulus)
            encryptedNumberArray.forEach((enc)=>{
                let multiplied = enc * currentInverse;
                let modVal = multiplied % lockState.simulator.modulus;
                decrypted.push(modVal)
            })
            // convert private key to an array of numbers
            let privateKeyArr = lockState.simulator.privateKey.replace(/, +/g, ",").split(",").map(Number);
            let binStringList = this.getBinaryString(privateKeyArr, decrypted)
            console.log(binStringList)

            let unpadded = this.removePadding(binStringList,padding)
            console.log(unpadded)
            let dec = this.convertBinToText(unpadded)
            this.setState({
                decrypted: dec,
            },()=>{
              if (!trophyBreakWall){
                actions.UNLOCK_TROPHY_BREAK_WALL()
                actions.SHOW_TROPHY_ACTION()
              }
            })
        }

    }
    encryptionPage = () => {
        const { actions, lockState } = this.props;
        const { encryptedOutput, localPublicKeyValid, localPublicKey } = this.state;
        console.log(`Local Public Key: ${localPublicKeyValid}`)
        return (
            <>
            {
                !localPublicKeyValid ?
                 (
                  <View style={styles.SimulatorPage.rowKeyGen}>
                       <Text style={styles.SimulatorPage.textStyleRow}>Enter your public key: </Text>
                       <TextInput

                           style={{
                               ...styles.SimulatorPage.textStyleInput,
                               ...styles.SimulatorPage.roundLeftCorner,
                               ...styles.SimulatorPage.roundRightCorner,
                           }}
                           onChangeText =
                           {(text)=>{
                           this.setState({
                               localPublicKey: text,
                           })
                       }}/>
                       <View style={styles.SimulatorPage.genKeyButtonView}>
                           <View style={{flexDirection: 'row'}}>
                               <View style={styles.SimulatorPage.multipleButtonLeft}>
                                   <CustomButton text="Menu" callback={
                                       ()=>{
                                           this.setState({currentSimulatorPage: "menu"
                                           })
                                       }
                                   }
                                   buttonColor="blue"/>
                               </View>
                               <View style={styles.SimulatorPage.multipleButtonRight}>
                                   <CustomButton text="Validate" callback={()=>{this.validateLocalPublicKey()}} />
                               </View>

                           </View>

                       </View>
                  </View>
                ):
                  encryptedOutput.length === 0
                  ?(
                      <View style={styles.SimulatorPage.rowKeyGen}>
                           <Text style={styles.SimulatorPage.textStyleRow}>Using public key: </Text>
                           <View style={{flexDirection: 'row'}}>
                               <TextInput
                                   style={{
                                       ...styles.SimulatorPage.textStyleInputUneditable,
                                       ...styles.SimulatorPage.roundLeftCorner,
                                   }}
                                   editable={false}
                               >
                                   {localPublicKey}
                               </TextInput>
                               <View style={styles.SimulatorPage.imageButtonStyle}>
                                   <TouchableOpacity
                                       onPress = {()=>{
                                           this.setState({
                                              localPublicKey: "",
                                              localPublicKeyValid: false,
                                           })
                                       }}
                                   >
                                   <Image
                                       style={styles.SimulatorPage.copyStyle}
                                       source={EditButton}
                                   />
                                   </TouchableOpacity>
                               </View>
                               <View
                                   style={{
                                       ...styles.SimulatorPage.imageButtonStyle,
                                       ...styles.SimulatorPage.roundRightCorner
                                   }}
                               >
                                   <TouchableOpacity
                                       onPress={()=>{
                                           Clipboard.setString(localPublicKey)
                                           this.setState({
                                               showAlertPopUp: true,
                                               alertPopUpMessage: "Successfully copied your public key to your clipboard!"
                                           })
                                       }}
                                   >
                                   <Image
                                       style={styles.SimulatorPage.copyStyle}
                                       source={Copy}
                                   />
                                   </TouchableOpacity>
                               </View>

                           </View>

                           <Text style={styles.SimulatorPage.textStyleRow}>Enter your encryption string: </Text>
                              <TextInput
                                  style={{
                                      ...styles.SimulatorPage.textStyleInput,
                                      ...styles.SimulatorPage.roundLeftCorner,
                                      ...styles.SimulatorPage.roundRightCorner,
                                  }}
                                  onChangeText =
                                  {(text)=>{
                                  this.setState({
                                      currentPlainTextInput: text,
                                  })
                              }}/>

                                  <View style={styles.SimulatorPage.genKeyButtonView}>
                                      <View style={{flexDirection: 'row', }}>
                                          <View style={styles.SimulatorPage.multipleButtonLeft}>
                                              <CustomButton text="Menu" callback={
                                                  ()=>{
                                                      this.setState({
                                                        currentSimulatorPage: "menu"
                                                      })
                                                  }
                                              }
                                              buttonColor="blue"/>
                                          </View>
                                          <View style={styles.SimulatorPage.multipleButtonRight}>
                                                  <CustomButton text="Encrypt" callback={()=>{this.validateEncryptionText()}} />
                                          </View>

                                      </View>

                                  </View>
                      </View>
                  )
                  :
                  (
                      <>
                        <View style={styles.SimulatorPage.rowKeyGen}>
                          <Text style={styles.SimulatorPage.textStyleRow}>
                              Ciphertext
                          </Text>
                          <View style={{flexDirection: 'row'}}>
                              <TextInput
                                  style={{
                                      ...styles.SimulatorPage.textStyleInputUneditable,
                                      ...styles.SimulatorPage.roundLeftCorner,
                                  }}
                                  editable={false}
                              >
                                  {encryptedOutput.join(',')}
                              </TextInput>
                              <View
                                  style={{
                                      ...styles.SimulatorPage.imageButtonStyle,
                                      ...styles.SimulatorPage.roundRightCorner
                                  }}
                              >
                                  <TouchableOpacity
                                      onPress={()=>{
                                          Clipboard.setString(encryptedOutput.join(','))
                                          this.setState({
                                              showAlertPopUp: true,
                                              alertPopUpMessage: "Successfully copied the encrypted string to your clipboard!"
                                          })
                                      }}
                                  >
                                  <Image
                                      style={styles.SimulatorPage.copyStyle}
                                      source={Copy}
                                  />
                                  </TouchableOpacity>
                              </View>

                          </View>
                        </View>
                        <View style={styles.SimulatorPage.rowKeyGen}>
                          <Text style={styles.SimulatorPage.textStyleRow}>
                              Padding:
                          </Text>
                          <View style={{flexDirection: 'row'}}>
                              <TextInput
                                  style={{
                                      ...styles.SimulatorPage.textStyleInputUneditable,
                                      ...styles.SimulatorPage.roundLeftCorner,
                                  }}
                                  editable={false}
                              >
                                  {lockState.simulator.padding}
                              </TextInput>
                          </View>
                          <View style={styles.SimulatorPage.genKeyButtonView}>
                              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                  <View style={styles.SimulatorPage.multipleButtonLeft}>
                                          <CustomButton
                                          text="Menu"
                                          callback={
                                              ()=>{
                                                  this.setState({currentSimulatorPage: "menu"
                                                  })
                                              }
                                          }
                                          buttonColor="blue"/>
                                      </View>
                                  <View style={styles.SimulatorPage.multipleButtonRight}>
                                      <CustomButton
                                          text="Clear"
                                          callback={
                                              ()=>{
                                                  actions.UPDATE_SIMULATOR_RESET_ENC_ACTION()
                                                  this.setState({
                                                      currentPlainTextInput: "",
                                                      currentPaddingInput: "",
                                                      encryptedOutput: []
                                                  })
                                              }
                                      }/>
                                  </View>


                              </View>

                          </View>
                      </View>
                      </>


                  )

            }

            </>
        )
    }
    decryptionPage = () => {
        const { decrypted } = this.state;
        const { actions } = this.props;
        return (

            <>
                {
                    decrypted == ""
                    ?(
                        <>
                            <View style={styles.SimulatorPage.rowKeyGen}>
                                <Text style={styles.SimulatorPage.textStyleRow}>Enter your encryption string: </Text>
                                <TextInput
                                    style={{
                                        ...styles.SimulatorPage.textStyleInput,
                                        ...styles.SimulatorPage.roundLeftCorner,
                                        ...styles.SimulatorPage.roundRightCorner,
                                    }}
                                    onChangeText =
                                    {(text)=>{
                                        this.setState({
                                            currentEncryptedTextInput: text,
                                        })
                                }}/>
                            </View>
                            <View style={styles.SimulatorPage.rowKeyGen}>
                                <Text style={styles.SimulatorPage.textStyleRow}>
                                    Enter padding:
                                </Text>
                                <TextInput style={{
                                        ...styles.SimulatorPage.textStyleInput,
                                        ...styles.SimulatorPage.roundLeftCorner,
                                        ...styles.SimulatorPage.roundRightCorner,
                                    }}
                                    onChangeText =
                                    {(text)=>{
                                            this.setState({
                                                currentPaddingInput: text,
                                            })
                                        }
                                    }/>
                                <View style={styles.SimulatorPage.genKeyButtonView}>
                                    <View style={{flexDirection: 'row'}}>
                                        <View style={styles.SimulatorPage.multipleButtonLeft}>
                                            <CustomButton text="Menu" callback={
                                                ()=>{
                                                    this.setState({currentSimulatorPage: "menu"
                                                    })
                                                }
                                            }
                                            buttonColor="blue"/>
                                        </View>
                                        <View style={styles.SimulatorPage.multipleButtonRight}>
                                            <CustomButton text="Decrypt" callback={()=>{
                                                    try{
                                                        this.validateDecryptionText()
                                                    }catch(e){
                                                        console.log(e)
                                                    }

                                                }}
                                            />
                                        </View>

                                    </View>

                                </View>

                            </View>
                        </>

                    )
                    :(
                        <>
                        <View style={styles.SimulatorPage.rowKeyGen}>
                            <Text style={styles.SimulatorPage.textStyleRow}>
                                Decrypted Text:
                            </Text>
                            <View style={{flexDirection: 'row'}}>
                                <TextInput
                                    style={{
                                        ...styles.SimulatorPage.textStyleInputUneditable,
                                        ...styles.SimulatorPage.roundLeftCorner,
                                    }}
                                    editable={false}
                                >
                                    {decrypted}
                                </TextInput>
                                <View
                                    style={{
                                        ...styles.SimulatorPage.imageButtonStyle,
                                        ...styles.SimulatorPage.roundRightCorner
                                    }}
                                >
                                    <TouchableOpacity
                                        onPress={()=>{
                                            Clipboard.setString(decrypted)
                                            this.setState({
                                                showAlertPopUp: true,
                                                alertPopUpMessage: "Successfully copied the plaintext to your clipboard!"
                                            })
                                        }}
                                    >
                                    <Image
                                        style={styles.SimulatorPage.copyStyle}
                                        source={Copy}
                                    />
                                    </TouchableOpacity>
                                </View>
                            </View>

                        </View>
                        <View style={styles.SimulatorPage.genKeyButtonView}>
                            <View style={{flexDirection: 'row'}}>
                                <View style={styles.SimulatorPage.multipleButtonLeft}>
                                    <CustomButton text="Menu" callback={
                                        ()=>{
                                            this.setState({currentSimulatorPage: "menu"
                                            })
                                        }
                                    }
                                    buttonColor="blue"/>
                                </View>
                                <View style={styles.SimulatorPage.multipleButtonRight}>
                                    <CustomButton text="Clear" callback={()=>{
                                        this.setState({
                                            currentEncryptedTextInput:"",
                                            decrypted: "",
                                            currentPaddingInput: "0",
                                        })
                                        actions.UPDATE_SIMULATOR_RESET_DEC_ACTION()
                                    }} />
                                </View>

                             </View>

                        </View>
                        </>
                    )
                }

            </>
        )
    }
    keyGenerationPage = () => {
        const { actions, lockState } = this.props;
        return (

            <>
                {
                    lockState.simulator.privateKeyValid
                    ? (
                        <View style={styles.SimulatorPage.rowKeyGen}>
                            <Text style={styles.SimulatorPage.textStyleRow}>Private Key: </Text>
                                <View style={{flexDirection: 'row'}}>
                                    <TextInput
                                        style={{
                                            ...styles.SimulatorPage.textStyleInputUneditable,
                                            ...styles.SimulatorPage.roundLeftCorner,
                                        }}
                                        editable={false}
                                    >
                                        {lockState.simulator.privateKey}
                                    </TextInput>
                                    <View style={styles.SimulatorPage.imageButtonStyle}>
                                        <TouchableOpacity
                                            onPress={()=>{
                                                    actions.UPDATE_SIMULATOR_PRIVATE_KEY_VALID_ACTION(false)
                                                }
                                            }
                                        >
                                        <Image
                                            style={styles.SimulatorPage.copyStyle}
                                            source={EditButton}
                                        />
                                        </TouchableOpacity>
                                    </View>
                                    <View
                                        style={{
                                            ...styles.SimulatorPage.imageButtonStyle,
                                            ...styles.SimulatorPage.roundRightCorner
                                        }}
                                    >
                                        <TouchableOpacity
                                            onPress={()=>{
                                                Clipboard.setString(lockState.simulator.privateKey)
                                                this.setState({
                                                    showAlertPopUp: true,
                                                    alertPopUpMessage: "Successfully copied the private key to your clipboard!"
                                                })
                                            }}
                                        >
                                        <Image
                                            style={styles.SimulatorPage.copyStyle}
                                            source={Copy}
                                        />
                                        </TouchableOpacity>
                                    </View>

                                </View>


                        </View>
                    )
                    : (
                        <View style={styles.SimulatorPage.rowKeyGen}>
                            <Text style={styles.SimulatorPage.textStyleRow}>Enter your private key: </Text>
                            <TextInput style={{
                                ...styles.SimulatorPage.textStyleInput,
                                ...styles.SimulatorPage.roundRightCorner,
                                ...styles.SimulatorPage.roundLeftCorner,
                            }} onChangeText={(text)=>{
                                this.setState({
                                    currentPrivateKeyInput: text,
                                })
                            }}/>
                            <View style={styles.SimulatorPage.genKeyButtonView}>
                                <View style={{flexDirection: 'row'}}>
                                    <View style={styles.SimulatorPage.multipleButtonLeft}>
                                        <CustomButton text="Menu" callback={
                                            ()=>{
                                                this.setState({currentSimulatorPage: "menu"
                                                })
                                            }
                                        }
                                        buttonColor="blue"/>
                                    </View>
                                    <View style={styles.SimulatorPage.multipleButtonRight}>
                                        <CustomButton text="Validate" callback={()=>{this.validateCurrentPrivateKey()}} />
                                    </View>

                                </View>

                            </View>
                        </View>

                    )
                }
                {
                    lockState.simulator.privateKeyValid
                    ? (
                        lockState.simulator.modulusValid
                        ?  (
                            <View style={styles.SimulatorPage.rowKeyGen}>
                                <Text style={styles.SimulatorPage.textStyleRow}>
                                    Modulus:
                                </Text>
                                <View style={{flexDirection: 'row'}}>
                                    <TextInput
                                        style={{
                                            ...styles.SimulatorPage.textStyleInputUneditable,
                                            ...styles.SimulatorPage.roundLeftCorner,
                                        }}
                                        editable={false}
                                    >
                                        {lockState.simulator.modulus}
                                    </TextInput>
                                    <View style={styles.SimulatorPage.imageButtonStyle}>
                                        <TouchableOpacity
                                            onPress = {()=>{
                                                actions.UPDATE_SIMULATOR_MODULO_VALID_ACTION(false)
                                            }}
                                        >
                                        <Image
                                            style={styles.SimulatorPage.copyStyle}
                                            source={EditButton}
                                        />
                                        </TouchableOpacity>
                                    </View>
                                    <View
                                        style={{
                                            ...styles.SimulatorPage.imageButtonStyle,
                                            ...styles.SimulatorPage.roundRightCorner
                                        }}
                                    >
                                        <TouchableOpacity
                                            onPress={()=>{
                                                Clipboard.setString(lockState.simulator.modulus.toString())
                                                this.setState({
                                                    showAlertPopUp: true,
                                                    alertPopUpMessage: "Successfully copied the modulus to your clipboard!"
                                                })
                                            }}
                                        >
                                        <Image
                                            style={styles.SimulatorPage.copyStyle}
                                            source={Copy}
                                        />
                                        </TouchableOpacity>
                                    </View>

                                </View>

                            </View>
                        )
                        : (
                            <View style={styles.SimulatorPage.rowKeyGen}>
                                <Text style={styles.SimulatorPage.textStyleRow}>
                                    Choose your modulus:
                                </Text>
                                <TextInput style={{
                                    ...styles.SimulatorPage.textStyleInput,
                                    ...styles.SimulatorPage.roundRightCorner,
                                    ...styles.SimulatorPage.roundLeftCorner,
                                }}
                                keyboardType={'numeric'}
                                onChangeText={(text)=>{
                                    this.setState({
                                        currentModulusInput: text,
                                    })
                                }}/>
                                <View style={styles.SimulatorPage.genKeyButtonView}>
                                    <View style={{flexDirection: 'row'}}>
                                        <View style={styles.SimulatorPage.multipleButtonLeft}>
                                            <CustomButton text="Menu" callback={
                                                ()=>{
                                                    this.setState({currentSimulatorPage: "menu"
                                                    })
                                                }
                                            }
                                            buttonColor="blue"/>
                                        </View>
                                        <View style={styles.SimulatorPage.multipleButtonRight}>
                                            <CustomButton text="Validate" callback={()=>{this.validateCurrentModulus()}} />
                                        </View>
                                    </View>
                                </View>
                            </View>
                        )
                    ): null

                }
                {

                    (lockState.simulator.modulusValid
                        && lockState.simulator.privateKeyValid )
                        ? (
                            lockState.simulator.multiplierValid
                            ? (
                                <View style={styles.SimulatorPage.rowKeyGen}>
                                    <Text style={styles.SimulatorPage.textStyleRow}>
                                        Multiplier:
                                    </Text>
                                    <View style={{flexDirection: 'row'}}>
                                        <TextInput
                                            style={{
                                                ...styles.SimulatorPage.textStyleInputUneditable,
                                                ...styles.SimulatorPage.roundLeftCorner,
                                            }}
                                            keyboardType={'numeric'}
                                            editable={false}
                                        >
                                            {lockState.simulator.multiplier}
                                        </TextInput>
                                        <View style={styles.SimulatorPage.imageButtonStyle}>
                                            <TouchableOpacity
                                                onPress = {()=>{
                                                    actions.UPDATE_SIMULATOR_MULTIPLIER_VALID_ACTION(false)
                                                }}
                                            >
                                            <Image
                                                style={styles.SimulatorPage.copyStyle}
                                                source={EditButton}
                                            />
                                            </TouchableOpacity>
                                        </View>
                                        <View
                                            style={{
                                                ...styles.SimulatorPage.imageButtonStyle,
                                                ...styles.SimulatorPage.roundRightCorner
                                            }}
                                        >
                                            <TouchableOpacity
                                                onPress={()=>{
                                                    Clipboard.setString(lockState.simulator.multiplier.toString())
                                                    this.setState({
                                                        showAlertPopUp: true,
                                                        alertPopUpMessage: "Successfully copied the multiplier to your clipboard!"
                                                    })
                                                }}
                                            >
                                            <Image
                                                style={styles.SimulatorPage.copyStyle}
                                                source={Copy}
                                            />
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                </View>
                            )
                            : (
                            <View style={styles.SimulatorPage.rowKeyGen}>
                                <Text style={styles.SimulatorPage.textStyleRow}>
                                    Choose your multiplier:
                                </Text>
                                <TextInput style={{
                                    ...styles.SimulatorPage.textStyleInput,
                                    ...styles.SimulatorPage.roundRightCorner,
                                    ...styles.SimulatorPage.roundLeftCorner,
                                }} onChangeText={(text)=>{
                                    this.setState({
                                        currentMultiplierInput: text,
                                    })
                                }}/>
                                <View style={styles.SimulatorPage.genKeyButtonView}>
                                    <View style={{flexDirection: 'row'}}>
                                        <View style={styles.SimulatorPage.multipleButtonLeft}>
                                            <CustomButton text="Menu" callback={
                                                ()=>{
                                                    this.setState({currentSimulatorPage: "menu"
                                                    })
                                                }
                                            }
                                            buttonColor="blue"/>
                                        </View>
                                        <View style={styles.SimulatorPage.multipleButtonRight}>
                                            <CustomButton text="Validate" callback={()=>{this.validateCurrentMultiplier()}} />
                                        </View>
                                    </View>
                                </View>
                            </View>
                            )
                        ) : null

                }
                {
                    (lockState.simulator.modulusValid
                        && lockState.simulator.privateKeyValid
                        && lockState.simulator.multiplierValid)
                    ?  (

                        <View style={styles.SimulatorPage.rowKeyGen}>
                            {this.computePublicKey()}
                            <Text style={styles.SimulatorPage.textStyleRow}>
                                    Public Key:
                            </Text>
                            <View style={{flexDirection: 'row'}}>
                                <TextInput
                                    style={styles.SimulatorPage.textStyleInputUneditable}
                                    editable={false}
                                >
                                    {
                                        typeof(lockState.simulator.publicKey) === "object"
                                        ? lockState.simulator.publicKey.join(", ")
                                        :null
                                    }
                                </TextInput>

                                <View
                                    style={{
                                        ...styles.SimulatorPage.imageButtonStyle,
                                        ...styles.SimulatorPage.roundRightCorner
                                    }}
                                >
                                    <TouchableOpacity
                                        onPress={()=>{
                                            Clipboard.setString(

                                            typeof(lockState.simulator.publicKey) === "object"
                                            ? lockState.simulator.publicKey.join(",")
                                            :null
                                            )

                                            this.setState({
                                                showAlertPopUp: true,
                                                alertPopUpMessage: "Successfully copied the public key to your clipboard!"
                                            })

                                        }}
                                    >
                                    <Image
                                        style={styles.SimulatorPage.copyStyle}
                                        source={Copy}
                                    />
                                    </TouchableOpacity>
                                </View>
                            </View>

                             <View style={styles.SimulatorPage.genKeyButtonView}>
                                    <CustomButton text="Menu" callback={()=>{this.setState({currentSimulatorPage: "menu"})}}
                                        buttonColor="blue"/>
                            </View>
                        </View>
                    )
                    : null
                }
            </>
        )

    }
    mainMenu = () => {
        const { lockState } = this.props;
        return (
            // Don't anyhow remove empty views, they are there to provide flex.
            <>
                <View style={styles.SimulatorPage.rowView}>
                        <CustomButton callback={()=>{this.setState({currentSimulatorPage: "genkey"})}} text="KeyGen" />

                </View>
                {
                    lockState.simulator.genKeyCompleted
                    ? <>
                        <View style={styles.SimulatorPage.rowView}>
                                <CustomButton callback={() => {this.setCurrentSimulatorPage("encrypt")}} text="Encrypt" />
                        </View>
                        <View style={styles.SimulatorPage.rowView}>
                                <CustomButton callback={() => {this.setCurrentSimulatorPage("decrypt")}} text="Decrypt" />
                        </View>

                    </>
                    : null
                }
            </>
        )
    }
    getCurrentPage = () => {
        const { currentSimulatorPage } = this.state;
        switch(currentSimulatorPage){
            case "genkey":
                return this.keyGenerationPage()
            case "encrypt":
                return this.encryptionPage()
            case "decrypt":
                return this.decryptionPage()
            default:
                return this.mainMenu()
        }
    }
    render(){
        const {
            currentSimulatorPage,
            errorMessage,
            showError,
            showAlertPopUp,
            alertPopUpMessage,
        } = this.state;
        setTimeout(() => {
          if (showAlertPopUp) this.setState({ showAlertPopUp: false, alertPopUpMessage: "" });
        }, 3000);
        return(
            <View style={{...styles.SimulatorPage.learnTabPad}}>
                {
                    showAlertPopUp?
                    <AlertPopUp
                        icon={Success}
                        messageContent={alertPopUpMessage }
                        callback = {() => this.setState({ showAlertPopUp: false, alertPopUpMessage: "" })}
                        visibility = {showAlertPopUp}
                    />
                    : null
                }
                {
                    showError?
                    <PopUp visibility={showError} close={this.disableError}  message={errorMessage} icon={Error}/>
                    : null
                }
                <Text style={styles.SimulatorPage.textStyleTitle}>Trapdoor Knapsack Simulator</Text>
                {
                    this.getCurrentPage()

                }

            </View>
        );
    }
}

const mapStateToProps = state => ({
    lockState: state,
    trophyKeymaster: state.trophy.trophyKeymaster,
    trophySafetyFirst: state.trophy.trophySafetyFirst,
    trophyBreakWall: state.trophy.trophyBreakWall,
  })


const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators({
        UPDATE_SIMULATOR_PRIVATE_KEY_ACTION,
        UPDATE_SIMULATOR_PRIVATE_KEY_VALID_ACTION,
        UPDATE_SIMULATOR_MODULO_ACTION,
        UPDATE_SIMULATOR_MODULO_VALID_ACTION,
        UPDATE_SIMULATOR_PUBLIC_KEY_ACTION,
        UPDATE_SIMULATOR_GEN_KEY_COMPLETED_ACTION,
        UPDATE_SIMULATOR_TEXT_TO_ENC_ACTION,
        UPDATE_SIMULATOR_TEXT_TO_ENC_VALID_ACTION,
        UPDATE_SIMULATOR_TEXT_TO_DECRYPT_ACTION,
        UPDATE_SIMULATOR_DECRYPTED_TEXT_ACTION,
        UPDATE_SIMULATOR_PRIVATE_KEY_SUM_ACTION,
        UPDATE_SIMULATOR_MULTIPLIER_ACTION,
        UPDATE_SIMULATOR_MULTIPLIER_VALID_ACTION,
        UPDATE_SIMULATOR_PADDING_ACTION,
        UPDATE_SIMULATOR_RESET_ENC_ACTION,
        UPDATE_SIMULATOR_RESET_DEC_ACTION,
        UNLOCK_TROPHY_BREAK_WALL,
        UNLOCK_TROPHY_KEYMASTER,
        UNLOCK_TROPHY_SAFETY_FIRST,
        SHOW_TROPHY_ACTION,
    }, dispatch)
  });

  export default connect(mapStateToProps,mapDispatchToProps)(SimulatorPage);
