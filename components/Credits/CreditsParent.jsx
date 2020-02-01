import React, { Component } from 'react';

import styles from './styles'
import {
    View,
    Text,
    ScrollView,
    Dimensions,
    Linking
} from 'react-native';
import {
    Header,
    Button as RneButton,
    Icon
} from 'react-native-elements';
import {
    Table,
    TableWrapper,
    Rows,
    Row,
    Col
} from 'react-native-table-component';

class CreditsParent extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <ScrollView style={styles.creditsParent.containerStyle}>
                <Header
                    containerStyle={styles.creditsParent.headerStyle}
                    centerComponent={{
                        text: 'CREDITS', style: {
                            ...styles.creditsParent.headerFont
                        }
                    }}
                />
                <View style={styles.creditsParent.sectionStyle}>
                    <Text style={styles.creditsParent.sectionHeader}>Softwares for app development</Text>

                    <Text style={styles.creditsParent.contentStyle}>React Native</Text>
                    <Text style={styles.creditsParent.contentStyle}>Photoshop</Text>
                </View>

                <View style={styles.creditsParent.sectionStyle}>
                    <Text style={styles.creditsParent.sectionHeader}>Assets</Text>

                    <Text style={styles.creditsParent.contentStyle}>freepik(user,growth,trademark)</Text>
                    <Text style={styles.creditsParent.contentStyle}>vectors market(light bulb)</Text>
                    <Text style={styles.creditsParent.contentStyle}>smash icons(success)</Text>
                    <Text style={styles.creditsParent.contentStyle}>mynamepong(search)</Text>
                    <Text style={styles.creditsParent.contentStyle}>pixelbuddha(key)</Text>
                    <Text style={styles.creditsParent.contentStyle}>phatplus(lock)</Text>
                    <Text style={styles.creditsParent.contentStyle}>
                        payungkead(backpack) from{" "}
                        <Text
                            style={styles.creditsParent.links}
                            onPress={() => Linking.openURL('https://www.flaticon.com')}>
                            www.flaticon.com
                        </Text>
                    </Text>
                </View>

                <View style={styles.creditsParent.sectionStyle}>
                    <Text style={styles.creditsParent.sectionHeader}>Content</Text>

                    <Text style={styles.creditsParent.contentStyle}>Discrete Logarithm Problem:{" "}
                        <Text
                            style={{ ...styles.creditsParent.contentStyle, ...styles.creditsParent.links }}
                            onPress={() => Linking.openURL('https://en.wikipedia.org/wiki/Discrete_logarithm')}>
                            link
                        </Text>
                    </Text>
                    <Text style={styles.creditsParent.contentStyle}>Ralph Merkle’s Biography:{" "}
                        <Text
                            style={{ ...styles.creditsParent.contentStyle, ...styles.creditsParent.links }}
                            onPress={() => Linking.openURL('https://en.wikipedia.org/wiki/Ralph_Merkle')}>
                            link
                        </Text>
                    </Text>
                    <Text style={styles.creditsParent.contentStyle}>Martin Hellman’s Biography:{" "}
                        <Text
                            style={{ ...styles.creditsParent.contentStyle, ...styles.creditsParent.links }}
                            onPress={() => Linking.openURL('https://en.wikipedia.org/wiki/Martin_Hellman')}>
                            link
                        </Text>
                    </Text>
                    <Text style={styles.creditsParent.contentStyle}>Leonard Adleman breaking the public-key cryptosystem:{" "}
                        <Text
                            style={{ ...styles.creditsParent.contentStyle, ...styles.creditsParent.links }}
                            onPress={() => Linking.openURL('https://link.springer.com/chapter/10.1007/978-1-4757-0602-4_29')}>
                            link
                        </Text>
                    </Text>
                    <Text style={styles.creditsParent.contentStyle}>Polynomial time algorithm for breaking the basic Merkle-Hellman cryptosystem:{" "}
                        <Text
                            style={{ ...styles.creditsParent.contentStyle, ...styles.creditsParent.links }}
                            onPress={() => Linking.openURL('https://ieeexplore.ieee.org/document/4568386')}>
                            link
                        </Text>
                    </Text>
                    <Text style={styles.creditsParent.contentStyle}>Leonard Adleman’s Biography:{" "}
                        <Text
                            style={{ ...styles.creditsParent.contentStyle, ...styles.creditsParent.links }}
                            onPress={() => Linking.openURL('https://en.wikipedia.org/wiki/Leonard_Adleman')}>
                            link
                        </Text>
                    </Text>
                    <Text style={styles.creditsParent.contentStyle}>Adi Shamir’s Biography:{" "}
                        <Text
                            style={{ ...styles.creditsParent.contentStyle, ...styles.creditsParent.links }}
                            onPress={() => Linking.openURL('https://en.wikipedia.org/wiki/Adi_Shamir')}>
                            link
                        </Text>
                    </Text>
                    <Text style={styles.creditsParent.contentStyle}>Euclidean Algorithm:{" "}
                        <Text
                            style={{ ...styles.creditsParent.contentStyle, ...styles.creditsParent.links }}
                            onPress={() => Linking.openURL('https://sites.math.rutgers.edu/~greenfie/gs2004/euclid.html')}>
                            link
                        </Text>
                    </Text>
                </View>
            </ScrollView>
        )
    }
}
export default CreditsParent;
