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

// import other components.
import AlertPopUp from '../Common/AlertPopUp';
import LearnTab from './LearnTab';


class LearnParent extends Component {
  constructor(props){
    super(props);
    // temporary, we need to replace this with 
    // a state defined in redux so that the state
    // is able to persist throughout app shutdowns.
    this.state = {
      selected: 1,
      displayPopup: false,
      popupMessage: "An error has occured",
    }
    console.log(this.props);
    console.log(this.state);
  }

  updatePopupMessage = (messageString) => {
      this.setState({
          displayPopup: true,
          popupMessage: messageString        
      })
  }
  getAlgoIcon = () => {
    //lockState is the result of our redux state
   const { lockState } = this.props;
   if (lockState.lessonPage.algoLocked === true){
     return (
      <TouchableOpacity onPress = {()=>{

        this.updatePopupMessage("You have not unlocked this portion of the application!");
      }}>
        <Image 
          style={ styles.learnParent.imageSize }
          source= { AlgoLocked }
        />

      </TouchableOpacity>
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
        //lockState is the result of our redux state
      const { lockState } = this.props;
      if (lockState.lessonPage.decryptLocked === true){
        return (
          <TouchableOpacity onPress = {()=>{

            this.updatePopupMessage("You have not unlocked this portion of the application!");
          }}>
            <Image 
              style={ styles.learnParent.imageSize }
              source= { DecryptLocked }
            />

          </TouchableOpacity>
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
      //lockState is the result of our redux state
      const { lockState } = this.props;
      if (lockState.lessonPage.encryptLocked === true){
        return (
          <TouchableOpacity onPress = {()=>{

            this.updatePopupMessage("You have not unlocked this portion of the application!");
          }}>
            <Image 
              style={ styles.learnParent.imageSize }
              source= { EncryptLocked }
            />

          </TouchableOpacity>
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
        //lockState is the result of our redux state
      const { lockState } = this.props;
      if (lockState.lessonPage.knapSackLocked === true){
        return (
          <TouchableOpacity onPress = {()=>{

            this.updatePopupMessage("You have not unlocked this portion of the application!");
          }}>
            <Image 
              style={ styles.learnParent.imageSize }
              source= { KnapSackLocked }
            />

          </TouchableOpacity>
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
      //lockState is the result of our redux state
      const { lockState, actions } = this.props;
      if (lockState.lessonPage.keyLocked === true){
        return (
          <TouchableOpacity onPress = {()=>{

            this.updatePopupMessage("You have not unlocked this portion of the application!");
          }}>
            <Image 
              style={ styles.learnParent.imageSize }
              source= { KeyLocked }
            />

          </TouchableOpacity>
         
            
        );
      }else if (lockState.lessonPage.keySelected === true){
          return (
            // to be replaced when kevin is done with selected icon
            <TouchableOpacity>
              <Image 
                style={ styles.learnParent.imageSize }
                source= { Key }
              />
            </TouchableOpacity>
           
          );
      }else{
        // not selected, but unlocked.
        return (
          <TouchableOpacity onPress = {()=>{
            actions.KEY_SELECT_ACTION();
          }}>
              <Image 
               style={ styles.learnParent.imageSize }
               source= { Key }
              />
          </TouchableOpacity>
         
          );
      } 

  }
  getIntroIcon = () => {
      //lockState is the result of our redux state
      const { lockState, actions } = this.props;
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
            <TouchableOpacity onPress={()=>{
              console.log("Clicked");
              actions.INTRO_SELECT_ACTION();
              }}>
            <Image 
              style={ styles.learnParent.imageSize }
              source= { Intro }
              />
              </TouchableOpacity>
          );
      }else{
        // not selected, but unlocked.
        return (
            <TouchableOpacity onPress={()=>{
              actions.INTRO_SELECT_ACTION();
              }}>
              <Image 
                style={ styles.learnParent.imageSize }
                source= { Intro }
                />
            </TouchableOpacity>
          );
      } 

  }
  getImages = () => {
      return (
        <View style={{alignItems: 'center'}}>
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
    const { displayPopup, popupMessage } = this.state;
     // after 3 seconds, auto dismiss the alert popup
      setTimeout(() => {
        if (displayPopup) this.setState({ displayPopup: false });
      }, 3000);

    return(
      // flex set to 1 so that the white box will take up all the remaining space!
      <View style={styles.learnParent.wrapperViewBackground}>
        {
          this.getImages()
        }
        <View
          style={styles.learnParent.borderLine}
        />
        {/* Callback function to hide the popup */}
        <AlertPopUp
            messageContent={popupMessage}
            callback={() => this.setState({ displayPopup: false })}
            visibility={displayPopup}
        />
        <ScrollView style={styles.learnParent.scrollViewBackground}>
          <LearnTab/>

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