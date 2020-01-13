import React, { Component } from 'react';
import {
    View,
    Button,
    Text,
    Image,
    TouchableOpacity,
    KeyboardAvoidingView,
    FlatList,
    Dimensions
} from 'react-native';

import AlertPopUp from '../../../../Common/AlertPopUp';
// import stylesheet.
import styles from '../styles';

//images
import Info from '../../../../../assets/images/InfoIcon.png';
import TableImg from '../../../../../assets/images/GCDTables/ET1.png';

export default class page7 extends Component {
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
                    The Extended Euclidean algorithm is an extension to the Euclidean algorithm.
                </Text>
            </>
        )
    }
    inverseInfoPopUp = () => {
        let style = styles.GCDPages
        let u = Dimensions.get('window').height

        return (
            <>
                <Text style={style.popUpTextStyle}>
                    Multiplicative inverse also known as reciprocal for a
                    number <Text style={style.bold}>x</Text>,
                    denoted by <Text style={style.bold}>
                        1/x
                    </Text> or <Text style={style.bold}>x^-1</Text>,
                    is <Text style={style.bold}>a number</Text> which when
                    multiplied by x to get 1.
                    {"\n\n"}
                    If <Text style={style.bold}>
                        GCD(a, b) = 1
                    </Text> => can find inverses a mod b and b mod a.
                </Text>
                <Text style={{ textAlign: 'center', marginTop: u * 0.02, ...style.popUpTextStyle }}>
                    <Text style={style.popUpTextStyleBold}>GCD(a, b) = x * a + y * b = 1</Text>{"\n"}
                    (Where x and y are some integers)
                </Text>
            </>
        )
    }
    render() {
        let style = styles.GCDPages
        const { showEuclideanInfoPopUp, showInverseInfoPopUp } = this.state
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
                {
                    showInverseInfoPopUp
                        ? <AlertPopUp
                            icon={Info}
                            renderedBlocks={this.inverseInfoPopUp()}
                            callback={() => { this.setState({ showInverseInfoPopUp: false, }) }}
                            visibility={showInverseInfoPopUp} />
                        : null
                }
                <Text style={style.titleStyle}>Extended Euclidean Algorithm</Text>
                <View style={style.imgContainer}>
                    <Image
                        source={TableImg}
                        style={style.imgStyle}
                    />
                </View>

                <Text style={style.contentStyle}>
                    <Text style={style.links} onPress={() => { this.setState({ showEuclideanInfoPopUp: true, }) }} >
                        Extended Euclidean algorithm
                    </Text> is used to find if there is
                    a <Text style={style.links} onPress={() => { this.setState({ showInverseInfoPopUp: true, }) }} >
                        multiplicative inverse
                    </Text> and the value of it.
                    {"\n\n"}
                    With the <Text style={style.bold}>Extended Euclidean algorithm</Text>,
                    the easiest way to visualise it is via a table.
                    {"\n\n"}
                    Construct a table like the original Euclidean algorithm but with <Text style={style.highlight}>
                        4 more columns
                    </Text>.
                    {"\n"}
                </Text>
            </View>
        )
    }
}
