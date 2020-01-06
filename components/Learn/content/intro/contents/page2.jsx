import React, { Component } from 'react';
import {
    View,
    Button,
    Text,
    Image,
    TouchableOpacity,
    FlatList
} from 'react-native';
import { Dimensions } from 'react-native';

import AlertPopUp from '../../../../Common/AlertPopUp';
import Alert from '../../../../../assets/images/alert.png';

// import stylesheet.
import styles from '../styles';

export default class page2 extends Component {
    constructor(props) {
        super(props);

        // local state not affected by redux
        this.state = {
            showOneWayInfoPopUp: false,
            showDiscreteLogInfoPopUp: false,
        }
    }
    oneWayInfoPopUp = () => {
        return (
            <View>
                <Text style={styles.PageStyle.popUpTextStyle}>
                    A trapdoor function is a function that is easy to solve one way but not the other.
                </Text>
            </View>
        )
    }
    discreteLogInfoPopUp = () => {
        return (
            <View>
                <Text style={styles.PageStyle.popUpTextStyle}>
                    The discrete logarithm problem is defined as:
                    {"\n\n"}
                    Given a group G, a generator g of the group and an element h of G,
                    to find the discrete logarithm to the base g of h in the group G.
                    {"\n\n"}
                    The hardness of finding discrete logarithms depends on the groups.
                </Text>
                <Text style={styles.PageStyle.popUpTextStyleBold}>
                    Let's be honest. If you give this to a kid to read.
                    Do you think he will understand?
                </Text>
            </View>
        )
    }
    render() {
        const { showOneWayInfoPopUp, showDiscreteLogInfoPopUp } = this.state
        let style = styles.PageStyle
        let u = Dimensions.get('window').height
        return (
            <View style={style.containerStyle}>
                {
                    showOneWayInfoPopUp
                        ? <AlertPopUp
                            icon={Alert}
                            renderedBlocks={this.oneWayInfoPopUp()}
                            callback={() => { this.setState({ showOneWayInfoPopUp: false, }) }}
                            visibility={showOneWayInfoPopUp} />
                        : null
                }
                {
                    showDiscreteLogInfoPopUp
                        ? <AlertPopUp
                            icon={Alert}
                            renderedBlocks={this.discreteLogInfoPopUp()}
                            callback={() => { this.setState({ showDiscreteLogInfoPopUp: false, }) }}
                            visibility={showDiscreteLogInfoPopUp} />
                        : null
                }
                <Text style={style.titleStyle}>Introduction</Text>
                <Text style={style.contentHead}>
                    <Text style={style.links} onPress={() => { this.setState({ showOneWayInfoPopUp: true, }) }}>
                        One-way
                    </Text> trapdoor function
                </Text>

                <Image
                    source={require('./1052px-Trapdoor_permutation.svg.png')}
                    style={{ width: u * 0.1052 * 4, height: u * 0.0744 * 4, alignSelf: 'center' }}
                />

                <Text style={style.contentStyle}>
                    A good example of the trapdoor function is the{"\n"}
                    <Text style={style.links} onPress={() => { this.setState({ showDiscreteLogInfoPopUp: true, }) }}>
                        Discrete Logarithm problem
                    </Text>.
                    {"\n"}
                    Assuming we have a function:
                </Text>
                <Image
                    source={require('./DiscreteLogProblem.png')}
                    style={{ width: u * 0.227 * 0.5, height: u * 0.076 * 0.5, alignSelf: 'center', resizeMode: 'contain' }}
                />
                <Text style={style.contentStyle}>
                    Given <Text style={{color:'#9B59B6'}}>b</Text>, we would be unable to find <Text style={{color:'#1ABC9C'}}>a</Text> and <Text style={{color:'#E74C3C'}}>k</Text> in a reasonable time.
                    {"\n"}
                </Text>
            </View>
        )
    }
}
