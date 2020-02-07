import React, { Component } from 'react';

// begin redux imports
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {
    LINKS_HINT_NOTDONE_ACTION,
    HINT_RESET_ACTION
} from '../../redux-modules/actions/hint'

import {
    RESET_ALL_TAB_ACTION
} from '../../redux-modules/actions/learnPageLock'

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
    Dimensions,
    Text,
    Image,
} from 'react-native'

import {
    Header,
    Button as RneButton,
    Icon
} from 'react-native-elements';

import styles from './styles'

import AlertPopUp from '../Common/AlertPopUp';

import Trophy from './Trophies';
import PopUpWithButtons from '../Common/PopUpWithButtons';
import Button from '../Common/Button';

import ConcealmentIcon from '../../assets/images/TrophyImages/ConcealmentIcon.png';
import HistorianIcon from '../../assets/images/TrophyImages/HistorianIcon.png';
import KeyMasterIcon from '../../assets/images/TrophyImages/KeyMasterIcon.png';
import KeyRingIcon from '../../assets/images/TrophyImages/KeyRingIcon.png';
import MathIcon from '../../assets/images/TrophyImages/MathIcon.png';
import RevealIcon from '../../assets/images/TrophyImages/RevealIcon.png';
import SafetyIcon from '../../assets/images/TrophyImages/SafetyIcon.png';
import BreakIcon from '../../assets/images/TrophyImages/BreakIcon.png';

import Ribbon from '../../assets/images/TrophyImages/Ribbon.png';
import TrophySilhouette from '../../assets/images/TrophyImages/Trophy.png';

class ProgressParent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            confirmationResetPopup: false,
        }
    }
    historianInfoPopUp = () => {
        //P1
        let u = Dimensions.get('window').height
        let v = Dimensions.get('window').width

        return (
            <>
                <View style={{ height: u * 0.05, marginRight: v * 0.45 }}>
                    <Image
                        source={Ribbon}
                        style={styles.progressParent.imgStyle}
                    />
                </View>
                <Text style={styles.progressParent.popUpHeader}>
                    Your level: Baby Steps
                </Text>
                <Text style={styles.progressParent.popUpContent}>
                    Hello there.
                    {"\n\n"}
                    Hopefully your understanding of
                    trapdoor knapsack has transcended what it was five minutes ago.
                </Text>
                <View style={{ height: u * 0.05, marginLeft: v * 0.45 }}>
                    <Image
                        source={TrophySilhouette}
                        style={styles.progressParent.imgStyle}
                    />
                </View>
            </>
        )
    }
    mathiseasyInfoPopUp = () => {
        //P2
        let u = Dimensions.get('window').height
        let v = Dimensions.get('window').width

        return (
            <>
                <View style={{ height: u * 0.05, marginRight: v * 0.45 }}>
                    <Image
                        source={Ribbon}
                        style={styles.progressParent.imgStyle}
                    />
                </View>
                <Text style={styles.progressParent.popUpHeader}>
                    Your level: I see you trying
                </Text>
                <Text style={styles.progressParent.popUpContent}>
                    Its okay if you had to rewind the tables a few times.
                    {"\n\n"}
                    No one judges you.
                    {"\n\n"}
                    Harshly.
                </Text>
                <View style={{ height: u * 0.05, marginLeft: v * 0.45 }}>
                    <Image
                        source={TrophySilhouette}
                        style={styles.progressParent.imgStyle}
                    />
                </View>
            </>
        )
    }
    keyringInfoPopUp = () => {
        //P3
        let u = Dimensions.get('window').height
        let v = Dimensions.get('window').width

        return (
            <>
                <View style={{ height: u * 0.05, marginRight: v * 0.45 }}>
                    <Image
                        source={Ribbon}
                        style={styles.progressParent.imgStyle}
                    />
                </View>
                <Text style={styles.progressParent.popUpHeader}>
                    Your level: Not completely hopeless
                </Text>
                <Text style={styles.progressParent.popUpContent}>
                    If I had a dollar for everytime someone asked me what key generation was..
                    {"\n\n"}
                    I would have enough to build a mobile application.
                </Text>
                <View style={{ height: u * 0.05, marginLeft: v * 0.45 }}>
                    <Image
                        source={TrophySilhouette}
                        style={styles.progressParent.imgStyle}
                    />
                </View>
            </>
        )
    }
    concealmentInfoPopUp = () => {
        //P4
        let u = Dimensions.get('window').height
        let v = Dimensions.get('window').width

        return (
            <>
                <View style={{ height: u * 0.05, marginRight: v * 0.45 }}>
                    <Image
                        source={Ribbon}
                        style={styles.progressParent.imgStyle}
                    />
                </View>
                <Text style={styles.progressParent.popUpHeader}>
                    Your level: More than halfway there
                </Text>
                <Text style={styles.progressParent.popUpContent}>
                    Some would even say you are smart now.
                </Text>
                <View style={{ height: u * 0.05, marginLeft: v * 0.45 }}>
                    <Image
                        source={TrophySilhouette}
                        style={styles.progressParent.imgStyle}
                    />
                </View>
            </>
        )
    }
    therevealInfoPopUp = () => {
        //P5
        let u = Dimensions.get('window').height
        let v = Dimensions.get('window').width

        return (
            <>
                <View style={{ height: u * 0.05, marginRight: v * 0.45 }}>
                    <Image
                        source={Ribbon}
                        style={styles.progressParent.imgStyle}
                    />
                </View>
                <Text style={styles.progressParent.popUpHeader}>
                    Your level: Completed tutorial
                </Text>
                <Text style={styles.progressParent.popUpContent}>
                    You are qualified to try an actual simulator now.{"\n"}
                    Try not to get too excited buddy.
                </Text>
                <View style={{ height: u * 0.05, marginLeft: v * 0.45 }}>
                    <Image
                        source={TrophySilhouette}
                        style={styles.progressParent.imgStyle}
                    />
                </View>
            </>
        )
    }
    thekeymasterInfoPopUp = () => {
        //P6
        let u = Dimensions.get('window').height
        let v = Dimensions.get('window').width

        return (
            <>
                <View style={{ height: u * 0.05, marginRight: v * 0.45 }}>
                    <Image
                        source={Ribbon}
                        style={styles.progressParent.imgStyle}
                    />
                </View>
                <Text style={styles.progressParent.popUpHeader}>
                    Your level: Started simulator
                </Text>
                <Text style={styles.progressParent.popUpContent}>
                    Good job on repeating what you just did ten minutes ago.
                </Text>
                <View style={{ height: u * 0.05, marginLeft: v * 0.45 }}>
                    <Image
                        source={TrophySilhouette}
                        style={styles.progressParent.imgStyle}
                    />
                </View>
            </>
        )
    }
    safetyfirstInfoPopUp = () => {
        //P7
        let u = Dimensions.get('window').height
        let v = Dimensions.get('window').width

        return (
            <>
                <View style={{ height: u * 0.05, marginRight: v * 0.45 }}>
                    <Image
                        source={Ribbon}
                        style={styles.progressParent.imgStyle}
                    />
                </View>
                <Text style={styles.progressParent.popUpHeader}>
                    Your level: Halfway through simulator
                </Text>
                <Text style={styles.progressParent.popUpContent}>
                    You really want an award for this?
                </Text>
                <View style={{ height: u * 0.05, marginLeft: v * 0.45 }}>
                    <Image
                        source={TrophySilhouette}
                        style={styles.progressParent.imgStyle}
                    />
                </View>
            </>
        )
    }
    breakthewallInfoPopUp = () => {
        //P8
        let u = Dimensions.get('window').height
        let v = Dimensions.get('window').width

        return (
            <>
                <View style={{ height: u * 0.05, marginRight: v * 0.45 }}>
                    <Image
                        source={Ribbon}
                        style={styles.progressParent.imgStyle}
                    />
                </View>
                <Text style={styles.progressParent.popUpHeader}>
                    Your level: Completion
                </Text>
                <Text style={styles.progressParent.popUpContent}>
                    Congrats.
                </Text>
                <View style={{ height: u * 0.05, marginLeft: v * 0.45 }}>
                    <Image
                        source={TrophySilhouette}
                        style={styles.progressParent.imgStyle}
                    />
                </View>
            </>
        )
    }

    toggleConfirmationReset = () => {
        this.setState((prevState) => ({
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
        console.log(HistorianIcon)
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
                "image": HistorianIcon,
            },
            {
                "title": "Math is Easy",
                "subtitle": "Successfully completed extended euclidean algorithm",
                "enabled": trophyEzMath,
                "image": MathIcon,
            },
            {
                "title": "Keyring",
                "subtitle": "Successfully completed extended key generation",
                "enabled": trophyKeyRing,
                "image": KeyRingIcon,
            },
            {
                "title": "Concealment",
                "subtitle": "Successfully completed encryption",
                "enabled": trophyConcealment,
                "image": ConcealmentIcon,
            },
            {
                "title": "The Reveal",
                "subtitle": "Successfully completed decryption",
                "enabled": trophyReveal,
                "image": RevealIcon,
            },
            {
                "title": "The Key Master",
                "subtitle": "Successfully generated keys in the simulator",
                "enabled": trophyKeymaster,
                "image": KeyMasterIcon,
            },
            {
                "title": "Safety First",
                "subtitle": "Successfully encrypt message in the simulator",
                "enabled": trophySafetyFirst,
                "image": SafetyIcon,
            },
            {
                "title": "Break the Wall",
                "subtitle": "Successfully decrypt message in the simulator",
                "enabled": trophyBreakWall,
                "image": BreakIcon,
            }
        ]
    }
    render() {
        const {
            confirmationResetPopup,
            showInfoPopUp,
        } = this.state;
        let trophyState = this.getTrophyStates()
        return (
            <>
                {
                    (() => {
                        switch (showInfoPopUp) {
                            case "Historian": return <AlertPopUp
                                renderedBlocks={this.historianInfoPopUp()}
                                callback={() => { this.setState({ showInfoPopUp: false, }) }}
                                visibility={showInfoPopUp == "Historian"} />
                            case "Math is Easy": return <AlertPopUp
                                renderedBlocks={this.mathiseasyInfoPopUp()}
                                callback={() => { this.setState({ showInfoPopUp: false, }) }}
                                visibility={showInfoPopUp == "Math is Easy"} />
                            case "Keyring": return <AlertPopUp
                                renderedBlocks={this.keyringInfoPopUp()}
                                callback={() => { this.setState({ showInfoPopUp: false, }) }}
                                visibility={showInfoPopUp == "Keyring"} />
                            case "Concealment": return <AlertPopUp
                                renderedBlocks={this.concealmentInfoPopUp()}
                                callback={() => { this.setState({ showInfoPopUp: false, }) }}
                                visibility={showInfoPopUp == "Concealment"} />
                            case "The Reveal": return <AlertPopUp
                                renderedBlocks={this.therevealInfoPopUp()}
                                callback={() => { this.setState({ showInfoPopUp: false, }) }}
                                visibility={showInfoPopUp == "The Reveal"} />
                            case "The Key Master": return <AlertPopUp
                                renderedBlocks={this.thekeymasterInfoPopUp()}
                                callback={() => { this.setState({ showInfoPopUp: false, }) }}
                                visibility={showInfoPopUp == "The Key Master"} />
                            case "Safety First": return <AlertPopUp
                                renderedBlocks={this.safetyfirstInfoPopUp()}
                                callback={() => { this.setState({ showInfoPopUp: false, }) }}
                                visibility={showInfoPopUp == "Safety First"} />
                            case "Break the Wall": return <AlertPopUp
                                renderedBlocks={this.breakthewallInfoPopUp()}
                                callback={() => { this.setState({ showInfoPopUp: false, }) }}
                                visibility={showInfoPopUp == "Break the Wall"} />
                            default: return null;
                        }
                    }
                    )()
                }

                {
                    confirmationResetPopup
                        ? <PopUpWithButtons
                            messageContent={"This will clear all progress you have made so far!"}
                            ButtonOne={
                                <Button
                                    text="Reset"
                                    callback={() => { this.toggleConfirmationReset(); this.resetAll() }}
                                    buttonColor="blue"
                                />
                            }
                            ButtonTwo={
                                <Button
                                    text="Exit"
                                    callback={() => { this.toggleConfirmationReset() }}
                                />
                            }
                            visibility={confirmationResetPopup}
                        />
                        : null
                }
                <ScrollView style={styles.progressParent.containerStyle}>
                    <Header
                        containerStyle={styles.progressParent.headerStyle}
                        centerComponent={{
                            text: 'PROGRESS', style: {
                                ...styles.progressParent.headerFont
                            }
                        }}
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
                                    () => { this.toggleConfirmationReset() }
                                }
                            />
                        }
                    />
                    {
                        trophyState.map(
                            x => <Trophy
                                key={`${x.enabled}-${x.title}-${x.subtitle}`}
                                title={x.title}
                                subtitle={x.subtitle}
                                isEnabled={x.enabled}
                                image={x.image}
                                onPress={() => {
                                    this.setState({
                                        showInfoPopUp: x.title
                                    })
                                }}
                            />
                        )

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

export default connect(mapStateToProps, mapDispatchToProps)(ProgressParent);