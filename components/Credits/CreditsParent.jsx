/* eslint-disable react/no-array-index-key */
import React, { Component } from 'react';

import { Text, ScrollView, Linking } from 'react-native';
import { Header, ListItem, Card } from 'react-native-elements';
import styles from './styles';

const contentList = [
  {
    id: 1,
    url: 'https://en.wikipedia.org/wiki/Discrete_logarithm',
    name: 'Discrete Logarithm Problem',
  },
  {
    id: 2,
    url: 'https://en.wikipedia.org/wiki/Ralph_Merkle',
    name: "Ralph Merkle's Biography",
  },
  {
    id: 3,
    url: 'https://en.wikipedia.org/wiki/Martin_Hellman',
    name: "Martin Hellman's Biography",
  },
  {
    id: 4,
    url: 'https://link.springer.com/chapter/10.1007/978-1-4757-0602-4_29',
    name: 'Breaking of Public-Key Cryptosystem',
  },
  {
    id: 5,
    url: 'https://ieeexplore.ieee.org/document/4568386',
    name: 'Polynomial Time breaking of the basic Merkle-Hellman Cryptosystem',
  },
  {
    id: 6,
    url: 'https://en.wikipedia.org/wiki/Leonard_Adleman',
    name: "Leonard Adleman's biography",
  },
  {
    id: 7,
    url: 'https://en.wikipedia.org/wiki/Adi_Shamir',
    name: "Adi Shamir's biography",
  },
  {
    id: 8,
    url: 'https://sites.math.rutgers.edu/~greenfie/gs2004/euclid.html',
    name: "Euclidean's Algorithm",
  },
];

const assetsList = [
  {
    id: 1,
    url: 'https://www.freepik.com/',
    name: 'Freepik',
  },
  {
    id: 2,
    url: 'https://www.flaticon.com/authors/vectors-market',
    name: 'Vectors Market',
  },
  {
    id: 3,
    url: 'https://smashicons.com/',
    name: 'Smash Icons',
  },
  {
    id: 4,
    url: 'https://www.flaticon.com/authors/mynamepong',
    name: 'Mynamepong',
  },
  {
    id: 5,
    url: 'https://pixelbuddha.net/',
    name: 'Pixelbuddha',
  },
  {
    id: 6,
    url: 'https://www.flaticon.com/authors/phatplus',
    name: 'PhatPlus',
  },
  {
    id: 7,
    url: 'https://www.flaticon.com/authors/payungkead',
    name: 'Payungkead',
  },
  {
    id: 8,
    url: 'https://material.io/resources/icons/',
    name: 'Material Icons',
  },
  {
    id: 9,
    url: 'https://materialdesignicons.com/',
    name: 'Material Community Icons',
  },
  {
    id: 10,
    url: 'https://fontawesome.com/icons?from=io',
    name: 'FontAwesome',
  },
  {
    id: 11,
    url: 'https://octicons.github.com/',
    name: 'OctIcons',
  },
  {
    id: 12,
    url: 'https://evil-icons.io/',
    name: 'EvilIcons',
  },
  {
    id: 13,
    url: 'https://www.linkedin.com/in/heatherlee91/',
    name: 'Additional Icons customised by Heather Lee',
  },
  {
    id: 14,
    url: 'https://www.flaticon.com/authors/kiranshastry',
    name: 'Kiranshastry',
  },
];

const softwareList = [
  {
    id: 1,
    url: 'https://facebook.github.io/react-native/',
    name: 'React Native',
  },
  {
    id: 2,
    url: 'https://www.adobe.com/products/photoshopfamily.html',
    name: 'Adobe Photoshop',
  },
  {
    id: 3,
    url: 'https://react-native-elements.github.io/react-native-elements/',
    name: 'React Native Elements',
  },
  {
    id: 4,
    url: 'https://expo.io/',
    name: 'Expo',
  },
  {
    id: 5,
    url: 'https://jenkins.io/',
    name: 'Jenkins',
  },
  {
    id: 6,
    url: 'https://www.docker.com/',
    name: 'Docker',
  },
  {
    id: 7,
    url: 'https://redux.js.org/',
    name: 'Redux',
  },
  {
    id: 8,
    url: 'https://github.com/rt2zz/redux-persist',
    name: 'Redux Persist',
  },
  {
    id: 9,
    url: 'https://github.com/reduxjs/redux-thunk',
    name: 'Redux Thunk',
  },
  {
    id: 10,
    url: 'https://flask-restful.readthedocs.io/en/latest/',
    name: 'Flask Restful API',
  },
  {
    id: 11,
    url: 'https://www.mysql.com/',
    name: 'MySQL',
  },
  {
    id: 12,
    url: 'https://www.phpmyadmin.net/',
    name: 'phpMyAdmin',
  },
];

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
        <Card
          containerStyle={{
            borderRadius: 5,
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 6,
            },
            shadowOpacity: 0.39,
            shadowRadius: 8.3,

            elevation: 13,
          }}
          title="Softwares/Libraries Used"
        >
          {softwareList.map((sw, i) => {
            return (
              <ListItem
                key={`sw-${i}`}
                title={
                  <Text>
                    <Text>{'\u204D'} </Text>
                    <Text style={styles.creditsParent.links} onPress={() => Linking.openURL(sw.url)}>
                      {sw.name}
                    </Text>
                  </Text>
                }
              />
            );
          })}
        </Card>
        <Card
          containerStyle={{
            borderRadius: 5,
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 6,
            },
            shadowOpacity: 0.39,
            shadowRadius: 8.3,

            elevation: 13,
          }}
          title="Assets"
        >
          {assetsList.map((sw, i) => {
            return (
              <ListItem
                key={`as-${i}`}
                title={
                  <Text>
                    <Text>{'\u204D'} </Text>
                    <Text style={styles.creditsParent.links} onPress={() => Linking.openURL(sw.url)}>
                      {sw.name}
                    </Text>
                  </Text>
                }
              />
            );
          })}
        </Card>
        <Card
          containerStyle={{
            borderRadius: 5,
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 6,
            },
            shadowOpacity: 0.39,
            shadowRadius: 8.3,

            elevation: 13,
          }}
          title="Content"
        >
          {contentList.map((sw, i) => {
            return (
              <ListItem
                key={`cl-${i}`}
                title={
                  <Text>
                    <Text>{'\u204D'} </Text>
                    <Text style={styles.creditsParent.links} onPress={() => Linking.openURL(sw.url)}>
                      {sw.name}
                    </Text>
                  </Text>
                }
              />
            );
          })}
        </Card>
      </ScrollView>
    );
  }
}
export default CreditsParent;
