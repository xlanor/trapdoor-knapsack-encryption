import React, { Component } from 'react';
import {
    View,
    Dimensions,
    Button,
    Text,
    Image,
    TouchableOpacity,
    FlatList,
    Linking
} from 'react-native';

import AlertPopUp from '../../../../Common/AlertPopUp';
import ralph_merkle from '../../../../../assets/images/IntroImages/ralph_merkle.jpeg';
import Martin_Hellman from '../../../../../assets/images/IntroImages/Martin-Hellman.jpg';

//Images
import Info from '../../../../../assets/images/InfoIcon.png';

// import stylesheet.
import styles from '../styles';

export default class page3 extends Component {
    constructor(props) {
        super(props);

        // local state not affected by redux
        this.state = {
            showTrapdoorKnapsackAlgoPopUp: false,
            showRalphMerkleInfoPopUp: false,
            showMartinHellmanInfoPopUp: false,
            showProblemsInfoPopUp: false,
        }
    }
    trapdoorKnapsackAlgoPopUp = () => {
        return (
            <>
                <Text style={styles.PageStyle.popUpTextStyle}>
                    The trapdoor knapsack is also known as the Merkle-Hellman knapsack cryptosystem.
                </Text>
            </>
        )
    }
    ralphMerkleInfoPopUp = () => {
        let u = Dimensions.get('window').height
        let m = 0.24
        return (
            <>
                <View style={{ height: u * m }}>
                    <Image
                        source={ralph_merkle}
                        style={styles.PageStyle.imgStyle}
                    />
                </View>

                <Text style={{ ...styles.PageStyle.popUpTextStyle, marginTop: u * 0.02 }}>
                    Ralph C.Merkle is one of the inventors of public key cryptography and
                    the inventor of cryptographic hashing. <Text
                        style={styles.PageStyle.links}
                        onPress={() => Linking.openURL('https://en.wikipedia.org/wiki/Ralph_Merkle')}>
                        wikipedia
                    </Text>
                </Text>
            </>
        )
    }
    martinHellmanInfoPopUp = () => {
        let u = Dimensions.get('window').height
        let m = 0.24
        return (
            <>
                <View style={{ height: u * m }}>
                    <Image
                        source={Martin_Hellman}
                        style={styles.PageStyle.imgStyle}
                    />
                </View>

                <Text style={{ ...styles.PageStyle.popUpTextStyle, marginTop: u * 0.02 }}>
                    Martin Edward Hellman is best known for his invention of public key cryptography. <Text
                        style={styles.PageStyle.links}
                        onPress={() => Linking.openURL('https://en.wikipedia.org/wiki/Martin_Hellman')}>
                        wikipedia
                    </Text>
                </Text>
            </>
        )
    }
    problemsInfoPopUp = () => {
        return (
            <>
                <Text style={styles.PageStyle.popUpTextStyle}>
                    1. Easy to solve, given the <Text style={styles.PageStyle.privateKey}>private key</Text>.
                </Text>
                <Text style={styles.PageStyle.popUpTextStyle}>
                    2. Difficult to solve, given a <Text style={styles.PageStyle.publicKey}>public key</Text>.
                </Text>
            </>
        )
    }
    render() {
        const {
            showTrapdoorKnapsackAlgoPopUp,
            showRalphMerkleInfoPopUp,
            showMartinHellmanInfoPopUp,
            showProblemsInfoPopUp,
        } = this.state
        let style = styles.PageStyle
        return (
            <View style={style.containerStyle}>
                {
                    showTrapdoorKnapsackAlgoPopUp
                        ? <AlertPopUp
                            icon={Info}
                            renderedBlocks={this.trapdoorKnapsackAlgoPopUp()}
                            callback={() => { this.setState({ showTrapdoorKnapsackAlgoPopUp: false, }) }}
                            visibility={showTrapdoorKnapsackAlgoPopUp} />
                        : null
                }
                {
                    showRalphMerkleInfoPopUp
                        ? <AlertPopUp
                            icon={Info}
                            renderedBlocks={this.ralphMerkleInfoPopUp()}
                            callback={() => { this.setState({ showRalphMerkleInfoPopUp: false, }) }}
                            visibility={showRalphMerkleInfoPopUp} />
                        : null
                }
                {
                    showMartinHellmanInfoPopUp
                        ? <AlertPopUp
                            icon={Info}
                            renderedBlocks={this.martinHellmanInfoPopUp()}
                            callback={() => { this.setState({ showMartinHellmanInfoPopUp: false, }) }}
                            visibility={showMartinHellmanInfoPopUp} />
                        : null
                }
                {
                    showProblemsInfoPopUp
                        ? <AlertPopUp
                            icon={Info}
                            renderedBlocks={this.problemsInfoPopUp()}
                            callback={() => { this.setState({ showProblemsInfoPopUp: false, }) }}
                            visibility={showProblemsInfoPopUp} />
                        : null
                }
                <Text style={style.titleStyle}>Introduction</Text>
                <Text style={style.contentHead}>Trapdoor Knapsack Algorithm</Text>

                <Text style={style.contentStyle}>
                    <Text style={style.links} onPress={() => { this.setState({ showRalphMerkleInfoPopUp: true, }) }}>Ralph Merkle</Text>
                    {" "}and{" "}
                    <Text style={style.links} onPress={() => { this.setState({ showMartinHellmanInfoPopUp: true, }) }}>Martin Hellman</Text>
                    {" "}invented the{" "}
                    <Text style={style.links} onPress={() => { this.setState({ showTrapdoorKnapsackAlgoPopUp: true, }) }}>
                        Trapdoor Knapsack Algorithm
                    </Text>
                    {" "}in 1978.
                    {"\n\n"}
                    The general idea behind this algorithm is to create{" "}
                    <Text style={style.links} onPress={() => { this.setState({ showProblemsInfoPopUp: true, }) }}>
                        2 separate problems
                    </Text>.
                    This ensures that the{" "}
                    <Text style={styles.PageStyle.privateKey}>private key</Text>
                    {" "}is easy to use but the{" "}
                    <Text style={styles.PageStyle.publicKey}>public key</Text>
                    {" "}is difficult to compute.
                    {"\n\n"}
                    As such, trapdoor function ensures that without prior knowledge of the "trapdoor",
                    the encryption cannot easily be reversed.
                    {"\n\n"}
                    However, Trapdoor knapsack has been broken.
                    {"\n"}
                </Text>
            </View>
        )
    }
}
