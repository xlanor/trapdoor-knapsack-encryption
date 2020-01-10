import React, { Component } from 'react';
// begin redux imports
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
// importing redux defined actions
import {
    HINT_DONE_ACTION,
    HINT_NOTDONE_ACTION,
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
import Info from '../../../../../assets/images/InfoIcon.png';

// import stylesheet.
import styles from '../styles';

class page1 extends Component {
    constructor(props) {
        super(props);

        // local state not affected by redux
        const { lockState, actions } = this.props;
        //actions.HINT_RESET_ACTION();
        this.state = {
            showHintInfoPopUp: lockState.hint.hintLocked,
            showQuestionInfoPopUp: false,
        }
    }
    hintInfoPopUp = () => {
        return (
            <View>
                <Text style={styles.PageStyle.popUpTextStyle}>
                    TEST 1
                </Text>
            </View>
        )
    }
    questionInfoPopUp = () => {
        return (
            <View>
                <Text style={styles.PageStyle.popUpTextStyle}>
                    Which boxes should be chosen to maximize the amount of money while still keeping the overall weight under or equal to 15kg?
                </Text>
            </View>
        )
    }
    render() {
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
                            icon={Info}
                            renderedBlocks={this.hintInfoPopUp()}
                            callback={() => {
                                this.setState({ showHintInfoPopUp: false, });
                                //actions.HINT_DONE_ACTION();
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
                </Text>
                <Text style={style.contentStyle}>
                    How to pack a single container <Text style={style.links} onPress={() => { this.setState({ showQuestionInfoPopUp: true, }) }} >
                        most efficiently or with the highest value
                    </Text>?
                </Text>

                <View style={{ height: u * m }}>
                    <Image
                        source={require('./pic/Intro.gif')}
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
        HINT_DONE_ACTION,
        HINT_NOTDONE_ACTION,
        HINT_RESET_ACTION,
        HINT_UNLOCK_ACTION
    }, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(page1);