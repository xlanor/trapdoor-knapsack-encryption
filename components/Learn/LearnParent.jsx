import React, { Component } from 'react';
import { withNavigation } from 'react-navigation';

import { 
    View, 
    Button,  
    Text, 
    Image, 
    TouchableOpacity 
} from 'react-native';


// importing image assets
// unlocked
import Algo from '../../assets/images/Algo.png';
import Decrypt from '../../assets/images/Decrypt.png';
import Encrypt from '../../assets/images/Encrypt.png';
import KnapSack from '../../assets/images/KnapSack.png';

import AlgoLocked from '../../assets/images/AlgoLocked.png';
import DecryptLocked from '../../assets/images/DecryptLocked.png';
import EncryptLocked from '../../assets/images/EncryptLocked.png';
import KnapSackLocked from '../../assets/images/KnapSackLocked.png';
import { ScrollView } from 'react-native-gesture-handler';
import styles from './styles';


class LearnParent extends Component {
  constructor(props){
    super(props);

  }
  render(){
    return(
      <View>
        <View>
          <Text>Hello, world!</Text>
        </View>
        <View
          style={styles.learnParent.borderLine}
        />
        <ScrollView>
          <Text>Hello, world!</Text>

        </ScrollView>
      </View>
    );
  }

};

export default withNavigation(LearnParent);