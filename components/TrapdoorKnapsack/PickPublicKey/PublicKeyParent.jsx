import React, { Component } from 'react';

import { withNavigation } from 'react-navigation';
import { View, Button, Text, TextInput } from 'react-native';

const styles = {
  textInput: {
    borderWidth: 2,  // size/width of the border
    borderColor: 'lightgrey',  // color of the border
    paddingLeft: 10,
    height: 50
  }
}

class PublicKeyParent extends Component{
  constructor(props){
    super(props);
    this.state = {
      valueM: 0,
      valueN: 0,
      selectedValue: 0,
      buttonShow: false,
      superIncreasing: [],
      superIncreasingString: '',
    }
  }
  componentDidMount(){
    const { navigation } = this.props;
    const valueM  = navigation.getParam('valueM', 'No-Data');
    const valueN  = navigation.getParam('valueN', 'No-Data');
    this.setState({
        valueN: valueN,
        valueM: valueM,
    });
  }

  static getDerivedStateFromProps(nextProps, prevState){
    const newValueM = nextProps.navigation.getParam('valueM', 'No-Data');
    const newValueN = nextProps.navigation.getParam('valueN', 'No-Data');
    console.log (`Retrived value M ${newValueM}, Retrieved value N ${newValueN}`)
    if( newValueM != prevState.valueM ||
      newValueN != prevState.valueN
      ){
          console.log(" Change in state, returning a new object ");
          return { valueM: newValueM , valueN: newValueN };
      }
      return null;
  }
  generateSuperIncreasing = () => {
    const { selectedValue } = this.state;
    let begin = 1;
    let newArr = [];
    for(let i = 0; i < selectedValue; i++){
      newArr.push(begin);
      begin += begin+1;
    }
    this.setState({
        superIncreasing: newArr,
        superIncreasingString: newArr.join(','),
    })
}
  showAutoGenerate = (text) =>{
      text > 0 ? 
        this.setState({
          selectedValue: text,
          buttonShow: true,
        }):
        null;
  }

  render(){
    const { navigation } = this.props;
    const { valueM, valueN, buttonShow, superIncreasingString 
        , superIncreasing} = this.state;
  
    return(
        <View>
          <Text>Modulus: {valueM}  Multiplier: {valueN}</Text>
          <TextInput style={styles.textInput} onChangeText={(text) => {this.showAutoGenerate(text)}}/>
          {
            buttonShow ?
              <Button title="Autogenerate" onPress={() => {this.generateSuperIncreasing()}}/>
              :null
          }
          <Text>{superIncreasingString}</Text>
          {
            buttonShow ? 
            <Button title="Next Page" onPress={() => {navigation.navigate('SelectPrivateKey', {
                primaryKey: superIncreasing, valueM: valueM, valueN: valueN
              } )
            }}/>:
            null
          }
        </View>
    );
  }
};


export default withNavigation(PublicKeyParent);