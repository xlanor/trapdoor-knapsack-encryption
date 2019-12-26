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
import { ScrollView } from 'react-native-gesture-handler'
import { scrollViewPopUp as styles } from './styles';
import { SafeAreaView } from 'react-navigation';

import closeIcon from '../../assets/images/close2.png';

const ScrollViewPopUp = (props) => {
    const { visibility, callback, lockStateArr } = props;
    console.log(lockStateArr)
    return (
    <Modal animationType="fade" transparent visible={visibility}>
                <SafeAreaView style = {styles.blackBackground}>
                    <View style={{backgroundColor:'pink'}}>
                        <TouchableOpacity onPress={callback}>
                                <Image style={styles.closeStyle} source={closeIcon}/>
                        </TouchableOpacity>


                    </View>

                    <ScrollView style={styles.scrollViewStyle}> 

                        {
                            lockStateArr?
                            lockStateArr
                            : null
                        }
                    </ScrollView>
                </SafeAreaView>
           
    </Modal>
    );
}

ScrollViewPopUp.propTypes = {
    visibility: PropTypes.bool.isRequired,
    callback: PropTypes.func.isRequired,
    lockStateArr: PropTypes.array,
  };
  
export default ScrollViewPopUp;