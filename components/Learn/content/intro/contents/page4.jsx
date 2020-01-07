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

export default class page4 extends Component {
    constructor(props) {
        super(props);

        // local state not affected by redux
        this.state = {
            showAdlemanArticleInfoPopUp: false,
            showShamirArticleInfoPopUp: false,
            showPriceInfoPopUp: false,
            showBrickellInfoPopUp: false,
        }
    }
    adlemanArticleInfoPopUp = () => {
        let u = Dimensions.get('window').height
        let m = 0.7
        return (
            <View>
                <Image
                    source={require('./pic/leonard-adleman.jpg')}
                    style={{ width: u * 0.220 * m, height: u * 0.345 * m, alignSelf: 'center' }}
                />
                <Text style={styles.PageStyle.popUpTextStyle}>
                    {"\n"}
                    Leonard Adleman is one of the creators of the RSA encryption algorithm. <Text
                        style={styles.PageStyle.links}
                        onPress={() => Linking.openURL('https://en.wikipedia.org/wiki/Leonard_Adleman')}>
                        wikipedia
                    </Text>
                </Text>
                <Text style={styles.PageStyle.popUpTextStyle}>{"\n"}
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
        let u = Dimensions.get('window').height
        let m = 0.7
        return (
            <View>
                <Image
                    source={require('./pic/adi-shamir.jpg')}
                    style={{ width: u * 0.220 * m, height: u * 0.330 * m, alignSelf: 'center' }}
                />
                <Text style={styles.PageStyle.popUpTextStyle}>
                    {"\n"}
                    Adi Shamir is a co-inventor of the Rivest–Shamir–Adleman (RSA) algorithm
                    (along with Ron Rivest and Len Adleman). <Text
                        style={styles.PageStyle.links}
                        onPress={() => Linking.openURL('https://en.wikipedia.org/wiki/Adi_Shamir')}>
                        wikipedia
                    </Text>
                </Text>
                <Text style={styles.PageStyle.popUpTextStyle}>{"\n"}
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
                    The cryptosystem was implemented in multiple layers the
                    more difficult knapsack problem would still be secure.
                </Text>
            </View>
        )
    }
    brickellInfoPopUp = () => {
        return (
            <View>
                <Text style={styles.PageStyle.popUpTextStyle}>
                    Merkle awarded a price of $1000 to Brickell who broke it in 1 hour.{"\n"}
                    This marked the end of the trapdoor knapsack cryptosystem.{"\n"}
                </Text>
                <Text style={styles.PageStyle.popUpTextStyle}>
                    A documentation of it can be found in this link:
                </Text>
                <Text
                    style={styles.PageStyle.links}
                    onPress={() => Linking.openURL('https://link.springer.com/chapter/10.1007/BFb0053429')}>
                    https://link.springer.com/chapter/10.1007/BFb0053429
                </Text>
            </View>
        )
    }
    render() {
        const {
            showAdlemanArticleInfoPopUp,
            showShamirArticleInfoPopUp,
            showPriceInfoPopUp,
            showBrickellInfoPopUp
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
                    showBrickellInfoPopUp
                        ? <AlertPopUp
                            icon={Alert}
                            renderedBlocks={this.brickellInfoPopUp()}
                            callback={() => { this.setState({ showBrickellInfoPopUp: false, }) }}
                            visibility={showBrickellInfoPopUp} />
                        : null
                }
                <Text style={style.titleStyle}>Introduction</Text>
                <Text style={style.contentHead}>A brief History of how Trapdoor Knapsack was broken</Text>
                <Text style={style.contentStyle}>
                    In 1982 <Text style={style.links} onPress={() => { this.setState({ showAdlemanArticleInfoPopUp: true, }) }}>
                        Leonard Adleman
                    </Text> broke the cryptosystem.
                    {"\n\n"}
                    In the same year, <Text style={style.links} onPress={() => { this.setState({ showShamirArticleInfoPopUp: true, }) }}>
                        Adi Shamir
                    </Text>, the inventor of RSA cryptosystem that is still used today
                    posted an article on breaking the cryptosystem.
                    {"\n\n"}
                    Ralph Merkle offered a reward to anyone who could break his <Text style={style.links} onPress={() => { this.setState({ showPriceInfoPopUp: true, }) }}>
                        new implementation
                    </Text>.
                    {"\n\n"}
                    In 1984, Brickell <Text style={style.links} onPress={() => { this.setState({ showBrickellInfoPopUp: true, }) }}>
                        broke
                    </Text> the cryptosystem.
                    {"\n\n"}
                    Today, we can still learn its concepts of cryptography.
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