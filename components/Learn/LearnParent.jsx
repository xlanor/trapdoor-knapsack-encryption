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
    // temporary, we need to replace this with 
    // a state defined in redux so that the state
    // is able to persist throughout app shutdowns.
    this.state = {
      showText: "hello, world!",
      selected: 1,
    }
  }

  updatedText = () => {
    const { selected } = this.state;
    switch(selected){
      case 1: 
            this.setState({showText: "book"});
            break;
      case 2:
          this.setState({showText: "Algo"});
          break;
      case 3:
          this.setState({showText: "Key"});
          break;
      case 4:
          this.setState({showText: "Lock"});
          break;
      case 5:
          this.setState({showText: "Unlock"});
          break;
      default:
          this.setState({showText: "Hello, World!"});
          break;
    }
  }

  getImages = () => {

  }

  render(){
    const { showText } = this.state;
    return(
      // flex set to 1 so that the white box will take up all the remaining space!
      <View style={styles.learnParent.wrapperViewBackground}>
        <View>
          <Text>Hello, world!</Text>
        </View>
        <View
          style={styles.learnParent.borderLine}
        />
        <ScrollView style={styles.learnParent.scrollViewBackground}>
          <Text>{showText}</Text>

        </ScrollView>
      </View>
    );
  }

};

export default withNavigation(LearnParent);