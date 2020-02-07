import React, { Component } from 'react';
import { Text, Image } from 'react-native';
// begin redux imports
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// importing third party libs
import * as Animatable from "react-native-animatable";
import { Card , Button as RneButton } from 'react-native-elements';

// begin redux actions
import {
    KEY_UNLOCK_ACTION
} from '../../../../../redux-modules/actions/learnPageLock'

import {
    UNLOCK_TROPHY_EZ_MATH,
    SHOW_TROPHY_ACTION,
}  from '../../../../../redux-modules/actions/manageTrophies'

// import image icons
import Unlock from '../../../../../assets/images/unlock.png';

// importing stylesheet
import styles from '../styles';

class UnlockNext extends Component{
    constructor(props){
        super(props)
    }
    unlockEzMath = () => {
      const { actions, trophyEzMath } = this.props;
      // always unlock the tabs and trophies,
      actions.KEY_UNLOCK_ACTION();
      actions.UNLOCK_TROPHY_EZ_MATH();
      if(!trophyEzMath){
        actions.SHOW_TROPHY_ACTION()
      }
    }
    render(){
        const { actions } = this.props;
        return (
            <>
                <Text style={styles.GCDPages.titleStyle}>Euclidean and Extended Euclidean Algorithm</Text>
                <Animatable.View animation="slideInDown">
                    <Card title="Unlocked Next Tab!">
                    <RneButton
                        type="clear"
                        icon={
                        <Image source={Unlock}
                            style={styles.GCDPages.unlockIconStyle}
                        />}
                        buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                        onPress = {()=>{this.unlockEzMath()}}
                    >

                    </RneButton>
                    </Card>
                </Animatable.View>
            </>
        )
    }
}

const mapStateToProps = state => ({
    trophyEzMath: state.trophy.trophyEzMath
})

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators({
        UNLOCK_TROPHY_EZ_MATH,
        SHOW_TROPHY_ACTION,
        KEY_UNLOCK_ACTION
    }, dispatch)
  });

export default connect(mapStateToProps, mapDispatchToProps)(UnlockNext);
