import React, { Component } from 'react';
import { withNavigation } from 'react-navigation';
import { Text, View, Button } from 'react-native';

class PrivateKeyParent extends Component{
    constructor(props){
      super(props);
      this.state = {
        valueM: 0,
        valueN: 0,
        publicKey: [],
        pkLength: 0,
        privateKey: [],
        showPrivate: false,
      };
    }
    componentDidMount(){
      const { navigation } = this.props;
      const valueM  = navigation.getParam('valueM', 'No-Data');
      const valueN  = navigation.getParam('valueN', 'No-Data');
      const publicKey  = navigation.getParam('publicKey', 'No-Data');
      let pkLength = publicKey.length;
      this.setState({
          valueN: valueN,
          valueM: valueM,
          publicKey: publicKey,
          pkLength: pkLength
      });
      
    }
    
    static getDerivedStateFromProps(nextProps, prevState){
      const newValueM = nextProps.navigation.getParam('valueM', 'No-Data');
      const newValueN = nextProps.navigation.getParam('valueN', 'No-Data');
      const publicKey  = nextProps.navigation.getParam('publicKey', 'No-Data');
      console.log(`Derived state ${publicKey}`)
      console.log(`COmparing ${publicKey.join()} to ${prevState.publicKey.join()}`)
      if( newValueM != prevState.valueM ||
        newValueN != prevState.valueN ||
        publicKey.join() !== prevState.publicKey.join()
        ){
            console.log(" Change in state, returning a new object ");
            return { valueM: newValueM , valueN: newValueN, publicKey: publicKey };
        }
        return null;
    }

    calculatePrivateKey = () => {
      const { valueM, valueN, publicKey, pkLength } = this.state;
      let newPk = [];
      for( let i = 0; i < pkLength; i++){
        newPk.push(publicKey[i] * valueN % valueM);
      }
      this.setState({
          privateKey: newPk,
          showPrivate: true,
      })
    }
    render(){
      const { valueM, valueN, publicKey, pkLength, privateKey, showPrivate } = this.state;
      console.log(publicKey + "THIS");
      return(
        <View>
          <Text>
            {valueM} {valueN} {pkLength}
          </Text>
          <Text>
           Public Key: {publicKey.join()}
          </Text>
          <Button title="Calculate Private Key" onPress={() => {
            this.calculatePrivateKey()
          }}/>
          {
            showPrivate ? (
            <Text>
                Private Key: {privateKey.join()}
              </Text>
            ): null

          }
        </View>
      );
    }
};


export default withNavigation(PrivateKeyParent);