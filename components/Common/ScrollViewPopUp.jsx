import React from 'react';
import { Modal, View, Text } from 'react-native';
import { Button as RneButton, Icon } from 'react-native-elements';
import PropTypes from 'prop-types';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-navigation';
import { scrollViewPopUp as styles } from './styles';


const ScrollViewPopUp = props => {
  const { visibility, callback, lockStateArr, title } = props;
  return (
    <Modal animationType="none" transparent visible={visibility}>
      <SafeAreaView style={styles.blackBackground}>
        <View style={styles.navbarBackGround}>
          <View style={{ flex: 1 }} />
          <View style={{ flex: 4 }}>{title ? <Text style={styles.navBarTitle}>{title}</Text> : null}</View>
          <View
            style={{
              flex: 1,
            }}
          >
            <RneButton
              icon={<Icon name="times-circle" type="font-awesome" />}
              type="clear"
              title=""
              onPress={callback}
            />
          </View>
        </View>
        <ScrollView style={styles.scrollViewStyle}>{lockStateArr || null}</ScrollView>
      </SafeAreaView>
    </Modal>
  );
};

ScrollViewPopUp.propTypes = {
  visibility: PropTypes.bool.isRequired,
  callback: PropTypes.func.isRequired,
  // eslint-disable-next-line no-undef
  // eslint-disable-next-line react/forbid-prop-types
  lockStateArr: PropTypes.array,
  title: PropTypes.string,
};

export default ScrollViewPopUp;
