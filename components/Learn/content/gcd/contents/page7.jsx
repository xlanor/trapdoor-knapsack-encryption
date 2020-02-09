import React, { Component } from 'react';
import { View, Button, Text, Image, TouchableOpacity, KeyboardAvoidingView, FlatList, Dimensions } from 'react-native';

import AlertPopUp from '../../../../Common/AlertPopUp';
// import stylesheet.
import styles from '../styles';

// images
import Info from '../../../../../assets/images/InfoIcon.png';
import TableImg from '../../../../../assets/images/GCDTables/ET1.png';

export default class page7 extends Component {
  constructor(props) {
    super(props);

    // local state not affected by redux
    this.state = {
      showEuclideanInfoPopUp: false,
    };
  }

  euclideanInfoPopUp = () => {
    return (
      <>
        <Text style={styles.GCDPages.popUpTextStyle}>
          The Extended Euclidean algorithm is an extension to the Euclidean algorithm.
        </Text>
      </>
    );
  };

  inverseInfoPopUp = () => {
    const style = styles.GCDPages;
    const u = Dimensions.get('window').height;

    return (
      <>
        <Text style={style.popUpTextStyle}>
          The <Text style={{ ...style.inverseStyle, ...style.bold }}>modular inverse</Text> of{' '}
          <Text style={{ ...style.bold, ...style.valB }}>b</Text> refers to{' '}
          <Text style={{ ...style.bold, ...style.valB }}>b</Text>
          ^-1 where <Text style={{ ...style.bold, ...style.valB }}>b</Text>
          ^-1 * <Text style={{ ...style.bold, ...style.valB }}>b</Text> ≡ 1 mod{' '}
          <Text style={{ ...style.bold, ...style.valA }}>a</Text>.
        </Text>
      </>
    );
  };

  render() {
    const style = styles.GCDPages;
    const { showEuclideanInfoPopUp, showInverseInfoPopUp } = this.state;
    return (
      <View style={style.containerStyle}>
        {showEuclideanInfoPopUp ? (
          <AlertPopUp
            icon={Info}
            renderedBlocks={this.euclideanInfoPopUp()}
            callback={() => {
              this.setState({ showEuclideanInfoPopUp: false });
            }}
            visibility={showEuclideanInfoPopUp}
          />
        ) : null}
        {showInverseInfoPopUp ? (
          <AlertPopUp
            icon={Info}
            renderedBlocks={this.inverseInfoPopUp()}
            callback={() => {
              this.setState({ showInverseInfoPopUp: false });
            }}
            visibility={showInverseInfoPopUp}
          />
        ) : null}
        <Text style={style.titleStyle}>Extended Euclidean Algorithm</Text>
        <View style={style.imgContainer}>
          <Image source={TableImg} style={style.imgStyle} />
        </View>

        <Text style={style.contentStyle}>
          <Text
            style={style.links}
            onPress={() => {
              this.setState({ showEuclideanInfoPopUp: true });
            }}
          >
            Extended Euclidean algorithm
          </Text>{' '}
          is used to find if there is a{' '}
          <Text
            style={{ ...style.inverseStyle, ...style.bold, ...style.underline }}
            onPress={() => {
              this.setState({ showInverseInfoPopUp: true });
            }}
          >
            modular inverse
          </Text>{' '}
          of <Text style={{ ...style.bold, ...style.valB }}>b</Text> with respect to{' '}
          <Text style={{ ...style.bold, ...style.valA }}>a</Text> and the value of it.
          {'\n\n'}
          The easiest way to visualise the <Text style={style.bold}>Extended Euclidean algorithm</Text> is via a table.
          {'\n\n'}
          Construct a table like the original Euclidean algorithm but with{' '}
          <Text style={style.highlight}>4 more additional columns</Text>.{'\n'}
        </Text>
      </View>
    );
  }
}
