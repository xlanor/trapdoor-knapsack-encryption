import React, { Component } from 'react';
import {
    View,
    Button,
    Text,
    Image,
    TouchableOpacity,
    FlatList
} from 'react-native';

import AlertPopUp from '../../../../Common/AlertPopUp';
import Alert from '../../../../../assets/images/alert.png';
// import stylesheet.
import styles from '../styles';

export default class page5 extends Component {
    constructor(props) {
        super(props);

        // local state not affected by redux
        this.state = {
            showPrivateKeyInfoPopUp: false,
            showModulusInfoPopUp: false,
            showMultiplierInfoPopUp: false,
            showSecretKeyInfoPopUp: false,
        }
    }
    privateKeyInfoPopUp = () => {
        return (
            <View>
                <Text style={styles.PageStyle.popUpTextStyle}>
                    The private key is a superincreasing knapsack to ensure there will only be one answer to a ciphertext.
                </Text>
            </View>
        )
    }
    modulusInfoPopUp = () => {
        return (
            <View>
                <Text style={styles.PageStyle.popUpTextStyle}>
                    The modulus chosen is a random integer larger than the sum of elements in the knapsack.
                    This ensures the uniqueness of the ciphertext and plaintext pairs.
                </Text>
            </View>
        )
    }
    multiplierInfoPopUp = () => {
        return (
            <View>
                <Text style={styles.PageStyle.popUpTextStyle}>
                    The multiplier chosen is a co-prime to the modulus,
                    so that a multiplicative inverse can be found.
                </Text>
            </View>
        )
    }
    secretKeyInfoPopUp = () => {
        return (
            <View>
                <Text style={styles.PageStyle.popUpTextStyle}>
                    The secret key refers to the analogy of a "trapdoor" where it is easy to fall through a trapdoor,
                    but it is very hard to climb back out and get to where you started unless you have a ladder.
                </Text>
                <Text style={styles.PageStyle.popUpTextStyleBold}>
                    Something wrong. Secret key analogy makes no sense.{"\n"}
                    Key could be referred to as hidden so nobody else can find.
                    You are talking about a one-way trapdoor not a key.
                    You could call the key as maybe the information of how to get out.
                    I suggest just remove this.
                </Text>
            </View>
        )
    }
    render() {
        const {
            showPrivateKeyInfoPopUp,
            showModulusInfoPopUp,
            showMultiplierInfoPopUp,
            showSecretKeyInfoPopUp
        } = this.state
        let style = styles.PageStyle

        return (
            <View style={style.containerStyle}>
                {
                    showPrivateKeyInfoPopUp
                        ? <AlertPopUp
                            icon={Alert}
                            renderedBlocks={this.privateKeyInfoPopUp()}
                            callback={() => { this.setState({ showPrivateKeyInfoPopUp: false, }) }}
                            visibility={showPrivateKeyInfoPopUp} />
                        : null
                }
                {
                    showModulusInfoPopUp
                        ? <AlertPopUp
                            icon={Alert}
                            renderedBlocks={this.modulusInfoPopUp()}
                            callback={() => { this.setState({ showModulusInfoPopUp: false, }) }}
                            visibility={showModulusInfoPopUp} />
                        : null
                }
                {
                    showMultiplierInfoPopUp
                        ? <AlertPopUp
                            icon={Alert}
                            renderedBlocks={this.multiplierInfoPopUp()}
                            callback={() => { this.setState({ showMultiplierInfoPopUp: false, }) }}
                            visibility={showMultiplierInfoPopUp} />
                        : null
                }
                {
                    showSecretKeyInfoPopUp
                        ? <AlertPopUp
                            icon={Alert}
                            renderedBlocks={this.secretKeyInfoPopUp()}
                            callback={() => { this.setState({ showSecretKeyInfoPopUp: false, }) }}
                            visibility={showSecretKeyInfoPopUp} />
                        : null
                }
                <Text style={style.titleStyle}>Introduction</Text>
                <Text style={style.contentHead}>Trapdoor Knapsack Description</Text>

                <Text style={style.contentStyle}>
                    Trapdoor knapsack is basically formed around 3 different key information:
                    {"\n\n"}
                    1. <Text style={style.privateKey} onPress={() => { this.setState({ showPrivateKeyInfoPopUp: true, }) }}>
                        private key
                    </Text>
                    {"\n\n"}
                    2. <Text style={style.modulus} onPress={() => { this.setState({ showModulusInfoPopUp: true, }) }}>
                        modulus
                    </Text>
                    {"\n\n"}
                    3. <Text style={style.multiplier} onPress={() => { this.setState({ showMultiplierInfoPopUp: true, }) }}>
                        multiplier
                    </Text>
                    {"\n\n"}

                    Everything else is derived from these 3 pieces of information.
                    {"\n\n"}
                    These three are kept as the <Text style={style.secretKey} onPress={() => { this.setState({ showSecretKeyInfoPopUp: true, }) }}>
                        secret key
                    </Text> by the owner and not distributed.
                    {"\n"}
                </Text>
            </View>
        )
    }
}
