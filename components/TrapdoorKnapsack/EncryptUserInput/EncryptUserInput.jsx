import React, { Component } from 'react';
import { withNavigation } from 'react-navigation';
import { Text, View, Button,TextInput } from 'react-native';



const styles = {
  textInput: {
    borderWidth: 2,  // size/width of the border
    borderColor: 'lightgrey',  // color of the border
    paddingLeft: 10,
    height: 50
  }
}

class EncryptUserInput extends Component{
  constructor(props){
    super(props);
    this.state = {
      showEncryptButton: false,
      text: '',
      showEncrypted: false,
      showDecryptedButton: false,
      showDecrypt: false,
      decrypted: [],
      encrypted: [],
      asciiCode: [],
      knapsackLength: 0,
      padNumber: 0,
    };
  }

  isTextEmpty = (text) => {
    return text.trim() === ""? true: false;
  }

  showEncryptButton = (text) =>{
      this.isTextEmpty(text) ? 
      this.setState({ showEncryptButton: false, text: ''}):
      this.setState({ showEncryptButton: true, text: text.trim() });
  }

  convertStringToBinary = () => {
    const { text } = this.state;
    console.log(`Text ${text}`)
    return (
        Array.from(text)
          .reduce((acc, char) => acc.concat(char.charCodeAt().toString(2)), [])
          .map(bin => '0'.repeat(8 - bin.length) + bin )
          .join('')
    );
  }
  xgcd = (a, b) =>{ 
    if (b == 0) {
      return [1, 0, a];
    }
 
    temp = this.xgcd(b, a % b);
    x = temp[0];
    y = temp[1];
    d = temp[2];
    return [y, x-y*Math.floor(a/b), d];
  }
  chunk = (binString, trapdoorSize) => {
    let binBlocks = []
    let upper = binString.length - trapdoorSize

    for(let i = 0; i <= upper; i+= trapdoorSize){
      binBlocks.push(binString.substring(i,i+trapdoorSize));
    }
    // need to pad
    if(binString.length % trapdoorSize != 0){
      let padding =  trapdoorSize - (binString.length % trapdoorSize);
      let start = binString.length - (binString.length % trapdoorSize);
      let blockStr = binString.substring(start);
      for (let j = 0; j < padding; j++){
        blockStr += '0';
      }
      binBlocks.push(blockStr);
      this.setState({
        padNumber:padding,
      })
    }
    return binBlocks;

  } 

  encrypt = () => {
    const { navigation } = this.props;
    const { padNumber } = this.state;
    const publicKey  = navigation.getParam('publicKey', 'No-Data');
    let binString = this.convertStringToBinary();
    let chunkedBinStr = this.chunk(binString, publicKey.length);
    console.log(chunkedBinStr)
    console.log(padNumber)
    let encrypted = [];
    chunkedBinStr.forEach((chunkBin)=>{
        let curIdx = 0;
        var total = 0;
        // cast binary string to character.
        console.log(chunkBin);
        console.log('----')
        console.log(publicKey)
        for(let i = 0; i < chunkBin.length; i++){
            let numeric = chunkBin.charCodeAt(i);
            console.log("Numeric: "+numeric)
            let result = numeric * publicKey[curIdx];
            console.log("Rs: "+result)
            total += result;
            console.log("Total" +total);
            curIdx++;
        }
        encrypted.push(total);
    });
    this.setState({
        encrypted: encrypted,
        showEncrypted: true,
        showDecryptedButton: true,
    })
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

  removePadding = (binStringList) => {
      const { padNumber } = this.state;
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
    const { navigation } = this.props;
    const { encrypted, padNumber } = this.state;
    const valueM = navigation.getParam('valueM', 'No-Data');
    const valueN = navigation.getParam('valueN', 'No-Data');
    const privateKey  = navigation.getParam('privateKey', 'No-Data');
    
    const modInv = this.xgcd(valueN, valueM)[0];
    console.log(`Modular Multiplicative Invers: ${modInv}`);
    console.log(`Private Key: ${privateKey}`)
    let decrypted = [];
    encrypted.forEach((enc)=>{
        let multiplied = enc * modInv;
        let modVal = multiplied % valueM;
        decrypted.push(modVal);
    });

    console.log(decrypted)
    let binStringList = this.getBinaryString(privateKey,decrypted)
    console.log(binStringList)
    let unpadded = this.removePadding(binStringList)
    console.log(unpadded)
    let dec = this.convertBinToText(unpadded)
    console.log(dec)
  }
  render(){
    const { showEncryptButton, text, showEncrypted, encrypted, showDecryptedButton } = this.state;
    return(
      <View>  
        <Text>Enter Text to Encrypt</Text>
        <TextInput style={styles.textInput} onChangeText={(text)=>{this.showEncryptButton(text)}} />
        {
          showEncryptButton?
            <Button title="Encrypt" onPress={() => {this.encrypt()}}/>:
            null
        }
        {
          showEncrypted ? 
            <Text> {encrypted.join()} </Text>:
            null
        }
        {
          showDecryptedButton?
            <Button title="Decrypt" onPress={() => {this.decrypt()}}/>:
            null
        }
      </View>
    );
  }

};

export default withNavigation(EncryptUserInput);