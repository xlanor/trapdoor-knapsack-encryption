import React, { Component } from 'react';
import { withNavigation } from 'react-navigation';
import { Text, View, Button } from 'react-native';

class PublicKeyParent extends Component{
    constructor(props){
      super(props);
      this.state = {
        valueM: 0,
        valueN: 0,
        privateKey: [],
        pkLength: 0,
        publicKey: [],
        showPublic: false,
        navigateNext: false,
      };
    }
    componentDidMount(){
      const { navigation } = this.props;
      const valueM  = navigation.getParam('valueM', 'No-Data');
      const valueN  = navigation.getParam('valueN', 'No-Data');
      const privateKey  = navigation.getParam('privateKey', 'No-Data');
      let pkLength = privateKey.length;
      this.setState({
          valueN: valueN,
          valueM: valueM,
          privateKey: privateKey,
          pkLength: pkLength
      });
      
    }
    
    static getDerivedStateFromProps(nextProps, prevState){
      const newValueM = nextProps.navigation.getParam('valueM', 'No-Data');
      const newValueN = nextProps.navigation.getParam('valueN', 'No-Data');
      const privateKey  = nextProps.navigation.getParam('privateKey', 'No-Data');
      console.log(`Derived state ${privateKey}`)
      console.log(`COmparing ${privateKey.join()} to ${prevState.privateKey.join()}`)
      if( newValueM != prevState.valueM ||
        newValueN != prevState.valueN ||
        privateKey.join() !== prevState.privateKey.join()
        ){
            console.log(" Change in state, returning a new object ");
            return { valueM: newValueM , valueN: newValueN, privateKey: privateKey };
        }
        return null;
    }

    calculatePublicKey = () => {
      const { valueM, valueN, privateKey, pkLength } = this.state;
      let newPk = [];
      for( let i = 0; i < pkLength; i++){
        newPk.push(privateKey[i] * valueN % valueM);
      }
      this.setState({
          publicKey: newPk,
          showPublic: true,
          navigateNext: true,
      })
    }
    render(){
      const { navigation } = this.props;
      const { valueM, valueN, publicKey, pkLength, 
        privateKey, showPublic, navigateNext } = this.state;
      console.log(publicKey + "THIS");
      return(
        <View>
          <Text>
            {valueM} {valueN} {pkLength}
          </Text>
          <Text>
           Private Key: {privateKey.join()}
          </Text>
          <Button title="Calculate Public Key" onPress={() => {
            this.calculatePublicKey()
          }}/>
          {
            showPublic ? (
            <Text>
                PublicKey: {publicKey.join()}
              </Text>
            ): null
          }
          {
            navigateNext? (
              <Button title="Enter text to encrypt" onPress={ () =>{navigation.navigate('EncryptText', {
                privateKey: privateKey, publicKey: publicKey, valueM: valueM, valueN: valueN
              } )}}/>
            ): null
          }
        </View>
      );
    }
};


export default withNavigation(PublicKeyParent);