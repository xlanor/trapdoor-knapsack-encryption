import React, { Component } from 'react';

// begin redux imports
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {
    ScrollView,
    View,
    Dimensions
} from 'react-native'

import {
    Header,
    Button,
    Icon
} from 'react-native-elements';

import styles from './styles'

import Trophy from './Trophies';

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
        let trophyState = this.getTrophyStates()
        return(
                <ScrollView style={styles.progressParent.containerStyle}>
                    <Header 
                        containerStyle={styles.progressParent.headerStyle}
                        centerComponent={{ text: 'TROPHY', style:{
                            ...styles.progressParent.headerFont
                        }}}
                        rightComponent={
                            <Button
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
                                    ()=>{}
                                }
                            />
                        }
                    />
                        {
                            trophyState.map( x => <Trophy key={`${x.enabled}-${x.title}-${x.subtitle}`} title={x.title} subtitle = {x.subtitle} isEnabled = {x.enabled}/>)   

                        }
                </ScrollView>
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

})

export default connect(mapStateToProps,mapDispatchToProps)(ProgressParent);