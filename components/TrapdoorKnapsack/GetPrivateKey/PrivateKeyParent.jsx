import React, { Component } from 'react';
import { withNavigation } from 'react-navigation';
import { Text, View } from 'react-native';

class PrivateKeyParent extends Component{
    constructor(props){
      super(props);
      this.state = {
        valueM: 0,
        valueN: 0,
        publicKey: [],
        pkLength: 0,
      };
    }
    componentDidMount(){
      const { navigation } = this.props;
      const valueM  = navigation.getParam('valueM', 'No-Data');
      const valueN  = navigation.getParam('valueN', 'No-Data');
      const publicKey  = navigation.getParam('publicKey', 'No-Data');
      console.log(`Received this ${publicKey}`)
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
      if( newValueM != prevState.valueM ||
        newValueN != prevState.valueN ||
        publicKey.string() !== prevState.publicKey.string()
        ){
            console.log(" Change in state, returning a new object ");
            return { valueM: newValueM , valueN: newValueN, publicKey: publicKey };
        }
        return null;
    }
    render(){
      const { valueM, valueN, publicKey, pkLength } = this.state;
      console.log(publicKey);
      return(
        <View>
          <Text>
            {valueM} {valueN} {pkLength}
          </Text>
          <Text>
            {publicKey.join(',')}
          </Text>
        </View>
      );
    }
};


export default withNavigation(PrivateKeyParent);