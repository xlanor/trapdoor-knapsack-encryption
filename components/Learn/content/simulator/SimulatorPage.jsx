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
    mainMenu = () => {
        return (
            <View style={{flex: 1}}>
                <View style={{flex: 3}}>

                    <Text style={styles.SimulatorPage.textStyleBold}>Trapdoor Knapsack Simulator</Text>
                </View>
                <View style={styles.SimulatorPage.flexContainerWrapper}>
                    <View style={{flex: 2}}/>
                    <View style={{flex: 1}}>
                        <CustomButton callback={this.selectGenKey} text="Generate Keys" />
                    </View>
                    <View style={{flex: 1}}>
                        <CustomButton callback={this.selectGenKey} text="Encrypt Message" />
                    </View>
                    <View style={{flex: 1}}>
                        <CustomButton callback={this.selectGenKey} text="Decrypt Message" />
                    </View>
                    <View style={{flex: 2}}/>

                </View>
            </View>
        )
    }
    render(){
        return(
            <View>
                {this.mainMenu()}
            </View>
           
        );
    }
}

export default SimulatorPage;