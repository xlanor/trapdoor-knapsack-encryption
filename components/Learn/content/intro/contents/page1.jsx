import React, { Component } from 'react';
import PropTypes from 'prop-types';
// begin redux imports
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
// importing redux defined actions

import { View, Text, Image, Dimensions } from 'react-native';

import {
  LINKS_HINT_DONE_ACTION,
  LINKS_HINT_NOTDONE_ACTION,
  HINT_RESET_ACTION,
  HINT_UNLOCK_ACTION,
} from '../../../../../redux-modules/actions/hint';

import AlertPopUp from '../../../../Common/AlertPopUp';

// Images
import Info from '../../../../../assets/images/InfoIcon.png';
import Intro from '../../../../../assets/images/IntroImages/Intro.gif';
import Title from '../../../../../assets/images/Title.png';
import Box1 from '../../../../../assets/images/Box1.png';
import Box2 from '../../../../../assets/images/Box2.png';

// import stylesheet.
import styles from '../styles';

class page1 extends Component {
  constructor(props) {
    super(props);

    // local state not affected by redux
    const { linksHintLocked } = this.props;
    this.state = {
      showHintInfoPopUp: linksHintLocked,
      showQuestionInfoPopUp: false,
    };
  }

  hintInfoPopUp = () => {
    const u = Dimensions.get('window').height;

    return (
      <>
        <View style={{ height: u * 0.1 }}>
          <Image source={Title} style={styles.PageStyle.imgStyle} />
        </View>
        <View style={{ height: u * 0.2 }}>
          <Image source={Box1} style={styles.PageStyle.imgStyle} />
        </View>
        <View style={{ height: u * 0.2 }}>
          <Image source={Box2} style={styles.PageStyle.imgStyle} />
        </View>
        <Text style={styles.PageStyle.popUpTextStyleBold}>
          Click underlined text to display additional information.
        </Text>
      </>
    );
  };

  questionInfoPopUp = () => {
    return (
      <>
        <Text style={styles.PageStyle.popUpTextStyle}>
          Which boxes should be chosen to maximize the amount of money while still keeping the overall weight under or
          equal to 15kg?
        </Text>
      </>
    );
  };

  render() {
    const { actions } = this.props;
    const { showHintInfoPopUp, showQuestionInfoPopUp } = this.state;
    const style = styles.PageStyle;
    const u = Dimensions.get('window').height;
    const m = 0.4;

    return (
      <View style={style.containerStyle}>
        {showHintInfoPopUp
          ? (console.log('HINT TRIGGERED'),
            (
              <AlertPopUp
                renderedBlocks={this.hintInfoPopUp()}
                callback={() => {
                  this.setState({ showHintInfoPopUp: false });
                  actions.LINKS_HINT_DONE_ACTION(); // <<=== Uncomment this line for hint to work as intended. Left commented for testing purpose.
                }}
                visibility={showHintInfoPopUp}
              />
            ))
          : console.log('HINT NOT TRIGGERED')}
        {showQuestionInfoPopUp ? (
          <AlertPopUp
            icon={Info}
            renderedBlocks={this.questionInfoPopUp()}
            callback={() => {
              this.setState({ showQuestionInfoPopUp: false });
            }}
            visibility={showQuestionInfoPopUp}
          />
        ) : null}
        <Text style={style.titleStyle}>Introduction</Text>
        <Text style={style.contentHead}>Knapsack Problem</Text>

        <Text style={style.contentStyle}>
          A knapsack problem is derived from the notion of packing an odd assortment of packages into a container.
          {'\n\n'}
          How to pack a single container{' '}
          <Text
            style={style.links}
            onPress={() => {
              this.setState({ showQuestionInfoPopUp: true });
            }}
          >
            most efficiently or with the highest value
          </Text>
          ?
        </Text>

        <View style={{ height: u * m }}>
          <Image source={Intro} style={style.imgStyle} />
        </View>
      </View>
    );
  }
}

page1.propTypes = {
  actions: PropTypes.shape({
    LINKS_HINT_DONE_ACTION: PropTypes.func,
    LINKS_HINT_NOTDONE_ACTION: PropTypes.func,
    HINT_RESET_ACTION: PropTypes.func,
    HINT_UNLOCK_ACTION: PropTypes.func,
  }),
  linksHintLocked: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  linksHintLocked: state.hint.linksHintLocked,
});
const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(
    {
      LINKS_HINT_DONE_ACTION,
      LINKS_HINT_NOTDONE_ACTION,
      HINT_RESET_ACTION,
      HINT_UNLOCK_ACTION,
    },
    dispatch,
  ),
});

export default connect(mapStateToProps, mapDispatchToProps)(page1);
