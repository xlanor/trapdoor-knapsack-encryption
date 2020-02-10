import React, { Component } from 'react';

import { View, Text, ScrollView, Linking } from 'react-native';
import { Header } from 'react-native-elements';
import styles from './styles';

class CreditsParent extends Component {
  render() {
    return (
      <ScrollView style={styles.creditsParent.containerStyle}>
        <Header
          containerStyle={styles.creditsParent.headerStyle}
          centerComponent={{
            text: 'CREDITS',
            style: {
              ...styles.creditsParent.headerFont,
            },
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
            payungkead(backpack) from{' '}
            <Text style={styles.creditsParent.links} onPress={() => Linking.openURL('https://www.flaticon.com')}>
              www.flaticon.com
            </Text>
          </Text>
        </View>

        <View style={styles.creditsParent.sectionStyle}>
          <Text style={styles.creditsParent.sectionHeader}>Content</Text>

          <Text
            style={{ ...styles.creditsParent.contentStyle, ...styles.creditsParent.links }}
            onPress={() => Linking.openURL('https://en.wikipedia.org/wiki/Discrete_logarithm')}
          >
            Discrete Logarithm Problem
          </Text>
          <Text
            style={{ ...styles.creditsParent.contentStyle, ...styles.creditsParent.links }}
            onPress={() => Linking.openURL('https://en.wikipedia.org/wiki/Ralph_Merkle')}
          >
            Ralph Merkle’s Biography
          </Text>
          <Text
            style={{ ...styles.creditsParent.contentStyle, ...styles.creditsParent.links }}
            onPress={() => Linking.openURL('https://en.wikipedia.org/wiki/Martin_Hellman')}
          >
            Martin Hellman’s Biography
          </Text>
          <Text
            style={{ ...styles.creditsParent.contentStyle, ...styles.creditsParent.links }}
            onPress={() => Linking.openURL('https://link.springer.com/chapter/10.1007/978-1-4757-0602-4_29')}
          >
            Leonard Adleman breaking the public-key cryptosystem
          </Text>
          <Text
            style={{ ...styles.creditsParent.contentStyle, ...styles.creditsParent.links }}
            onPress={() => Linking.openURL('https://ieeexplore.ieee.org/document/4568386')}
          >
            Polynomial time algorithm for breaking the basic Merkle-Hellman cryptosystem
          </Text>
          <Text
            style={{ ...styles.creditsParent.contentStyle, ...styles.creditsParent.links }}
            onPress={() => Linking.openURL('https://en.wikipedia.org/wiki/Leonard_Adleman')}
          >
            Leonard Adleman’s Biography
          </Text>
          <Text
            style={{ ...styles.creditsParent.contentStyle, ...styles.creditsParent.links }}
            onPress={() => Linking.openURL('https://en.wikipedia.org/wiki/Adi_Shamir')}
          >
            Adi Shamir’s Biography
          </Text>
          <Text
            style={{ ...styles.creditsParent.contentStyle, ...styles.creditsParent.links }}
            onPress={() => Linking.openURL('https://sites.math.rutgers.edu/~greenfie/gs2004/euclid.html')}
          >
            Euclidean Algorithm
          </Text>
        </View>
      </ScrollView>
    );
  }
}
export default CreditsParent;
