import React from 'react'
import {
   Modal, 
   TouchableOpacity, 
   TouchableWithoutFeedback, 
   View, 
   Text, 
   Dimensions,
   Image
} from 'react-native'
import PropTypes from 'prop-types'
import { alertPopUp as styles } from './styles';



const PopUpWithButtons = (props) => {
  const { ButtonOne, ButtonTwo , messageContent, visibility } = props;
  return (
    <Modal animationType="fade" transparent visible={visibility}>
      <TouchableOpacity style={styles.modalBackground}>
        <TouchableWithoutFeedback>
          <View style={styles.modalContainer}>
              <View style={{marginBottom: Dimensions.get('window').height * 0.03}}>
                <Text style={{textAlign: 'center'}}>{messageContent}</Text>
              </View>
              {
                ButtonOne && ButtonTwo
                // if there are two buttons,
                ? (
                  <View style={{flexDirection: 'row'}}>
                    <View style={{flex: 1 ,marginRight: Dimensions.get('window').width * 0.01}}>
                      {ButtonOne}
                    </View>
                    <View style={{flex: 1,marginLeft: Dimensions.get('window').width * 0.01}}>
                      {ButtonTwo}
                    </View>
                  </View>
                )
                : ButtonOne // only one button
              }
             
          </View>
        </TouchableWithoutFeedback>
      </TouchableOpacity>
    </Modal>
  );
}

PopUpWithButtons.propTypes = {
  ButtonOne: PropTypes.node.isRequired,
  ButtonTwo: PropTypes.node,
  visibility: PropTypes.bool.isRequired,
  messageContent: PropTypes.string,
};

export default PopUpWithButtons;