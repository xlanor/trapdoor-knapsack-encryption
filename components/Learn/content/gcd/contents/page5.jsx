import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
// import stylesheet.
import styles from '../styles';

// images
import TableImg from '../../../../../assets/images/GCDTables/NormalT3.png';

export default class page5 extends Component {
  render() {
    const style = styles.GCDPages;
    return (
      <View style={style.containerStyle}>
        <Text style={style.titleStyle}>Euclidean Algorithm</Text>

        <View style={style.imgContainer}>
          <Image source={TableImg} style={style.imgStyle} />
        </View>

        <Text style={style.contentStyle}>
          <Text style={style.bold}>Step 2:</Text>
          {'\n\n'}
          Fill in the next row:
          {'\n\n'}
          Let <Text style={{ ...style.bold, ...style.valA }}>a</Text> be the <Text style={style.bold}>previous b</Text>.
          {'\n'}
          Let <Text style={{ ...style.bold, ...style.valB }}>b</Text> be the <Text style={style.bold}>previous r</Text>.
          {'\n'}
        </Text>
      </View>
    );
  }
}
