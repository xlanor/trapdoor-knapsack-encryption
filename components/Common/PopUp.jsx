import React, { Component } from 'React';
import PropTypes from 'prop-types';

import {
    Text,
    TouchableOpacity,
    Modal,
    View,
    SafeAreaView,
    Image,
} from 'react-native';

class PopUp extends Component {
    constructor(props){
        super(props);
    }

    render (){
        const { visibility } = this.props;
        return(
            <Modal animationType="slide" transparent visible = {visibility}>
                <SafeAreaView style={styles.safeAreaWrapper}>
                </SafeAreaView>
            </Modal>
        );
    }

};

PopUp.propTypes = {
  visibility: PropTypes.bool.isRequired,
  // content

}