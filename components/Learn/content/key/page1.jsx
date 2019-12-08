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

import ProgressBar1 from '../../../../assets/images/FiveStepProgress/ProgressBar1.png'
import ProgressBar2 from '../../../../assets/images/FiveStepProgress/ProgressBar2.png'
import ProgressBar3 from '../../../../assets/images/FiveStepProgress/ProgressBar3.png'
import ProgressBar4 from '../../../../assets/images/FiveStepProgress/ProgressBar4.png'
import ProgressBar5 from '../../../../assets/images/FiveStepProgress/ProgressBar5.png'

import { 
  ALLOW_NEXT_PAGE_ACTION
 }  from '../../../../actions/tabPage';

 import {
  UPDATE_PRIVATE_KEY_STRING_ACTION,
  UPDATE_PRIVATE_KEY_SUM_ACTION,
  UPDATE_PRIVATE_KEY_ARRAY_ACTION,
  UPDATE_MODULO_ACTION, 
  UPDATE_MULTIPLIER_ACTION,
  UPDATE_INVERSE_ACTION,
  UPDATE_PUBLIC_KEY_STRING_ACTION,
  UPDATE_PUBLIC_KEY_ARRAY_ACTION,
 } from '../../../../actions/updateParameters';
// dynamic pages not static pages.
class KeyPage extends Component {
   constructor(props){
      super(props);
      // local state not affected by redux
      this.state = {
        currentPrivateKey: "", //we do not need to persist this state, nor do we need to store this state elsewhere yet.
        currentModulo: "", //we do not need to persist this state, nor do we need to store this state elsewhere yet.
        currentMultiplier: "", //we do not need to persist this state, nor do we need to store this state elsewhere yet.
      }
    
   }

   isValidNumber = (stringToVerify) => {
    let str = String(stringToVerify);
    let reg = new RegExp('^[0-9]+$');
    return str.match(reg) === null ? false: true;
  }

   validateNumeric = () => {
      const { currentPrivateKey } = this.state;
      // splits the private key.
      let splitKey = currentPrivateKey.split(',');
      for(let i = 0; i < splitKey.length; i++){
        let checkNum = this.isValidNumber(splitKey[i]);
        if(!checkNum){
            // TODO: declare error in popup.
            this.setState({                                           
              currentPrivateKey: "", // TODO: reset the value in textbox too
            })
            return false;
        }
      } 
      
      return true;
   }
   
   isGreater = (a, b, idx) => {
     // returns true by default if idx is 0, if not whether a > b.
     console.log("Comparing "+ a + " "+ b)
      return idx == 0 ? true: a < b;
   }

   isGreaterInteger = ( a, b )  =>{
      return a < b;
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
     console.log("Final gcd "+multiplier)
     return (multiplier == 1)

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

   validateSuperIncreasing = (total) => {

    const { currentPrivateKey } = this.state;
    // splits the private key.
    let splitKey = currentPrivateKey.split(',');
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

   validatePrivateKey = () => {
      const { actions } = this.props;
      const { currentPrivateKey } = this.state;
      if (!this.validateNumeric()){
        // TODO: show an error message
        console.log("Not numeric!")
      }else{
        // check if it is superincreasing
        let total = { total: 0, size: 0, arrOfVals: [] } // create object to pass by reference1
        if(!this.validateSuperIncreasing(total)){
          console.log("Not superincreasing!")
        }else{
          console.log("Allowing next page")
          // sets the state.
          actions.ALLOW_NEXT_PAGE_ACTION()
          actions.UPDATE_PRIVATE_KEY_SUM_ACTION(total.total)
          actions.UPDATE_PRIVATE_KEY_STRING_ACTION(currentPrivateKey)
          actions.UPDATE_PRIVATE_KEY_ARRAY_ACTION(total.arrOfVals)
        }
      }

   }
   validateModulus = () => {
     const { lockState, actions } = this.props;
     const { currentModulo } = this.state;
      if(!this.isValidNumber(currentModulo)){
          // TODO: add error message
      }else{
        // check if is bigger
        let curMod = Number(currentModulo)
        if(!this.isGreaterInteger( lockState.updateParameters.privateKeySum , curMod )){
            // TODO: return error
        }else{
            console.log("Allowing next page")
            // integer is greater.
            actions.ALLOW_NEXT_PAGE_ACTION();
            actions.UPDATE_MODULO_ACTION(curMod);
        }
      }

   }

   validateMultiplier = () => {
     const { lockState, actions } = this.props;
     const { currentMultiplier } = this.state;

    let mod = Number(lockState.updateParameters.modulo)
   
     if (!this.isValidNumber(currentMultiplier)){
        // TODO: add error message
     }else{
       let curMult = Number(currentMultiplier)

       if(!this.calculateGCD(mod,curMult)){
         // TODO: add error message
         console.log("Invalid gcd!")
       }else{
        console.log("Allowing next page")
        // integer is greater.
        actions.ALLOW_NEXT_PAGE_ACTION();
        actions.UPDATE_MULTIPLIER_ACTION(curMult);

       }
     }

   }
   computePublicKey = () => {
     const { lockState } = this.props;
     // for every element in the public key, multiply by the multiplier and get the remainder.
     let privateKey = lockState.updateParameters.privateKeyArr
     let modulo = lockState.updateParameters.modulo
     let multiplier = lockState.updateParameters.multiplier
     let newPk = []
     for (let i = 0; i < privateKey.length; i++){
        let pub = (privateKey[i] * multiplier) % modulo
        newPk.push(pub);
     }
     return newPk;
   }
   loadInverse = () => {

     const { lockState, actions } = this.props;
     if (lockState.updateParameters.inverse == 0){
       // to prevent infinite loop, we need to ensure that inverse is reset to 0 if we go back then
       // currently we dont handle any state from popping off the stack.
        let currentInverse = this.xgcd(lockState.updateParameters.multiplier,lockState.updateParameters.modulo);
        actions.UPDATE_INVERSE_ACTION(currentInverse);
        actions.ALLOW_NEXT_PAGE_ACTION()

     }

   }
   getFifthPage = () => {
     const { lockState, actions } = this.props;
     if( lockState.updateParameters.publicKeyArr.length == 0 ){
        let pub = this.computePublicKey()
        actions.UPDATE_PUBLIC_KEY_ARRAY_ACTION(pub)
        actions.UPDATE_PUBLIC_KEY_STRING_ACTION(pub.join())
     }
     return (
       <View>
         <Text style={styles.page1.textStyle}> Compute the public key b:</Text>
         <Text style={styles.page1.textStyle}>For every element in a, multiply it by</Text>
         <Text style={styles.page1.textStyle}>the multiplier you chose in step 3 and </Text>
         <Text style={styles.page1.textStyle}>get the remainder when divided by the modulo m you </Text>
         <Text style={styles.page1.textStyle}>chose in step 2</Text>
         <Text style={styles.page1.textStyle}>Example to be added later</Text>
          <Text style={styles.page1.textStyle}>Public key: b = {lockState.updateParameters.publicKeyString}</Text>
          <Text style={styles.page1.textStyle}>Private key: a = {lockState.updateParameters.privateKeyString}</Text>
          <Text style={styles.page1.textStyle}>w = {lockState.updateParameters.multiplier} m = {lockState.updateParameters.modulo}</Text>
         <Text style={styles.page1.textStyle}>Inverse of multiplier = {lockState.updateParameters.inverse}</Text>
       </View>
     )
   }
   getFourthPage = () => {
     const { lockState } = this.props;
     this.loadInverse()
     return (
       <View>
         <Text style={styles.page1.textStyle}>Calculate the multiplicative inverse of your multiplier w({lockState.updateParameters.multiplier}):</Text>
         <Text style={styles.page1.textStyle}>(Using Extended Euclidean's algorithm)</Text>
         <Text style={styles.page1.textStyle}>This is needed for decryption</Text>
         <Text style={styles.page1.textStyle}>E.G: Inverse of 11 mod 39 = 32 (32 --7 + 39)</Text>
          <Text style={styles.page1.textStyle}>Multiplicative inverse of your multiplier ({lockState.updateParameters.multiplier}): {lockState.updateParameters.inverse}</Text>
       </View>
     )
   }

   getThirdPage = () => {
      const { lockState } = this.props;
      return (
        <View>
          <Text style={styles.page1.textStyle}>Choose your multiplier w:</Text>
          <Text style={styles.page1.textStyle}>(GCD will be taught in the next level)</Text>
          <Text style={styles.page1.textStyle}>This multiplier W must be a co-prime to your modulus m</Text>
          <Text style={styles.page1.textStyle}>This means gcd({lockState.updateParameters.modulo},w) = 1</Text>
          <Text style={styles.page1.textStyle}>E.G: w = 11, where gcd (39,11) = 1</Text>
          <TextInput keyboardType={'numeric'} style = {styles.page1.textBoxStyle} onChangeText={(text)=>{
            this.setState({currentMultiplier:text})
          }}/>
          <Button title="Check Multiplier" onPress={()=>{
            this.validateMultiplier()
          }}/>
        </View>
      )
   }

   getSecondPage = () =>{
     const { lockState } = this.props;
      return(
          <View>
            <Text style={styles.page1.textStyle}>Choose your modulus m:</Text>
            <Text style={styles.page1.textStyle}>Sum of a is: {lockState.updateParameters.privateKeySum}</Text>
            <Text style={styles.page1.textStyle}>m should be bigger than the sum of a</Text>
            <Text style={styles.page1.textStyle}>E.g: m = 39 which is > 38 (sum of a)</Text>
            <TextInput keyboardType={'numeric'} style={styles.page1.textBoxStyle} onChangeText={(text)=>{
                this.setState({ currentModulo:text})
            }}/>
            <Button title="Check Modulus" onPress={()=>{
                this.validateModulus();
            }}/>
          </View>
      )
   }
   getFirstPage = () => {
      const { lockState } = this.props;
      let isEntered = lockState.lessonPageTabAndPages.allowNextPage

     return (
       <View>
         <Text style={styles.page1.textStyle}>Enter your private key A</Text>
         <Text style={styles.page1.textStyle}> This private key A should be in a super increasing sequence</Text>
         <TextInput style={styles.page1.textBoxStyle} onChangeText={(text)=>{
            this.setState({
              currentPrivateKey: text,
            })
         }}/>
         <Button title="Check Private Key" onPress={()=>{
            this.validatePrivateKey();
         }}/>
         <Text style={styles.page1.textStyle}>
            Private key a: {isEntered ? lockState.updateParameters.privateKeyString : null}
          </Text>
        <Text style={styles.page1.textStyle}>Knapsack Size n: {isEntered? lockState.updateParameters.privateKeyArr.length-1:null}</Text>
       </View>
     )
   }

   checkPageNo = () =>{
     const { lockState } = this.props;
     return lockState.lessonPageTabAndPages.tabPage;
   }

   getProgressImage = () => {
     let pageNo = this.checkPageNo()
     switch(pageNo){
        case 1: return ProgressBar1;
        case 2: return ProgressBar2;
        case 3: return ProgressBar3;
        case 4: return ProgressBar4;
        case 5: return ProgressBar5;
        default: return ProgressBar1;
     }
   }
   
   getPageElements = () => {
    let pageNo = this.checkPageNo()
    switch(pageNo){
       case 1: 
        return this.getFirstPage();
       case 2:
        return this.getSecondPage();
       case 3: 
        return this.getThirdPage();
       case 4:
         return this.getFourthPage();
       case 5: 
         return this.getFifthPage();
       default:  
          return this.getFirstPage();
    }
   }
   render(){
     return(
       <View>
         <Image style={styles.page1.progressBarSize} source={this.getProgressImage()}></Image>
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
    ALLOW_NEXT_PAGE_ACTION,
    UPDATE_PRIVATE_KEY_STRING_ACTION,
    UPDATE_PRIVATE_KEY_SUM_ACTION,
    UPDATE_PRIVATE_KEY_ARRAY_ACTION,
    UPDATE_MODULO_ACTION,
    UPDATE_MULTIPLIER_ACTION,
    UPDATE_INVERSE_ACTION,
    UPDATE_PUBLIC_KEY_ARRAY_ACTION,
    UPDATE_PUBLIC_KEY_STRING_ACTION,
  }, dispatch)
});
export default connect(mapStateToProps,mapDispatchToProps)(KeyPage);