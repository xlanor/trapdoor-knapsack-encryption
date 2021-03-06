import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
// import stylesheet.
import styles from '../styles';

// images
import TableImg from '../../../../../assets/images/GCDTables/ET6.png';

export default class page11 extends Component {
  render() {
    const style = styles.GCDPages;
    return (
      <View style={style.containerStyle}>
        <Text style={style.titleStyle}>Extended Euclidean Algorithm</Text>

        <View style={style.imgContainer}>
          <Image source={TableImg} style={style.imgStyle} />
        </View>

        <Text style={style.contentStyle}>
          <Text style={style.bold}>Step 4:</Text>
          {'\n\n'}
          Repeat for the remaining rows.
          {'\n\n'}
          Stop when <Text style={style.highlight}>r = 0</Text>.{'\n'}
        </Text>
      </View>
    );
  }
}
