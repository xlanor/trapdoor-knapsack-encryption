import React, { Component } from 'react';
import { View, Button, Text, Image, TouchableOpacity, KeyboardAvoidingView, FlatList } from 'react-native';
// import stylesheet.
import styles from '../styles';

// images
import TableImg from '../../../../../assets/images/GCDTables/NormalT5.png';

export default class page6 extends Component {
  render() {
    const style = styles.GCDPages;
    return (
      <View style={style.containerStyle}>
        <Text style={style.titleStyle}>Euclidean Algorithm</Text>

        <View style={style.imgContainer}>
          <Image source={TableImg} style={style.imgStyle} />
        </View>

        <Text style={style.contentStyle}>
          <Text style={style.bold}>Step 3:</Text>
          {'\n\n'}
          Repeat for the rest of the rows.
          {'\n\n'}
          Stop when <Text style={style.highlight}>r = 0</Text>.{'\n\n'}
          Now, look at the <Text style={style.bold}>last value</Text> of{' '}
          <Text style={{ ...style.bold, ...style.valB }}>b</Text> which is the{' '}
          <Text style={style.bold}>
            <Text style={style.GCDStyle}>GCD</Text> of
          </Text>{' '}
          23 and 282.
          {'\n\n'}
          Hence, <Text style={{ ...style.bold, ...style.GCDStyle }}>GCD(282, 23) = 1</Text>.{'\n'}
        </Text>
      </View>
    );
  }
}
