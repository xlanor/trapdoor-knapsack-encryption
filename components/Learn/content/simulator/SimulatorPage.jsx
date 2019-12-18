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
        this.state = {
            currentSimulatorPage: "menu", // menu by default.
        }
    }
    setCurrentSimulatorPage = (curPage) => {
        this.setState({
            currentSimulatorPage: curPage,
        })
    }
    selectGenKey = () => {

    }
    mainMenu = () => {
        /*
        <View style={{flex: 3}}>

                    <Text style={styles.SimulatorPage.textStyleBold}>Trapdoor Knapsack Simulator</Text>
                </View>
                <View style={styles.SimulatorPage.flexContainerWrapper}>
                    <View style={{flex: 2}}/>
                    <View style={{flex: 1}}>
                    </View>
                    <View style={{flex: 1}}>
                    </View>
                    <View style={{flex: 1}}>
                    </View>
                    <View style={{flex: 2}}/>

                </View>
                */
        return (
            // Don't anyhow remove empty views, they are there to provide flex.
            <>
                <View style={styles.SimulatorPage.rowView}>
                    <View style={styles.SimulatorPage.buttonWrapper}>
                        <CustomButton callback={this.selectGenKey} text="Generate Keys" />
                    </View>

                </View>
                <View style={styles.SimulatorPage.rowView}>
                    <View style={styles.SimulatorPage.buttonWrapper}>
                        <CustomButton callback={this.selectGenKey} text="Encrypt Message" />
                    </View>
                </View>
                <View style={styles.SimulatorPage.rowView}>
                    <View style={styles.SimulatorPage.buttonWrapper}>
                        <CustomButton callback={this.selectGenKey} text="Decrypt Message" />
                    </View>
                </View>
            </>
        )
    }
    render(){
        return(
            <>
            <Text style={styles.SimulatorPage.textStyleBold}>Trapdoor Knapsack Simulator</Text>
                <View  style={{ flex:1 }}>
                    {this.mainMenu()}
                </View>
           
            </>
        );
    }
}

export default SimulatorPage;