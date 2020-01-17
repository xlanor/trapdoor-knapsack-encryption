import React, { Component } from 'react';
import { 
  Text,
  View
} from 'react-native';
import PropTypes from 'react-proptypes';
import {
  CheckBox
} from 'react-native-elements';

class Question extends Component {
    constructor(props){
      super(props);
    }
    render(){
      const { 
        qnName,
        label,
        options
     } = this.props;
    
      return(
          <>
            <Text>
              {qnName}
            </Text>
            <Text>
              {label}
            </Text>
            {
              options.map(x=>{
                <CheckBox
                    title={x.label}
                    checked={false}
                    val={x.value}
                />
              })
            }
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
