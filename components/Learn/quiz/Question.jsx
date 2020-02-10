import React, { Component } from 'react';
import { View, ScrollView } from 'react-native';

import PropTypes from 'react-proptypes';
import { CheckBox, Card } from 'react-native-elements';
import { PacmanIndicator } from 'react-native-indicators';

import * as Animatable from 'react-native-animatable';
import AlertPopUp from '../../Common/AlertPopUp';

import Alert from '../../../assets/images/alert.png';
import styles from './styles';

class Question extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checkedValue: -1,
      disable: false,
      checking: false,
      isCheckedValueCorrect: true,
    };
  }

  changeChecked = newValue => {
    this.setState(
      prevState => ({
        checkedValue: newValue,
        disable: !prevState.disable,
        checking: !prevState.checking,
      }),
      () => {
        setTimeout(() => {
          this.checkValues();
        }, 1000);
      },
    );
  };

  checkValues = () => {
    const { checkedValue, isCheckedValueCorrect } = this.state;
    const { callback } = this.props;
    const { answer } = this.props;
    console.log(isCheckedValueCorrect);
    console.log(`checked val ${checkedValue} answer ${answer} ${checkedValue === answer}`);
    const newChecked = checkedValue === answer;
    this.setState(
      prevState => ({
        disable: !prevState.disable,
        checkedValue: -1,
        checking: !prevState.checking,
        isCheckedValueCorrect: newChecked,
      }),
      () => {
        if (newChecked) {
          callback();
        }
      },
    );
  };

  changeDisabled = () => {
    this.setState(prevState => ({
      disable: !prevState.disable,
    }));
  };

  render() {
    const { qnName, label, options } = this.props;
    const { checkedValue, disable, checking, isCheckedValueCorrect } = this.state;
    return (
      <>
        <Animatable.View key={label} animation="slideInRight" duration={1500}>
          <View style={styles.Question.viewCard}>
            <Card title={label} titleStyle={styles.Question.viewQns}>
              <ScrollView>
                {options.map(x => {
                  return (
                    <CheckBox
                      key={`${qnName}-${label}-${x.value}`}
                      title={x.label}
                      checked={checkedValue === x.value}
                      val={x.value}
                      onPress={() => {
                        this.changeChecked(x.value);
                      }}
                      disabled={disable}
                    />
                  );
                })}
              </ScrollView>
            </Card>
          </View>
        </Animatable.View>
        <View>
          {checking ? <PacmanIndicator color="green" /> : null}
          {isCheckedValueCorrect ? null : (
            <AlertPopUp
              messageContent="Incorrect answer selected!"
              visibility
              callback={() => {
                this.setState({ isCheckedValueCorrect: true });
              }}
              icon={Alert}
            />
          )}
        </View>
      </>
    );
  }
}

Question.propTypes = {
  qnName: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.number.isRequired,
      selected: PropTypes.number.isRequired,
    }),
  ),
  callback: PropTypes.func.isRequired,
  answer: PropTypes.number.isRequired,
};

export default Question;
