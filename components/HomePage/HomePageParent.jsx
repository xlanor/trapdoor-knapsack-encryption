import React, { Component } from 'react';

import { withNavigation } from 'react-navigation';
import { View, Button, Text, Image, TouchableHighlight } from 'react-native';

// importing image assets
import arrow from '../../assets/images/arrow.png';
import credits from '../../assets/images/credits.png';
import lightbulb from '../../assets/images/lightbulb.png';
import progress from '../../assets/images/progress.png';

import styles from './styles';

class HomePageParent extends Component{
  constructor(props){
    super(props);
    this.state = {
      selectedText: 'Trapdoor Knapsack',
      optionChosen: false,
      selectedOption: null,
    };
  }

  updateIconPressed = (keyName) => {
      let newKey = keyName == "creditsIcon" ? "Credits":
                        keyName == "lightBulbIcon" ? "Start Learning":
                        keyName == "progressIcon" ? "Progress" : "Trapdoor Knapsack";
      this.setState({
        selectedText: newKey,
        optionChosen: true,
      })
  }

  render(){
    const { navigation } = this.props;
    const { selectedText, optionChosen } = this.state;
  
    return(
        <View>
            <TouchableHighlight onPress={() => {this.updateIconPressed("creditsIcon")}}>        
              <Image
                key="creditsIcon"
                style= {styles.homePageParent.imageStyle} source = {credits}/>
            </TouchableHighlight>  
            <TouchableHighlight onPress={() => {this.updateIconPressed("lightBulbIcon")}}>  
              <Image 
                  key="lightBulbIcon"
                  style={styles.homePageParent.imageStyle} source = {lightbulb}/>
            </TouchableHighlight>

            <TouchableHighlight onPress={() => {this.updateIconPressed("progressIcon")}}>  
            <Image 
                key="progressIcon"
                style={styles.homePageParent.imageStyle} source = {progress}
            />
            </TouchableHighlight>
            <Text>{selectedText}</Text>
            {
                optionChosen?
                  <Image style={styles.homePageParent.imageStyle} source = {arrow}/>:
                  null
            }
        </View>
    );
  }
};


export default withNavigation(HomePageParent);