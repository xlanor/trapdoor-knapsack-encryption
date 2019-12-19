import React from 'react'
import { Modal, TouchableOpacity, TouchableWithoutFeedback, View, Text } from 'react-native'
import PropTypes from 'prop-types'
import { alertPopUp as styles } from './styles';

const AlertPopUp = (props) => {
  const { callback, messageContent, visibility } = props;
  return (
    <Modal animationType="fade" transparent visible={visibility}>
      <TouchableOpacity style={styles.modalBackground}  onPress={() => callback()}>
        <TouchableWithoutFeedback>
          <View style={styles.modalContainer}>
            <Text>{messageContent}</Text>
          </View>
        
        </TouchableWithoutFeedback>
      </TouchableOpacity>
    </Modal>
  );
}

AlertPopUp.propTypes = {
  messageContent: PropTypes.string.isRequired,
  callback: PropTypes.func.isRequired,
  visibility: PropTypes.bool.isRequired,
};

export default AlertPopUp;