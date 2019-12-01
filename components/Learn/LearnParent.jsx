// begin react/rn imports
import React, { Component } from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import { withNavigation } from 'react-navigation';
import { 
    View, 
    Button,  
    Text, 
    Image, 
    TouchableOpacity,
    FlatList 
} from 'react-native';

// begin redux imports
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// importing redux defined actions
import { 
  INTRO_SELECT_ACTION,
  INTRO_LOCK_ACTION,
  INTRO_UNLOCK_ACTION,
  ALGO_SELECT_ACTION,
  ALGO_LOCK_ACTION,
  ALGO_UNLOCK_ACTION,
  KEY_SELECT_ACTION,
  KEY_LOCK_ACTION,
  KEY_UNLOCK_ACTION,
  DECRYPT_SELECT_ACTION,
  DECRYPT_LOCK_ACTION,
  DECRYPT_UNLOCK_ACTION,
  ENCRYPT_SELECT_ACTION,
  ENCRYPT_LOCK_ACTION,
  ENCRYPT_UNLOCK_ACTION,
  KNAPSACK_SELECT_ACTION,
  KNAPSACK_LOCK_ACTION,
  KNAPSACK_UNLOCK_ACTION,
  UNLOCK_ALL_ACTION,
  RESET_ALL_ACTION,
 }  from '../../actions/learnPageLock';

// importing image assets
// unlocked
import Algo from '../../assets/images/Algo.png';
import Decrypt from '../../assets/images/Decrypt.png';
import Encrypt from '../../assets/images/Encrypt.png';
import KnapSack from '../../assets/images/KnapSack.png';
import Key from '../../assets/images/Key.png';
import Intro from '../../assets/images/Intro.png';

// locked 
import AlgoLocked from '../../assets/images/AlgoLocked.png';
import DecryptLocked from '../../assets/images/DecryptLocked.png';
import EncryptLocked from '../../assets/images/EncryptLocked.png';
import KnapSackLocked from '../../assets/images/KnapSackLocked.png';
import KeyLocked from '../../assets/images/KeyLocked.png';

// import stylesheet.
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
    console.log(this.props);
    console.log(this.state);
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
  getAlgoIcon = () => {
    // lessonPage is the result of our redux state
   const { lockState } = this.props;
   if (lockState.lessonPage.algoLocked === true){
     return (
        <Image 
          style={ styles.learnParent.imageSize }
          source= { AlgoLocked }
          />
     );
   }else if (lockState.lessonPage.algoSelected === true){
      return (
        // to be replaced when kevin is done with selected icon
        <Image 
          style={ styles.learnParent.imageSize }
          source= { Algo }
          />
      );
   }else{
     // not selected, but unlocked.
     return (
        <Image 
          style={ styles.learnParent.imageSize }
          source= { Algo }
          />
      );
   }

  }
  getDecryptIcon = () => {
        // lessonPage is the result of our redux state
      const { lockState } = this.props;
      if (lockState.lessonPage.decryptLocked === true){
        return (
            <Image 
              style={ styles.learnParent.imageSize }
              source= { DecryptLocked }
              />
        );
      }else if (lockState.lessonPage.decryptSelected === true){
          return (
            // to be replaced when kevin is done with selected icon
            <Image 
              style={ styles.learnParent.imageSize }
              source= { Decrypt }
              />
          );
      }else{
        // not selected, but unlocked.
        return (
            <Image 
              style={ styles.learnParent.imageSize }
              source= { Decrypt }
              />
          );
      }

  }
  getEncryptIcon = () => {
      // lessonPage is the result of our redux state
      const { lockState } = this.props;
      if (lockState.lessonPage.encryptLocked === true){
        return (
            <Image 
              style={ styles.learnParent.imageSize }
              source= { EncryptLocked }
              />
        );
      }else if (lockState.lessonPage.encryptSelected === true){
          return (
            // to be replaced when kevin is done with selected icon
            <Image 
              style={ styles.learnParent.imageSize }
              source= { Encrypt }
              />
          );
      }else{
        // not selected, but unlocked.
        return (
            <Image 
              style={ styles.learnParent.imageSize }
              source= { Encrypt }
              />
          );
      }

  }
  getKnapsackIcon = () => {
        // lessonPage is the result of our redux state
      const { lockState } = this.props;
      if (lockState.lessonPage.knapSackLocked === true){
        return (
            <Image 
              style={ styles.learnParent.imageSize }
              source= { KnapSackLocked }
              />
        );
      }else if (lockState.lessonPage.knapSackSelected === true){
          return (
            // to be replaced when kevin is done with selected icon
            <Image 
              style={ styles.learnParent.imageSize }
              source= { KnapSack }
              />
          );
      }else{
        // not selected, but unlocked.
        return (
            <Image 
              style={ styles.learnParent.imageSize }
              source= { KnapSack }
              />
          );
      } 

  }
  getKeyIcon = () => {
      // lessonPage is the result of our redux state
      const { lockState } = this.props;
      if (lockState.lessonPage.keyLocked === true){
        return (
            <Image 
              style={ styles.learnParent.imageSize }
              source= { KeyLocked }
              />
        );
      }else if (lockState.lessonPage.keySelected === true){
          return (
            // to be replaced when kevin is done with selected icon
            <Image 
              style={ styles.learnParent.imageSize }
              source= { Key }
              />
          );
      }else{
        // not selected, but unlocked.
        return (
            <Image 
              style={ styles.learnParent.imageSize }
              source= { Key }
              />
          );
      } 

  }
  getIntroIcon = () => {
      // lessonPage is the result of our redux state
      const { lockState } = this.props;
      if (lockState.lessonPage.introLocked === true){
        return (
            <Image 
              style={ styles.learnParent.imageSize }
              source= { Intro }
              />
        );
      }else if (lockState.lessonPage.introSelected === true){
          return (
            // to be replaced when kevin is done with selected icon
            <Image 
              style={ styles.learnParent.imageSize }
              source= { Intro }
              />
          );
      }else{
        // not selected, but unlocked.
        return (
            <Image 
              style={ styles.learnParent.imageSize }
              source= { Intro }
              />
          );
      } 

  }
  getImages = () => {
      return (
        <View >
          {/* Must have the nested view to allow flexdirection to be preserved! */}
          <View style={{ flexDirection: 'row'}}>
            {
              this.getIntroIcon()
            }
            {
              this.getKeyIcon()
            }
            {
              this.getAlgoIcon()
            }
            {
              this.getEncryptIcon()
            }
            {
              this.getDecryptIcon()
            }
            {
              this.getKnapsackIcon()
            }

          </View>
        </View>
       
      );

  }

  render(){
    const { showText } = this.state;
    return(
      // flex set to 1 so that the white box will take up all the remaining space!
      <View style={styles.learnParent.wrapperViewBackground}>
        {
          this.getImages()
        }
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

const mapStateToProps = state => ({
  lockState: state
})

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({
    INTRO_SELECT_ACTION,
    INTRO_LOCK_ACTION,
    INTRO_UNLOCK_ACTION,
    ALGO_SELECT_ACTION,
    ALGO_LOCK_ACTION,
    ALGO_UNLOCK_ACTION,
    KEY_SELECT_ACTION,
    KEY_LOCK_ACTION,
    KEY_UNLOCK_ACTION,
    DECRYPT_SELECT_ACTION,
    DECRYPT_LOCK_ACTION,
    DECRYPT_UNLOCK_ACTION,
    ENCRYPT_SELECT_ACTION,
    ENCRYPT_LOCK_ACTION,
    ENCRYPT_UNLOCK_ACTION,
    KNAPSACK_SELECT_ACTION,
    KNAPSACK_LOCK_ACTION,
    KNAPSACK_UNLOCK_ACTION,
    UNLOCK_ALL_ACTION,
    RESET_ALL_ACTION,
  }, dispatch)
});

export default withNavigation(connect(mapStateToProps, mapDispatchToProps)(LearnParent));