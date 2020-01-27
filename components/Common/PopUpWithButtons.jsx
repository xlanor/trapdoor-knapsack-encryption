import React from 'react'
import {
   Modal, 
   TouchableOpacity, 
   TouchableWithoutFeedback, 
   View, 
   Text, 
   Image
} from 'react-native'
import PropTypes from 'prop-types'
import { alertPopUp as styles } from './styles';

const PopUpWithButtons = (props) => {
  const { callback, messageContent, visibility, icon, renderedBlocks } = props;
  return (
    <Modal animationType="fade" transparent visible={visibility}>
      <TouchableOpacity style={styles.modalBackground}  onPress={() => callback()}>
        <TouchableWithoutFeedback>
          <View style={styles.modalContainer}>
            {
              icon 
              ? 
              <View style={styles.iconViewWrapper}>
                  <Image style={styles.iconSize} source={icon}/>
              </View>
              : null
            }
            {
              renderedBlocks
              ? renderedBlocks
              : <Text style={styles.modalMessage}>{messageContent}</Text>
            } 
          </View>
        </TouchableWithoutFeedback>
      </TouchableOpacity>
    </Modal>
  );
}

AlertPopUp.propTypes = {
  messageContent: PropTypes.string,
  renderedBlocks: PropTypes.node,
  callback: PropTypes.func.isRequired,
  visibility: PropTypes.bool.isRequired,
  icon: PropTypes.node,
};

export default PopUpWithButtons;