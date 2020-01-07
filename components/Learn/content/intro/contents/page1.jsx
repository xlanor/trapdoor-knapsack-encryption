import React, { Component } from 'react';
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
import Alert from '../../../../../assets/images/alert.png';

// import stylesheet.
import styles from '../styles';

export default class page1 extends Component {
    constructor(props) {
        super(props);

        // local state not affected by redux
        this.state = {
            showquestionInfoPopUp: false,
        }
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
        const { showquestionInfoPopUp } = this.state
        let style = styles.PageStyle
        let u = Dimensions.get('window').height
        let m = 1.4
        return (
            <View style={style.containerStyle}>
                {
                    showquestionInfoPopUp
                        ? <AlertPopUp
                            icon={Alert}
                            renderedBlocks={this.questionInfoPopUp()}
                            callback={() => { this.setState({ showquestionInfoPopUp: false, }) }}
                            visibility={showquestionInfoPopUp} />
                        : null
                }
                <Text style={style.titleStyle}>Introduction</Text>
                <Text style={style.contentHead}>Knapsack Problem</Text>
                <Text style={style.contentStyle}>
                    A knapsack problem is derived from the notion of packing an odd assortment of packages into a container.
                </Text>
                <Text style={style.contentStyle}>
                    How to pack a single container <Text style={style.links} onPress={() => { this.setState({ showquestionInfoPopUp: true, }) }} >
                        most efficiently or with the highest value
                    </Text>?
                </Text>
                <Image
                    source={require('./pic/Intro.gif')}
                    style={{ width: u * 0.400 * m, height: u * 0.328 * m, alignSelf: 'center' }}
                />
            </View >
        )
    }
}
