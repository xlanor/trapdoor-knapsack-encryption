import React, { Component } from 'react';
import { 
  Text,
  View
} from 'react-native';
import PropTypes from 'react-proptypes';
import {
  CheckBox,
  Card
} from 'react-native-elements';
import {
  PacmanIndicator
} from 'react-native-indicators';

import styles from './styles';

class Question extends Component {
    constructor(props){
      super(props);
      this.state = {
        checkedValue: -1,
        disable: false,
        checking: false,
      }
    }
    checkAnswer = () => {
      
    }
    changeChecked = (newValue) => {
      this.setState((prevState) => ({
          checkedValue: newValue,
          disable: !prevState.disable,
          checking: !prevState.checking,
        }), ()=>{setTimeout(()=>{this.checkValues()},1000)}
      )
      
    }
    checkValues = () => {
      console.log("Called")
      this.setState((prevState)=>({
        disable: !prevState.disable,
        checkedValue: -1,
        checking: !prevState.checking,

      }))
    }
    changeDisabled = () => {
      this.setState({
          disable: !this.state.disable,
        })
    }
    render(){
      const { 
        qnName,
        label,
        options
     } = this.props;
    const { checkedValue,disable, checking } = this.state;
      return(
          <>
            <Text>
              {qnName}
            </Text>
            <Text>
              {label}
            </Text>
            <View style={styles.Question.viewCard}>
            <Card>
            {
              options.map(x=>{
                return(
                <CheckBox
                    key={`${qnName}-${label}-${x.value}`}
                    title={x.label}
                    checked={checkedValue == x.value ? true: false}
                    val={x.value}
                    onPress={
                      ()=>{
                        this.changeChecked(x.value)
                      }
                    }
                    disabled={disable}
                />
                )
              })
            }
            </Card>
          
            </View>
            <View style={{backgroundColor:'blue'}}>
            {
              checking?
              <PacmanIndicator color='green' />
              : null
            }

            </View>
          </>
      );
    }
}
/*
Question.propTypes = {
  qnName: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  options:PropTypes.shapeOf({
      selected: PropTypes.boolean.isRequired,
      label: PropTypes.string.isRequired,
      value: PropTypes.integer.isRequired,
  })
}*/

export default Question;
