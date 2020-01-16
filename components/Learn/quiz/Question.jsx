import React, { Component } from 'react';
import { 
  Text,
  View
} from 'react-native';
import PropTypes from 'react-proptypes';

class Question extends Component {
    constructor(props){
      super(props);
    }
    render(){
      return(
          <>
          </>
      );
    }
}

Question.propTypes = {
  qnName: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  options:PropTypes.shapeOf({
      selected: PropTypes.boolean.isRequired,
      label: PropTypes.string.isRequired,
      value: PropTypes.integer.isRequired,
  })
}

export default Question;
