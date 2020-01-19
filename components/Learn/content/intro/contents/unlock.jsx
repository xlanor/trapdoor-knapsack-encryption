import React, { Component } from 'react';
import { Image } from 'react-native';
// begin redux imports
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Animatable from "react-native-animatable";
import { Card , Button as RneButton } from 'react-native-elements';

import {
    ALGO_UNLOCK_ACTION  
} from '../../../../../redux-modules/actions/learnPageLock'
import Unlock from '../../../../../assets/images/unlock.png';

class UnlockNext extends Component{ 
    constructor(props){
        super(props)
    }
    render(){
        const { actions } = this.props;
        return (
            <>
                <Animatable.View animation="slideInDown">
                    <Card title="Unlocked Next Tab!">
                    <RneButton
                        type="clear"
                        icon={
                        <Image source={Unlock}
                        />}
                        buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                        onPress = {()=>{actions.ALGO_UNLOCK_ACTION()}}
                    >
        
                    </RneButton>
                    </Card>
                </Animatable.View>
            </>
        )
    }
}

const mapStateToProps = state => ({
    lockState: state
})

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators({

        ALGO_UNLOCK_ACTION
    }, dispatch)
  });

export default connect(mapStateToProps, mapDispatchToProps)(UnlockNext);