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

import AlertPopUp from '../../Common/AlertPopUp'

import Alert from '../../../assets/images/alert.png';
import styles from './styles';
import * as Animatable from 'react-native-animatable';

class Question extends Component {
    constructor(props){
      super(props);
      this.state = {
        checkedValue: -1,
        disable: false,
        checking: false,
        isCheckedValueCorrect: true,
      }
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
      const { checkedValue } = this.state;
      const { callback } = this.props;
      let answer = this.props.answer
      this.setState((prevState)=>({
        disable: !prevState.disable,
        checkedValue: -1,
        checking: !prevState.checking,
        isCheckedValueCorrect: checkedValue === answer,
      }),()=>{
        this.state.isCheckedValueCorrect === true
        ? callback()
        : null
      })
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
        options,
        callback
     } = this.props;
    const { 
      checkedValue,
      disable, 
      checking,
      isCheckedValueCorrect } = this.state;
      return(
        <>
        <Animatable.View key={label} animation="slideInRight" duration={1500}> 
            <View style={styles.Question.viewCard}>
            <Card title={label} titleStyle={styles.Question.viewQns}>
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
                    disabled={
                      disable
                    }
                /> 
                )
              })
              
            }
            </Card>
          
            </View>
            </Animatable.View>
            <View>
            {
              checking?
              <PacmanIndicator color='green' />
              : null
            }
            {
              isCheckedValueCorrect
              ? null:
              <AlertPopUp
                  messageContent="Incorrect answer selected!"
                  visibility={true}
                  callback={()=>{this.setState({isCheckedValueCorrect:true})}}
                  icon={Alert}
              />
            }

            </View>
          </>
      );
    }
}
/*

AlertPopUp.propTypes = {
  messageContent: PropTypes.string,
  renderedBlocks: PropTypes.node,
  callback: PropTypes.func.isRequired,
  visibility: PropTypes.bool.isRequired,
  icon: PropTypes.node,
};

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
