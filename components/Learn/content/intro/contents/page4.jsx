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

//images
import Info from '../../../../../assets/images/InfoIcon.png';
import leonard_adleman from '../../../../../assets/images/IntroImages/leonard-adleman.jpg';
import adi_shamir from '../../../../../assets/images/IntroImages/adi-shamir.jpg';

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
        let m = 0.24
        return (
            <>
                <View style={{ height: u * m }}>
                    <Image
                        source={leonard_adleman}
                        style={styles.PageStyle.imgStyle}
                    />
                </View>

                <Text style={{ ...styles.PageStyle.popUpTextStyle, marginTop: u * 0.02 }}>
                    Leonard Adleman is one of the creators of the RSA encryption algorithm. <Text
                        style={styles.PageStyle.links}
                        onPress={() => Linking.openURL('https://en.wikipedia.org/wiki/Leonard_Adleman')}>
                        wikipedia
                    </Text>
                    {"\n\n"}
                    A quick reference on how he broke the system can be found in this link:{"\n"}
                    <Text
                        style={styles.PageStyle.links}
                        onPress={() => Linking.openURL('https://link.springer.com/chapter/10.1007%2F978-1-4757-0602-4_29')}>
                        https://link.springer.com/chapter/10.1007%2F978-1-4757-0602-4_29
                    </Text>
                </Text>
            </>
        )
    }
    shamirArticleInfoPopUp = () => {
        let u = Dimensions.get('window').height
        let m = 0.24
        return (
            <>
                <View style={{ height: u * m }}>
                    <Image
                        source={adi_shamir}
                        style={styles.PageStyle.imgStyle}
                    />
                </View>

                <Text style={{ ...styles.PageStyle.popUpTextStyle, marginTop: u * 0.02 }}>
                    Adi Shamir is a co-inventor of the Rivest–Shamir–Adleman (RSA) algorithm
                    (along with Ron Rivest and Len Adleman). <Text
                        style={styles.PageStyle.links}
                        onPress={() => Linking.openURL('https://en.wikipedia.org/wiki/Adi_Shamir')}>
                        wikipedia
                    </Text>
                    {"\n\n"}
                    A quick reference on how he broke the system can be found in this link:{"\n"}
                    <Text
                        style={styles.PageStyle.links}
                        onPress={() => Linking.openURL('https://ieeexplore.ieee.org/document/4568386')}>
                        https://ieeexplore.ieee.org/document/4568386
                    </Text>
                </Text>
            </>
        )
    }
    priceInfoPopUp = () => {
        return (
            <>
                <Text style={styles.PageStyle.popUpTextStyle}>
                    The cryptosystem was implemented in multiple layers thus would still be secure.
                </Text>
            </>
        )
    }
    brickellInfoPopUp = () => {
        return (
            <>
                <Text style={styles.PageStyle.popUpTextStyle}>
                    Merkle awarded a price of $1000 to Brickell who broke it in 1 hour.{"\n"}
                    This marked the end of the trapdoor knapsack cryptosystem.
                    {"\n\n"}
                    A documentation of it can be found in this link:{"\n"}
                    <Text
                        style={styles.PageStyle.links}
                        onPress={() => Linking.openURL('https://link.springer.com/chapter/10.1007/BFb0053429')}>
                        https://link.springer.com/chapter/10.1007/BFb0053429
                    </Text>
                </Text>
            </>
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
                            icon={Info}
                            renderedBlocks={this.adlemanArticleInfoPopUp()}
                            callback={() => { this.setState({ showAdlemanArticleInfoPopUp: false, }) }}
                            visibility={showAdlemanArticleInfoPopUp} />
                        : null
                }
                {
                    showShamirArticleInfoPopUp
                        ? <AlertPopUp
                            icon={Info}
                            renderedBlocks={this.shamirArticleInfoPopUp()}
                            callback={() => { this.setState({ showShamirArticleInfoPopUp: false, }) }}
                            visibility={showShamirArticleInfoPopUp} />
                        : null
                }
                {
                    showPriceInfoPopUp
                        ? <AlertPopUp
                            icon={Info}
                            renderedBlocks={this.priceInfoPopUp()}
                            callback={() => { this.setState({ showPriceInfoPopUp: false, }) }}
                            visibility={showPriceInfoPopUp} />
                        : null
                }
                {
                    showBrickellInfoPopUp
                        ? <AlertPopUp
                            icon={Info}
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
