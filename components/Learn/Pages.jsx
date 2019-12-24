// every learntab has a page.
// the page may be different based on whatever is passed to it.
import React, { Component } from 'react';
import { 
  View, 
  Button,  
  Text, 
  Image, 
  TouchableOpacity,
  FlatList 
} from 'react-native';


import HTML from 'react-native-render-html'
import PropTypes from 'prop-types'

// import stylesheet.
import styles from './styles';

class Pages extends Component{
  constructor(props){
      super(props);
      
  }
  render(){
    const { title, renderText } = this.props;
    return(
      <>
        <HTML html={title}/>

        <HTML html={renderText} 
          tagsStyles={styles.pages.tagStyle}
        />
      </>
    );
  }
}


Pages.propTypes = {
  title: PropTypes.string.isRequired,
};


export default Pages;
