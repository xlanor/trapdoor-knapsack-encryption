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
 } from '../../../../actions/simulators'

import Error from '../../../../assets/images/Error.png'

import PopUp from '../../../Common/PopUp'

// import stylesheet.
import styles from './styles';

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
        }
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
        const { lockState, actions } = this.props;
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
        }
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

    validateNumeric = (numericString) => {
        // splits the private key.
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
    validateCurrentPrivateKey = () => {
        const { actions } = this.props;
        const { currentPrivateKeyInput } = this.state;
        console.log("Validating "+currentPrivateKeyInput)
        if (!this.validateNumeric(currentPrivateKeyInput)){
            this.enableError("Non numeric message received!")
            console.log("here")
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
        console.log(actions)
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
    encryptionPage = () => {

    }
    decryptionPage = () => {

    }
    keyGenerationPage = () => {
        const { actions, lockState } = this.props;
        return (
            <>
                {
                    lockState.simulator.privateKeyValid
                    ? (
                        <>
                            <Text>Private Key: </Text>
                            <Text>{lockState.simulator.privateKey}</Text>
                        </>
                    )
                    : (
                        <>
                            <Text> Enter your private key: </Text>
                            <TextInput onChangeText={(text)=>{
                                this.setState({
                                    currentPrivateKeyInput: text,
                                })
                            }}/>
                            <Button title="Validate Key" onPress={()=>{this.validateCurrentPrivateKey()}}></Button>
                        </>
                    )
                }
                {
                    lockState.simulator.privateKeyValid
                    ? (
                        lockState.simulator.modulusValid
                        ?  (
                            <>
                                <Text>Modulus: </Text>
                                <Text>{lockState.simulator.modulus}</Text>
                            </>
                        )
                        : (
                            <>
                                <Text> Choose your modulus:</Text>
                                <TextInput onChangeText={(text)=>{
                                    this.setState({
                                        currentModulusInput: text,
                                    })
                                }}/>
                                <Button title="Validate Modulus" onPress={()=>{this.validateCurrentModulus()}}/>
                            </>
                        )
                    ): null
                   
                }
                {

                    (lockState.simulator.modulusValid 
                        && lockState.simulator.privateKeyValid )
                        ? (
                            lockState.simulator.multiplierValid 
                            ? (
                                <>
                                    <Text> Multiplier: </Text>
                                    <Text>{lockState.simulator.multiplier}</Text>
                                </>
                            )
                            : (
                            <>
                                <Text> Choose your multiplier:</Text>
                                <TextInput onChangeText = {(text)=>{
                                    this.setState({
                                        currentMultiplierInput: text,
                                    })
                                }}/>
                                <Button title="Validate Multiplier" onPress={()=>{this.validateCurrentMultiplier()}}/>
                            </>
                            )
                        ) : null
                                    
                }
                {
                    (lockState.simulator.modulusValid 
                        && lockState.simulator.privateKeyValid 
                        && lockState.simulator.multiplierValid) 
                    ?  (

                        <>
                            {this.computePublicKey()}
                            <Text> Public Key: </Text>
                             <Text>{typeof(lockState.simulator.publicKey) === "object" ? lockState.simulator.publicKey.join(", "):null}</Text>
                             <Button title="Return to menu" onPress={()=>{this.setState({currentSimulatorPage: "menu"})}}/>
                        </>
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
                    <View style={styles.SimulatorPage.buttonWrapper}>
                        <CustomButton callback={() => {this.setCurrentSimulatorPage("genkey")}} text="Generate Keys" />
                    </View>

                </View>
                {
                    lockState.simulator.genKeyCompleted
                    ? <>
                        <View style={styles.SimulatorPage.rowView}>
                            <View style={styles.SimulatorPage.buttonWrapper}>
                                <CustomButton callback={() => {this.setCurrentSimulatorPage("encrypt")}} text="Encrypt Message" />
                            </View>
                        </View>
                        <View style={styles.SimulatorPage.rowView}>
                            <View style={styles.SimulatorPage.buttonWrapper}>
                                <CustomButton callback={() => {this.setCurrentSimulatorPage("decrypt")}} text="Decrypt Message" />
                            </View>
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
        const { currentSimulatorPage, errorMessage, showError } = this.state;
        return(
            <>

            {
                showError?
                <PopUp visibility={showError} close={this.disableError}  message={errorMessage} icon={Error}/>
                : null
            }
            <Text style={styles.SimulatorPage.textStyleBold}>Trapdoor Knapsack Simulator</Text>
                <View  style={{ flex:1 }}>
                    {  
                        this.getCurrentPage()
                    }
                </View>
           
            </>
        );
    }
}

const mapStateToProps = state => ({
    lockState: state
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
    }, dispatch)
  });

  export default connect(mapStateToProps,mapDispatchToProps)(SimulatorPage);