import React, { Component } from 'react';
import {
    View,
    Dimensions,
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
            <>
                <Text style={styles.GCDPages.popUpTextStyle}>
                    An algorithm named after the <Text style={styles.GCDPages.bold}>
                        ancient Greek mathematician Euclid
                    </Text>. It can be used to reduce fractions to their simplest form,
                    and is a part of many number-theoretic and cryptographic calculations.
                    {"\n\n"}
                    <Text
                        style={styles.GCDPages.links}
                        onPress={() => Linking.openURL('https://en.wikipedia.org/wiki/Euclidean_algorithm')}>
                        https://en.wikipedia.org/wiki/Euclidean_algorithm
                    </Text>
                </Text>
            </>
        )
    }
    render() {
        let style = styles.GCDPages
        const { showEuclideanInfoPopUp } = this.state
        let u = Dimensions.get('window').height

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
                    </Text> is an efficient method of finding the <Text style={{ ...style.bold, ...style.GCDStyle }}>
                        Greatest Common Divisor(GCD)
                    </Text> of <Text style={style.bold}>
                        2 different integers
                    </Text>.
                    {"\n\n"}
                    Usually when asked for a notation such as:
                </Text>

                <Text style={{
                    ...style.contentStyle,
                    textAlign: 'center',
                    ...style.bold,
                    ...style.GCDStyle,
                    marginTop: u * 0.02,
                    marginBottom: u * 0.02
                }}>
                    GCD(<Text style={style.valA}>a</Text>, <Text style={style.valB}>b</Text>) = x
                </Text>

                <Text style={style.contentStyle}>
                    where <Text style={{ ...style.bold, ...style.valA }}>
                        a
                    </Text> and <Text style={{ ...style.bold, ...style.valB }}>
                        b
                    </Text> are <Text style={style.bold}>
                        2 different integers
                    </Text> and <Text style={style.bold}>
                        x
                    </Text> is the result.
                    {"\n\n"}
                    This refers to what the <Text style={{ ...style.bold, ...style.GCDStyle }}>
                        GCD
                    </Text> of <Text style={{ ...style.bold, ...style.valA }}>
                        a
                    </Text> and <Text style={{ ...style.bold, ...style.valB }}>
                        b
                    </Text> is.
                    {"\n"}
                </Text>
            </View>
        )
    }
}
