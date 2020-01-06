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
            showKnapsackInfoPopUp: false,
            showquestionInfoPopUp: false,
        }
    }
    knapsackInfoPopUp = () => {
        return (
            <View>
                <Text style={styles.PageStyle.popUpTextStyle}>
                    A knapsack problem is derived from the notion of packing an odd assortment of packages into a container.
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
        const { showKnapsackInfoPopUp, showquestionInfoPopUp } = this.state
        let style = styles.PageStyle
        let u = Dimensions.get('window').height
        return (
            <View style={style.containerStyle}>
                {
                    showKnapsackInfoPopUp
                        ? <AlertPopUp
                            icon={Alert}
                            renderedBlocks={this.knapsackInfoPopUp()}
                            callback={() => { this.setState({ showKnapsackInfoPopUp: false, }) }}
                            visibility={showKnapsackInfoPopUp} />
                        : null
                }
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
                <Text style={style.contentHead} onPress={() => { this.setState({ showKnapsackInfoPopUp: true, }) }} >
                    <Text style={style.links}>Knapsack Problem</Text>
                </Text>
                <Text style={style.contentStyle}>
                    <Text style={style.links} onPress={() => { this.setState({ showquestionInfoPopUp: true, }) }} >
                        How
                    </Text> to pack a single container most efficiently or with the highest value?
                </Text>
                <Image
                    source={require('./Intro.gif')}
                    style={{ width: u * 0.400 * 1.5, height: u * 0.328 * 1.5, alignSelf: 'center' }}
                />
            </View >
        )
    }
}
