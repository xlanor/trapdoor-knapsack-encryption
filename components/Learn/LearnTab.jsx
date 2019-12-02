import React, { Component } from 'react';
import { withNavigation } from 'react-navigation';
import { 
  View, 
  Button,  
  Text, 
  Image, 
  TouchableOpacity,
  FlatList 
} from 'react-native';

import { Algo } from '../../assets/images'

import Pages  from './Pages'

import { 
  introPageOne,
  introPageTwo
} from './content'

import {
  NEXT_INTRO_PAGE_ACTION,
  PREVIOUS_INTRO_PAGE_ACTION,
  RESET_PAGE_ACTION,
  CHANGE_TAB_ACTION,
} from '../../actions/learnPageLock';

// begin redux imports
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// we will use ONE tab that will contain state
class LearnTab extends Component{
    constructor(props){
      super(props);
      // temporary state.
      this.state = {
         tab: "intro",
         page: 1
      }
    }

    loadIntro = () =>{
      const { tab, page } = this.state;
      console.log(Pages)
      return (
        <Pages
          key={`${tab}-${page}-page`}
          title={introPageTwo.title}
          renderText={introPageTwo.text}
        />
      )
        
    }

    render(){
      return(
        <View>
          {this.loadIntro()}

        </View>
      );
    }
};


const mapStateToProps = state => ({
  lockState: state
})

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({
    NEXT_INTRO_PAGE_ACTION,
    PREVIOUS_INTRO_PAGE_ACTION,
    RESET_PAGE_ACTION,
    CHANGE_TAB_ACTION,
  }, dispatch)
});

export default  withNavigation(connect(mapStateToProps, mapDispatchToProps)(LearnTab));;