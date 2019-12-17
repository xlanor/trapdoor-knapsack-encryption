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


// import stylesheet.
import styles from './styles';

class SimulatorPage extends Component{
    constructor(props){
        super(props);
    }
    selectGenKey = () => {

    }
    render(){
        return(
            <View>
                <Text style={styles.SimulatorPage.textStyleBold}>Trapdoor Knapsack Simulator</Text>
                <CustomButton callback={this.selectGenKey} text="Generate Keys" />
                <CustomButton callback={this.selectGenKey} text="Encrypt Message" />
                <CustomButton callback={this.selectGenKey} text="Decrypt Message" />
            </View>
        );
    }
}

export default SimulatorPage;