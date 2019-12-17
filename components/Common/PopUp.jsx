import React, { Component } from 'React';
import PropTypes from 'prop-types';

import {
    Text,
    TouchableOpacity,
    Modal,
    View,
    SafeAreaView,
    Image,
    NativeComponent,
} from 'react-native';

import closeIcon from '../../assets/images/close2.png';
import { popUp as styles } from './styles';

class PopUp extends Component {
    constructor(props){
        super(props);
    }

    render (){
        const { visibility, close, message, icon } = this.props;
        return(
            <Modal animationType="fade" transparent visible = {visibility}>
                <SafeAreaView style={styles.modalBackground}>
                    <View style={{flex: 2}}/>
                    <View style={styles.navbarBackGround}>
                        <View style={{ flex: 1}}/>
                        <TouchableOpacity onPress={close}>
                                <Image style={styles.closeStyle} source={closeIcon}/>
                        </TouchableOpacity>

                    </View>
                    <View style={styles.textAreaBackGround}>
                        <View style={styles.textAreaWrapper}>
                            {
                                icon ? 
                                    <View style={styles.imageView}>
                                        <Image style={styles.imageStyle} source={icon}/>
                                    </View>
                                :null
                            }
                            <Text style={styles.textStyleMessage}>{message}</Text>

                        </View>
                    </View>
                    <View style={{flex: 2}}/>
                </SafeAreaView>
            </Modal>
        );
    }

};

PopUp.propTypes = {
  visibility: PropTypes.bool.isRequired,
  close: PropTypes.func.isRequired, // callback function to be passed as props.
  message: PropTypes.string.isRequired,
  icon: PropTypes.node,
  // content

}

export default PopUp;