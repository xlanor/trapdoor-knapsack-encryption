import React, { Component } from 'react';

import { Modal, Text } from 'react-native';
import { ListItem } from 'react-native-elements';
class BottomPopUp extends Component {
    constructor(props){
        super(props);
    }
    render(){
        return(
            <Modal animationType="fade" transparent visible={true}>
                <ListItem
                    title={"hi"}
                    subtitle={"hi"}
                />
            </Modal>
        );  
    }
}
/**/

export default BottomPopUp;