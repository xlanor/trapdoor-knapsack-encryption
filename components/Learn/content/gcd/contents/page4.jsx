import React, { Component } from 'react';
import { View, Text, Image,  } from 'react-native';
// import stylesheet.
import styles from '../styles';

// images
import TableImg from '../../../../../assets/images/GCDTables/NormalT2.png';

export default class page4 extends Component {
  render() {
    const style = styles.GCDPages;
    return (
      <View style={style.containerStyle}>
        <Text style={style.titleStyle}>Euclidean Algorithm</Text>

        <View style={style.imgContainer}>
          <Image source={TableImg} style={style.imgStyle} />
        </View>

        <Text style={style.contentStyle}>
          <Text style={style.bold}>Step 1:</Text>
          {'\n\n'}
          Calculate the values of <Text style={style.bold}>q</Text> and <Text style={style.bold}>r</Text>:
        </Text>
        <Text style={{ ...style.contentStyle, textAlign: 'center' }}>
          282 / 23 => <Text style={style.highlight}>q = 12, r = 6</Text>
        </Text>

        <Text style={style.contentStyle}>
          {'\n'}
          Let <Text style={style.bold}>r</Text> be <Text style={style.highlight}>6</Text> and{' '}
          <Text style={style.bold}>q</Text> be <Text style={style.highlight}>12</Text>.{'\n'}
        </Text>
      </View>
    );
  }
}
