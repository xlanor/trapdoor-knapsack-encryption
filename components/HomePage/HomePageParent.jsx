import React, { Component } from 'react';

import { withNavigation } from 'react-navigation';
import { View, Button, Text, Image, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';

// redux actions
import { bindActionCreators } from 'redux';
import { changeCount } from '../../actions/counts';
import { COUNTER_CHANGE } from '../../constants';

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
    console.log(props)
  }

  updateIconPressed = (keyName) => {
      let newKey = keyName == "creditsIcon" ? "Credits":
                        keyName == "lightBulbIcon" ? "Start Learning":
                        keyName == "progressIcon" ? "Progress" : "Trapdoor Knapsack";
      this.setState({
        selectedText: newKey,
        optionChosen: true,
      })
      this.incrementCount();
  }
  decrementCount() {
    let { count, onChangeCount } = this.props;
    count--;
    onChangeCount(count);
  }
  incrementCount() {
    let { count, onChangeCount, dispatch } = this.props;
    console.log("IN FN");
    console.log( count );
    console.log( this.props );
    count++;
    onChangeCount(count);
  }

  render(){
    const { navigation, count } = this.props;
    const { selectedText, optionChosen } = this.state;
    console.log("Current Count "+count);
    return(
        <View>
            <View style={styles.homePageParent.iconsView}>
              <TouchableOpacity onPress={() => {this.updateIconPressed("creditsIcon")}}>        
                <Image
                  key="creditsIcon"
                  style= {styles.homePageParent.imageStyle} source = {credits}/>
              </TouchableOpacity>  
              <TouchableOpacity onPress={() => {this.updateIconPressed("lightBulbIcon")}}>  
                <Image 
                    key="lightBulbIcon"
                    style={styles.homePageParent.imageStyle} source = {lightbulb}/>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => {this.updateIconPressed("progressIcon")}}>  
              <Image 
                  key="progressIcon"
                  style={styles.homePageParent.imageStyle} source = {progress}
              />
              </TouchableOpacity>

            </View>
           
            <View style={styles.homePageParent.textWrapperStyle}>
              <Text
                style = {styles.homePageParent.textBox} 
              >
                {selectedText}
              </Text>

            {
                optionChosen?
                  <Image style={styles.homePageParent.imageStyleArrow} source = {arrow}/>:
                  null
            }
            </View>
        
        </View>
    );
  }
};

const mapStateToProps = state => ({
  count: state.count.count,
});



const mapDispatchToProps = dispatch =>({
    onChangeCount: (count) => {console.log(changeCount); dispatch({
      type: COUNTER_CHANGE,
      payload: count
    })},
    dispatch,
});

export default withNavigation(connect(mapStateToProps, mapDispatchToProps)(HomePageParent));