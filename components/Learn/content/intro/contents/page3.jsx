import React, { Component } from 'react';
import {
    View,
    Button,
    Text,
    Image,
    TouchableOpacity,
    FlatList,
    Linking
} from 'react-native';
import { Dimensions } from 'react-native';

import AlertPopUp from '../../../../Common/AlertPopUp';
import Alert from '../../../../../assets/images/alert.png';
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
            <View>
                <Text style={styles.PageStyle.popUpTextStyle}>
                    The trapdoor knapsack is also known as the Merkle-Hellman knapsack cryptosystem.
                </Text>
            </View>
        )
    }
    ralphMerkleInfoPopUp = () => {
        let u = Dimensions.get('window').height
        let m = 0.24
        return (
            <View>
                <View style={{height: u * m}}>
                    <Image
                        source={require('./pic/ralph_merkle.jpeg')}
                        style={styles.PageStyle.imgStyle}
                    />
                </View>

                <Text style={styles.PageStyle.popUpTextStyle}>
                    {"\n"}
                    Ralph C.Merkle is one of the inventors of public key cryptography and
                    the inventor of cryptographic hashing. <Text
                        style={styles.PageStyle.links}
                        onPress={() => Linking.openURL('https://en.wikipedia.org/wiki/Ralph_Merkle')}>
                        wikipedia
                    </Text>
                </Text>
            </View>
        )
    }
    martinHellmanInfoPopUp = () => {
        let u = Dimensions.get('window').height
        let m = 0.24
        return (
            <View>
                <View style={{height: u * m}}>
                    <Image
                        source={require('./pic/Martin-Hellman.jpg')}
                        style={styles.PageStyle.imgStyle}
                    />
                </View>
                
                <Text style={styles.PageStyle.popUpTextStyle}>
                    {"\n"}
                    Martin Edward Hellman is best known for his invention of public key cryptography. <Text
                        style={styles.PageStyle.links}
                        onPress={() => Linking.openURL('https://en.wikipedia.org/wiki/Martin_Hellman')}>
                        wikipedia
                    </Text>
                </Text>
            </View>
        )
    }
    problemsInfoPopUp = () => {
        return (
            <View>
                <Text style={styles.PageStyle.popUpTextStyle}>
                    1. Easy to solve, given the private key
                    {"\n\n"}
                    2. Difficult to solve, given a public key.
                </Text>
            </View>
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
                            icon={Alert}
                            renderedBlocks={this.trapdoorKnapsackAlgoPopUp()}
                            callback={() => { this.setState({ showTrapdoorKnapsackAlgoPopUp: false, }) }}
                            visibility={showTrapdoorKnapsackAlgoPopUp} />
                        : null
                }
                {
                    showRalphMerkleInfoPopUp
                        ? <AlertPopUp
                            icon={Alert}
                            renderedBlocks={this.ralphMerkleInfoPopUp()}
                            callback={() => { this.setState({ showRalphMerkleInfoPopUp: false, }) }}
                            visibility={showRalphMerkleInfoPopUp} />
                        : null
                }
                {
                    showMartinHellmanInfoPopUp
                        ? <AlertPopUp
                            icon={Alert}
                            renderedBlocks={this.martinHellmanInfoPopUp()}
                            callback={() => { this.setState({ showMartinHellmanInfoPopUp: false, }) }}
                            visibility={showMartinHellmanInfoPopUp} />
                        : null
                }
                {
                    showProblemsInfoPopUp
                        ? <AlertPopUp
                            icon={Alert}
                            renderedBlocks={this.problemsInfoPopUp()}
                            callback={() => { this.setState({ showProblemsInfoPopUp: false, }) }}
                            visibility={showProblemsInfoPopUp} />
                        : null
                }
                <Text style={style.titleStyle}>Introduction</Text>

                <Text style={style.contentHead}>Trapdoor Knapsack Algorithm</Text>

                <Text style={style.contentStyle}>
                    <Text style={style.links} onPress={() => { this.setState({ showRalphMerkleInfoPopUp: true, }) }}>
                        Ralph Merkle
                    </Text> and <Text style={style.links} onPress={() => { this.setState({ showMartinHellmanInfoPopUp: true, }) }}>
                        Martin Hellman
                    </Text> invented the <Text style={style.links} onPress={() => { this.setState({ showTrapdoorKnapsackAlgoPopUp: true, }) }}>
                        Trapdoor Knapsack Algorithm
                    </Text> in 1978.
                    {"\n\n"}
                    The general idea behind this algorithm is to create <Text style={style.links} onPress={() => { this.setState({ showProblemsInfoPopUp: true, }) }}>
                        2 separate problems
                    </Text>.
                    This ensures that the private key is easy to use but the public key is difficult to compute.
                    {"\n\n"}
                    As such, trapdoor function ensures that without prior knowledge of the "trapdoor", the encryption cannot easily be reversed.
                    {"\n\n"}
                    However, Trapdoor knapsack has been broken.
                    {"\n"}
                </Text>
            </View>
        )
    }
}
/**
 *  OLD CONTENTS BELOW. IGNORE
    The trapdoor knapsack is also known as the <Text style={style.bold}>Merkle-Hellman knapsack cryptosystem</Text> and was invented by Ralph Merkle and Martin Hellman in 1978.
    {"\n\n"}
    The general idea behind this algorithm is to create two separate problems - one of which is easy to solve, giving the <Text style={style.privateKey}>private key</Text>, and the other being difficult to solve, giving a <Text style={style.publicKey}>public key</Text>.
    {"\n\n"}
    This ensures that the <Text style={style.privateKey}>private key</Text> is easy to use, but the <Text style={style.publicKey}>public key</Text> is difficult to compute.
    {"\n"}
    As such, this function as a “trapdoor”, ensuring that without proper knowledge of the trapdoor, the encryption cannot easily be reversed.
    However Trapdoor knapsack has been broken.
 */