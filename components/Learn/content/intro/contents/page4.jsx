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

import AlertPopUp from '../../../../Common/AlertPopUp';
import Alert from '../../../../../assets/images/alert.png';
// import stylesheet.
import styles from '../styles';

export default class page4 extends Component {
    constructor(props) {
        super(props);

        // local state not affected by redux
        this.state = {
            showAdlemanArticleInfoPopUp: false,
            showShamirArticleInfoPopUp: false,
            showPriceInfoPopUp: false,
            showConceptsInfoPopUp: false,
        }
    }
    adlemanArticleInfoPopUp = () => {
        return (
            <View>
                <Text style={styles.PageStyle.popUpTextStyle}>
                    A quick reference on how he broke the system can be found in this link:
                </Text>
                <Text
                    style={styles.PageStyle.links}
                    onPress={() => Linking.openURL('https://link.springer.com/chapter/10.1007%2F978-1-4757-0602-4_29')}>
                    https://link.springer.com/chapter/10.1007%2F978-1-4757-0602-4_29
                </Text>
            </View>
        )
    }
    shamirArticleInfoPopUp = () => {
        return (
            <View>
                <Text style={styles.PageStyle.popUpTextStyle}>
                    A quick reference on how he broke the system can be found in this link:
                </Text>
                <Text
                    style={styles.PageStyle.links}
                    onPress={() => Linking.openURL('https://ieeexplore.ieee.org/document/4568386')}>
                    https://ieeexplore.ieee.org/document/4568386
                </Text>
            </View>
        )
    }
    priceInfoPopUp = () => {
        return (
            <View>
                <Text style={styles.PageStyle.popUpTextStyle}>
                    This marked the end of the trapdoor knapsack cryptosystem.
                </Text>
                <Text style={styles.PageStyle.popUpTextStyleBold}>
                    Something wrong. Where the details of the price go.{"\n"}
                    This text went missing{"\n"}
                    Ralph Merkle was still confident that if the cryptosystem was implemented in multiple layers the more difficult knapsack problem would still be secure.
                    He offered a reward of $1000 to anyone who could break this newer implementation.
                </Text>
            </View>
        )
    }
    conceptsInfoPopUp = () => {
        return (
            <View>
                <Text style={styles.PageStyle.popUpTextStyle}>
                    The 2 separate problems are defined by which one is easy to solve,
                    given the private key,
                    and the other being difficult to solve,
                    given a public key.
            </Text>
            </View>
        )
    }
    render() {
        const {
            showAdlemanArticleInfoPopUp,
            showShamirArticleInfoPopUp,
            showPriceInfoPopUp,
            showConceptsInfoPopUp
        } = this.state
        let style = styles.PageStyle

        return (
            <View style={style.containerStyle}>
                {
                    showAdlemanArticleInfoPopUp
                        ? <AlertPopUp
                            icon={Alert}
                            renderedBlocks={this.adlemanArticleInfoPopUp()}
                            callback={() => { this.setState({ showAdlemanArticleInfoPopUp: false, }) }}
                            visibility={showAdlemanArticleInfoPopUp} />
                        : null
                }
                {
                    showShamirArticleInfoPopUp
                        ? <AlertPopUp
                            icon={Alert}
                            renderedBlocks={this.shamirArticleInfoPopUp()}
                            callback={() => { this.setState({ showShamirArticleInfoPopUp: false, }) }}
                            visibility={showShamirArticleInfoPopUp} />
                        : null
                }
                {
                    showPriceInfoPopUp
                        ? <AlertPopUp
                            icon={Alert}
                            renderedBlocks={this.priceInfoPopUp()}
                            callback={() => { this.setState({ showPriceInfoPopUp: false, }) }}
                            visibility={showPriceInfoPopUp} />
                        : null
                }
                {
                    showConceptsInfoPopUp
                        ? <AlertPopUp
                            icon={Alert}
                            renderedBlocks={this.conceptsInfoPopUp()}
                            callback={() => { this.setState({ showConceptsInfoPopUp: false, }) }}
                            visibility={showConceptsInfoPopUp} />
                        : null
                }
                <Text style={style.titleStyle}>Introduction</Text>
                <Text style={style.contentHead}>A brief History of how Trapdoor Knapsack was broken</Text>
                <Text style={style.contentStyle}>
                    In 1982 <Text style={style.links} onPress={() => { this.setState({ showAdlemanArticleInfoPopUp: true, }) }}>
                        Leonard Adleman
                    </Text> broke the cryptosystem.
                    {"\n"}
                    In the same year, Adi Shamir, the inventor of RSA cryptosystem that is still used today
                    posted an <Text style={style.links} onPress={() => { this.setState({ showShamirArticleInfoPopUp: true, }) }}>
                        article
                    </Text> on breaking the cryptosystem.
                    {"\n\n"}
                    Merkle awarded the <Text style={style.links} onPress={() => { this.setState({ showPriceInfoPopUp: true, }) }}>
                        price
                    </Text> to Brickell.
                    {"\n\n"}
                    However, we can still learn from the <Text style={style.links} onPress={() => { this.setState({ showConceptsInfoPopUp: true, }) }}>
                        concepts
                    </Text> of cryptography from trapdoor knapsack.
                    {"\n"}
                </Text>
            </View>
        )
    }
}
/**OLD STUFF
 * A quick reference to how he broke the system can be found in this link
                    {"\n"}
                    <Text style={{color: '#2980B9'}}
                        onPress={() => Linking.openURL('https://link.springer.com/chapter/10.1007%2F978-1-4757-0602-4_29')}>
                    https://link.springer.com/chapter/10.1007%2F978-1-4757-0602-4_29
                    </Text>
                    {"\n\n"}
                    In the same year Adi Shamir the inventor of RSA cryptosystem that is still used today posted an article on an algorithm to break the cryptosystem
                    {"\n"}
                    <Text style={{color: '#2980B9'}}
                        onPress={() => Linking.openURL('https://ieeexplore.ieee.org/document/4568386')}>
                    https://ieeexplore.ieee.org/document/4568386
                    </Text>
                    {"\n\n"}
                    Merkle awarded the price to Brickell. This marked the end of the trapdoor knapsack cryptosystem.
                    {"\n\n"}
                    However, we can still learn from the concepts of cryptography from trapdoor knapsack as it is easy to understand compared to many other cryptographic systems.

 */