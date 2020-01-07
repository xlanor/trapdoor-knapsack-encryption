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
                   The secret key is a piece of information or parameter that is used to decrypt ciphertext during trapdoor knapsack.
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
                        <Text style={style.underline}>Private Key</Text>
                    </Text>
                    {"\n\n"}
                    2. <Text style={style.modulus} onPress={() => { this.setState({ showModulusInfoPopUp: true, }) }}>
                        <Text style={style.underline}>Modulus</Text>
                    </Text>
                    {"\n\n"}
                    3. <Text style={style.multiplier} onPress={() => { this.setState({ showMultiplierInfoPopUp: true, }) }}>
                        <Text style={style.underline}>Multiplier</Text>
                    </Text>
                    {"\n\n"}

                    Everything else is derived from these 3 pieces of information.
                    {"\n\n"}
                    These three are kept as the <Text style={style.secretKey} onPress={() => { this.setState({ showSecretKeyInfoPopUp: true, }) }}>
                        <Text style={style.underline}>secret key</Text>
                    </Text> by the owner and not distributed.
                    
                </Text>
            </View>
        )
    }
}
