import React, { Component } from 'react';

// begin redux imports
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {
    LINKS_HINT_NOTDONE_ACTION,
    HINT_RESET_ACTION
}from '../../redux-modules/actions/hint'

import {
    RESET_ALL_TAB_ACTION
}from '../../redux-modules/actions/learnPageLock'

import {
    RESET_PAGE_ACTION
} from '../../redux-modules/actions/tabPage'
import {
    TROPHY_RESET_ALL_ACTION
} from '../../redux-modules/actions/manageTrophies' 

import {
    RESET_ENCRYPTED_ACTION
} from '../../redux-modules/actions/updateEncryption'

import {
    RESET_PARAMETERS_ACTION
} from '../../redux-modules/actions/updateParameters'

import {
    ScrollView,
    View,
    Dimensions
} from 'react-native'

import {
    Header,
    Button as RneButton,
    Icon
} from 'react-native-elements';

import styles from './styles'

import Trophy from './Trophies';
import PopUpWithButtons from '../Common/PopUpWithButtons';
import Button from '../Common/Button';

class ProgressParent extends Component {
    constructor(props){
        super(props);
        this.state = {
            confirmationResetPopup: false,
        }
    }
    
    toggleConfirmationReset = () => {
        this.setState((prevState)=> ({
                confirmationResetPopup: !prevState.confirmationResetPopup
            })
        )
    }

    resetAll = () => {
        const { actions } = this.props;
        actions.LINKS_HINT_NOTDONE_ACTION()
        actions.HINT_RESET_ACTION()
        actions.RESET_ALL_TAB_ACTION()
        actions.TROPHY_RESET_ALL_ACTION()
        actions.RESET_ENCRYPTED_ACTION()
        actions.RESET_PARAMETERS_ACTION()
        actions.RESET_PAGE_ACTION()
    }

    getTrophyStates = () => {
        const {
            trophyHistorian,
            trophyEzMath,
            trophyKeyRing,
            trophyConcealment,
            trophyReveal,
            trophyKeymaster,
            trophySafetyFirst,
            trophyBreakWall,
        } = this.props;
        return [
            {
                "title": "Historian",
                "subtitle": "Successfully completed the introduction",
                "enabled": trophyHistorian,
            },
            {
                "title":"Math is Easy",
                "subtitle": "Successfully completed extended euclidean algorithm",
                "enabled": trophyEzMath,
            },
            {
                "title":"Keyring",
                "subtitle": "Successfully completed extended key generation",
                "enabled": trophyKeyRing,
            },
            {
                "title":"Concealment",
                "subtitle": "Successfully completed encryption",
                "enabled": trophyConcealment,
            },
            {
                "title":"The Reveal",
                "subtitle": "Successfully completed decryption",
                "enabled": trophyReveal,
            },
            {
                "title":"The Key Master",
                "subtitle": "Successfully generated keys in the simulator",
                "enabled": trophyKeymaster,
            },
            {
                "title":"Safety First",
                "subtitle": "Successfully encrypt message in the simulator",
                "enabled": trophySafetyFirst,
            },
            {
                "title":"Break the Wall",
                "subtitle": "Successfully decrypt message in the simulator",
                "enabled": trophyBreakWall,
            }
        ]
    }
    render(){
        const { confirmationResetPopup } = this.state;
        let trophyState = this.getTrophyStates()
        return(
            <>
                {
                    confirmationResetPopup
                    ?  <PopUpWithButtons
                            messageContent={"This will clear all progress you have made so far!"}
                            ButtonOne={
                                <Button
                                    text="Reset"
                                    callback={()=>{this.toggleConfirmationReset(); this.resetAll()}}
                                    buttonColor="blue"
                                />
                            }
                            ButtonTwo={
                                <Button
                                    text="Exit"
                                    callback={()=>{this.toggleConfirmationReset()}}
                                />
                            }
                            visibility={confirmationResetPopup}
                        />
                    : null
                }
                <ScrollView style={styles.progressParent.containerStyle}>
                    <Header 
                        containerStyle={styles.progressParent.headerStyle}
                        centerComponent={{ text: 'PROGRESS', style:{
                            ...styles.progressParent.headerFont
                        }}}
                        rightComponent={
                            <RneButton
                                icon={
                                    <Icon
                                    name='refresh'
                                    type='evilicon'
                                    color='black'
                                    size={50}
                                    />
                                }
                                type="clear"
                                title=""
                                onPress={
                                    ()=>{this.toggleConfirmationReset()}
                                }
                            />
                        }
                    />
                        {
                            trophyState.map( x => <Trophy key={`${x.enabled}-${x.title}-${x.subtitle}`} title={x.title} subtitle = {x.subtitle} isEnabled = {x.enabled}/>)   

                        }
                </ScrollView>
        </>
        );
    }
}

mapStateToProps = state => ({
    trophyHistorian: state.trophy.trophyHistorian,
    trophyEzMath: state.trophy.trophyEzMath,
    trophyKeyRing: state.trophy.trophyKeyRing,
    trophyConcealment: state.trophy.trophyConcealment,
    trophyReveal: state.trophy.trophyReveal,
    trophyKeymaster: state.trophy.trophyKeymaster,
    trophySafetyFirst: state.trophy.trophySafetyFirst,
    trophyBreakWall: state.trophy.trophyBreakWall,

})

mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({
        LINKS_HINT_NOTDONE_ACTION,
        HINT_RESET_ACTION,
        RESET_ALL_TAB_ACTION,
        TROPHY_RESET_ALL_ACTION,
        RESET_ENCRYPTED_ACTION,
        RESET_PARAMETERS_ACTION,
        RESET_PAGE_ACTION,
    }, dispatch)
})

export default connect(mapStateToProps,mapDispatchToProps)(ProgressParent);