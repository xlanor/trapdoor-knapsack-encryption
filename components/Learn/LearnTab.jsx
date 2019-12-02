import React, { Component } from 'react';
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

import { introPageOne } from './content'
// we will use ONE tab that will contain state
class LearnTab extends Component{
    constructor(props){
      super(props);
      // temporary state.
      this.state = {
         tab:"intro",
         page:1
      }
    }

    loadIntro = () =>{
      const { tab, page } = this.state;
      console.log(Pages)
      return (
        <Pages
          key={`${tab}-${page}-page`}
          title={introPageOne.title}
          renderText={introPageOne.text}
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

export default LearnTab;