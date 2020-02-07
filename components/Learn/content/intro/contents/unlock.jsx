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
    ALGO_UNLOCK_ACTION
} from '../../../../../redux-modules/actions/learnPageLock'
import {
    UNLOCK_TROPHY_HISTORIAN,
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
    unlockHistorian = () => {
      const { actions, trophyHistorian } = this.props;
        // always unlock next page
        actions.ALGO_UNLOCK_ACTION()
        actions.UNLOCK_TROPHY_HISTORIAN()
      if(!trophyHistorian){
        // only show the popup animation if the trophy has not been unlocked before
          actions.SHOW_TROPHY_ACTION()
      }

    }
    render(){
        const { actions, trophyHistorian } = this.props;
        console.log(actions)
        return (
            <>
                <Text style={styles.PageStyle.titleStyle}>Introduction</Text>
                <Animatable.View animation="slideInDown">
                    <Card title="Unlocked Next Tab!">
                    <RneButton
                        type="clear"
                        icon={
                        <Image source={Unlock}
                            style={styles.PageStyle.unlockIconStyle}
                        />}
                        buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                        onPress = {()=>{
                            this.unlockHistorian()
                        }}
                    >

                    </RneButton>
                    </Card>
                </Animatable.View>
            </>
        )
    }
}

const mapStateToProps = state => ({
  trophyHistorian: state.trophy.trophyHistorian
})

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators({
        ALGO_UNLOCK_ACTION,
        UNLOCK_TROPHY_HISTORIAN,
        SHOW_TROPHY_ACTION
    }, dispatch)
  });

export default connect(mapStateToProps, mapDispatchToProps)(UnlockNext);
