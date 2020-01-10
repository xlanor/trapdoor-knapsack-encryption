import React, { Component } from 'react';
import {
    View,
    Button,
    Text,
    Image,
    TouchableOpacity,
    KeyboardAvoidingView,
    FlatList,
    Linking
} from 'react-native';

import AlertPopUp from '../../../../Common/AlertPopUp';
import Info from '../../../../../assets/images/InfoIcon.png';
// import stylesheet.
import styles from '../styles';

export default class page1 extends Component {
    constructor(props) {
        super(props);

        // local state not affected by redux
        this.state = {
            showEuclideanInfoPopUp: false,
        }
    }
    euclideanInfoPopUp = () => {
        return (
            <View>
                <Text style={styles.GCDPages.popUpTextStyle}>
                    An algorithm named after the ancient Greek mathematician Euclid.
                    It can be used to reduce fractions to their simplest form,
                    and is a part of many number-theoretic and cryptographic calculations.{"\n"}
                </Text>
                <Text
                    style={styles.GCDPages.links}
                    onPress={() => Linking.openURL('https://en.wikipedia.org/wiki/Euclidean_algorithm')}>
                    https://en.wikipedia.org/wiki/Euclidean_algorithm
                </Text>
            </View>
        )
    }
    render() {
        let style = styles.GCDPages
        const { showEuclideanInfoPopUp } = this.state
        return (
            <View style={style.containerStyle}>
                {
                    showEuclideanInfoPopUp
                        ? <AlertPopUp
                            icon={Info}
                            renderedBlocks={this.euclideanInfoPopUp()}
                            callback={() => { this.setState({ showEuclideanInfoPopUp: false, }) }}
                            visibility={showEuclideanInfoPopUp} />
                        : null
                }
                <Text style={style.titleStyle}>Euclidean Algorithm</Text>
                <Text style={style.contentStyle}>
                    The <Text style={style.links} onPress={() => { this.setState({ showEuclideanInfoPopUp: true, }) }} >
                        Euclidean algorithm
                    </Text> is an efficient method of finding the <Text style={style.bold}>
                        Greatest Common Divisor(GCD)
                    </Text> of <Text style={style.bold}>
                        2 different integers
                    </Text>.
                    {"\n\n"}
                    Usually when someone asks for a notation such as <Text style={style.bold}>
                        GCD(<Text style={style.valA}>a</Text>, <Text style={style.valB}>b</Text>) = x
                    </Text> where <Text style={style.valA}>
                        a
                    </Text> and <Text style={style.valB}>
                        b
                    </Text> are <Text style={style.bold}>
                        2 different integers
                    </Text>.{"\n"}
                    They are asking what is the <Text style={style.bold}>
                        GCD
                    </Text> of <Text style={style.valA}>
                        a
                    </Text> and <Text style={style.valB}>
                        b
                    </Text>.
                    {"\n"}
                </Text>
            </View>
        )
    }
}
