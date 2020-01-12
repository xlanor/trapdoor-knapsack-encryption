import React, { Component } from 'react';
// begin redux imports
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
// importing redux defined actions
import {
    LINKS_HINT_DONE_ACTION,
    LINKS_HINT_NOTDONE_ACTION,
    HINT_RESET_ACTION,
    HINT_UNLOCK_ACTION
} from '../../../../../actions/hint';

import {
    View,
    Button,
    Text,
    Image,
    TouchableOpacity,
    KeyboardAvoidingView,
    FlatList
} from 'react-native';
import { Dimensions } from 'react-native';

import AlertPopUp from '../../../../Common/AlertPopUp';

//Images
import Info from '../../../../../assets/images/InfoIcon.png';
import Intro from '../../../../../assets/images/IntroImages/Intro.gif';
import Title from '../../../../../assets/images/Title.png';
import Box1 from '../../../../../assets/images/Box1.png';
import Box2 from '../../../../../assets/images/Box2.png';

// import stylesheet.
import styles from '../styles';

class page1 extends Component {
    constructor(props) {
        super(props);

        // local state not affected by redux
        const { lockState, actions } = this.props;
        //actions.HINT_RESET_ACTION();
        this.state = {
            showHintInfoPopUp: lockState.hint.linksHintLocked,
            showQuestionInfoPopUp: false,
        }
    }
    hintInfoPopUp = () => {
        let u = Dimensions.get('window').height

        return (
            <>
                <View style={{ height: u * 0.1 }}>
                    <Image
                        source={Title}
                        style={styles.PageStyle.imgStyle}
                    />
                </View>
                <View style={{ height: u * 0.2 }}>
                    <Image
                        source={Box1}
                        style={styles.PageStyle.imgStyle}
                    />
                </View>
                <View style={{ height: u * 0.2 }}>
                    <Image
                        source={Box2}
                        style={styles.PageStyle.imgStyle}
                    />
                </View>
                <Text style={styles.PageStyle.popUpTextStyleBold}>
                    Clicking underlined text displays additional information.
                </Text>
            </>
        )
    }
    questionInfoPopUp = () => {
        return (
            <>
                <Text style={styles.PageStyle.popUpTextStyle}>
                    Which boxes should be chosen to maximize the amount of money while still keeping the overall weight under or equal to 15kg?
                </Text>
            </>
        )
    }
    render() {
        const { actions } = this.props;
        const { showHintInfoPopUp, showQuestionInfoPopUp } = this.state
        let style = styles.PageStyle
        let u = Dimensions.get('window').height
        let m = 0.4592

        return (
            <View style={style.containerStyle}>
                {
                    showHintInfoPopUp ? (
                        console.log("HINT TRIGGERED"),
                        <AlertPopUp
                            renderedBlocks={this.hintInfoPopUp()}
                            callback={() => {
                                this.setState({ showHintInfoPopUp: false, });
                                //actions.LINKS_HINT_DONE_ACTION();
                            }}
                            visibility={showHintInfoPopUp} />
                    ) : console.log("HINT NOT TRIGGERED")
                }
                {
                    showQuestionInfoPopUp
                        ? <AlertPopUp
                            icon={Info}
                            renderedBlocks={this.questionInfoPopUp()}
                            callback={() => { this.setState({ showQuestionInfoPopUp: false, }) }}
                            visibility={showQuestionInfoPopUp} />
                        : null
                }
                <Text style={style.titleStyle}>Introduction</Text>
                <Text style={style.contentHead}>Knapsack Problem</Text>

                <Text style={style.contentStyle}>
                    A knapsack problem is derived from the notion of packing an odd assortment of packages into a container.
                    {"\n\n"}
                    How to pack a single container <Text style={style.links} onPress={() => { this.setState({ showQuestionInfoPopUp: true, }) }} >
                        most efficiently or with the highest value
                    </Text>?
                </Text>

                <View style={{ height: u * m }}>
                    <Image
                        source={Intro}
                        style={style.imgStyle}
                    />
                </View>

            </View >
        )
    }
}

const mapStateToProps = state => ({
    lockState: state
})
const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators({
        LINKS_HINT_DONE_ACTION,
        LINKS_HINT_NOTDONE_ACTION,
        HINT_RESET_ACTION,
        HINT_UNLOCK_ACTION
    }, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(page1);