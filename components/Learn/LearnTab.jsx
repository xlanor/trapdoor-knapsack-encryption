import React, { Component } from 'react';
import { withNavigation, SafeAreaView } from 'react-navigation';
import { 
  View, 
  KeyboardAvoidingView,
  Button,
  FlatList,  
  Text, 
  Image, 
  TouchableOpacity,
  Dimensions,
  Modal
} from 'react-native';
import { ScrollView, TextInput } from 'react-native-gesture-handler';

import { Algo } from '../../assets/images'

import { 
  introPageOne,
  gcdPageOne,
  keyPageOne,
  EncryptTutorial,
  DecryptTutorial,
  SimulatorPage,
} from './content'

import {
  NEXT_INTRO_PAGE_ACTION,
  PREVIOUS_INTRO_PAGE_ACTION,
  NEXT_GCD_PAGE_ACTION,
  PREVIOUS_GCD_PAGE_ACTION,
  NEXT_KEY_PAGE_ACTION,
  PREVIOUS_KEY_PAGE_ACTION,
  NEXT_ENCRYPT_PAGE_ACTION,
  NEXT_DECRYPT_PAGE_ACTION,
  PREVIOUS_DECRYPT_PAGE_ACTION,
  PREVIOUS_ENCRYPT_PAGE_ACTION,
  RESET_PAGE_ACTION,
  CHANGE_TAB_ACTION,
} from '../../actions/tabPage';

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

 import {
  UPDATE_ENCRYPTION_PADDING_ACTION,
  UPDATE_ENCRYPTION_BLOCKS_ACTION,
  UPDATE_ENCRYPTED_STRING_ACTION,
 } from '../../actions/updateEncryption';

 import {
  UPDATE_INVERSE_ACTION,
  UPDATE_PUBLIC_KEY_STRING_ACTION,
  UPDATE_PUBLIC_KEY_ARRAY_ACTION,
 } from '../../actions/updateParameters';

 import KeyPage from './content/key/page1';
// begin redux imports
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// importing image assets
// unlocked
import Next from '../../assets/images/Next.png';
import Unlock from '../../assets/images/unlock.png';

// import stylesheet.
import styles from './styles';


import BackArrow from  '../../assets/images/backArrow.png';
import FrontArrow from  '../../assets/images/FrontArrow.png';

// we will use ONE tab that will contain state
class LearnTab extends Component{
    constructor(props){
      super(props);
     
    }
    getNextTab = () => {
      // to be defined  - hardcoded.
      // from current name, get next possible name.
      // if not, return none.
      const { lockState, actions } = this.props;
      let currentTab = lockState.lessonPageTabAndPages.tabName
      let isUnlockable = lockState.lessonPageTabAndPages.allowNextPage
      let isFound = false;
      switch(currentTab){
        case "intro":
          isFound = true; break;
        case "gcd":
          isFound = true; break;
        case "key":
          isFound = true; break
        case "encrypt":
          isFound = true; break;
        default: break;
      }

      if (!isFound) 
        return null;
      else{
        // return a button. to be designed.
        return (
        <TouchableOpacity onPress={()=>{
          switch(currentTab){
            case "intro":
                return actions.ALGO_UNLOCK_ACTION();
            case "gcd":
                return actions.KEY_UNLOCK_ACTION();
            case "key":
                return actions.ENCRYPT_UNLOCK_ACTION();
            case "encrypt":
                return actions.DECRYPT_UNLOCK_ACTION();
            default: return null;
          }
        }} >
          <Image source={Unlock} style={{height: 40, width: 40}}/>
        </TouchableOpacity>
        );
      }
      
      
    }
    canNavigate = () => {
      const { lockState } = this.props;
      let isUnlockable = lockState.lessonPageTabAndPages.allowNextPage
      console.log("Next page is "+isUnlockable)
      console.log("Inverse is "+lockState.updateParameters.inverse)
      return isUnlockable ? true: false; // redundant true/false but to be a little more explicit
    }

    getTouchablePreviousAction = () => {
      const { lockState, actions } = this.props;
      let currentTab = lockState.lessonPageTabAndPages.tabName
      let currentPage = lockState.lessonPageTabAndPages.tabPage
      switch(currentTab){
        case "intro": return actions.PREVIOUS_INTRO_PAGE_ACTION();
        case "gcd": return actions.PREVIOUS_GCD_PAGE_ACTION();
        case "key": 
          if(currentPage == 4){
            actions.UPDATE_INVERSE_ACTION(0);
            return actions.PREVIOUS_KEY_PAGE_ACTION()
          
          }else if (currentPage == 5){
            actions.UPDATE_PUBLIC_KEY_ARRAY_ACTION([])
            actions.UPDATE_PUBLIC_KEY_STRING_ACTION("")
            return actions.PREVIOUS_KEY_PAGE_ACTION()

          }else{

            return actions.PREVIOUS_KEY_PAGE_ACTION();
          }
        case "encrypt":
          if(currentPage == 2){
            // reset
            actions.UPDATE_ENCRYPTION_PADDING_ACTION(0);
            actions.UPDATE_ENCRYPTION_BLOCKS_ACTION([]);
            actions.UPDATE_ENCRYPTED_STRING_ACTION([]);
            return actions.PREVIOUS_ENCRYPT_PAGE_ACTION();
          }else{
            return actions.PREVIOUS_ENCRYPT_PAGE_ACTION();
          }
        case "decrypt":
          return actions.PREVIOUS_DECRYPT_PAGE_ACTION();
        default: return actions.PREVIOUS_INTRO_PAGE_ACTION();
      }

    }
    getTouchableNextAction = () => {
      const { lockState, actions } = this.props;
      let currentTab = lockState.lessonPageTabAndPages.tabName
      let currentPage = lockState.lessonPageTabAndPages.tabPage
      switch(currentTab){
        case "intro": return actions.NEXT_INTRO_PAGE_ACTION();
        case "gcd": return actions.NEXT_GCD_PAGE_ACTION();
        case "key": return actions.NEXT_KEY_PAGE_ACTION();
        case "encrypt": 
            if(currentPage == 1){
              // reset
              actions.UPDATE_ENCRYPTION_PADDING_ACTION(0);
              actions.UPDATE_ENCRYPTION_BLOCKS_ACTION([]);
              actions.UPDATE_ENCRYPTED_STRING_ACTION([]);
              return actions.NEXT_ENCRYPT_PAGE_ACTION();
            }
            return actions.NEXT_ENCRYPT_PAGE_ACTION();
        case "decrypt": return actions.NEXT_DECRYPT_PAGE_ACTION();
        default: return actions.NEXT_INTRO_PAGE_ACTION();
      }

    }
    isFinalPage = () => {
      const { lockState } = this.props;
      let currentTab = lockState.lessonPageTabAndPages.tabName
      console.log(`CUrrent tab ${currentTab} Max page ${lockState.lessonPageTabAndPages.maxPage} CurrentPage: ${lockState.lessonPageTabAndPages.tabPage}`)
       return lockState.lessonPageTabAndPages.tabPage >= lockState.lessonPageTabAndPages.maxPage 
                  ? true : false;
    }

    isFirstPage = () => {
      const { lockState } = this.props;
      return lockState.lessonPageTabAndPages.tabPage <= 1 ? true: false;
    }

    getContent = () => {
      // loads the static pages...
      const { lockState } = this.props;
      let currentTab = lockState.lessonPageTabAndPages.tabName
      let currentPage = lockState.lessonPageTabAndPages.tabPage
      console.log("Getting content for "+currentTab+" : "+currentPage)
      switch(currentTab){
        case "intro":
            switch(currentPage){
              case 1:
                return introPageOne;
              default:
                return introPageOne;
            }
        case "gcd":
            switch(currentPage){
              case 1:
                return gcdPageOne;
              default:
                return gcdPageOne;
            }
        case "key":
            switch(currentPage){
              case 1:
                return keyPageOne;
              default: 
                return keyPageOne;
            }
        case "encrypt":
          switch(currentPage){
            case 1:
              return EncryptTutorial;
            default:
              return EncryptTutorial;
          }
        case "decrypt":
            switch(currentPage){
              case 1:
                return DecryptTutorial;
              default: 
                return DecryptTutorial;
            }
        case "simulator":
            switch(currentPage){
              case 1:
                return SimulatorPage;
              default:
                return SimulatorPage;
            }
        default: return null;
      }
    }

    loadPage = () =>{
      const { lockState } = this.props;
      let currentTab = lockState.lessonPageTabAndPages.tabName
      let currentPage = lockState.lessonPageTabAndPages.tabPage
      let CurPage = this.getContent()
      console.log("Current page:" + currentPage)
      console.log(CurPage);
      // for dynamic pages, we render component, while for static
      // we render a page.
      return <CurPage />
    }

    render(){
      return(
        <>
          <View style={{flex: 5.5}}>
            
            {
              
              this.loadPage()
            }
            </View>
            <View style={{flex:0.5}}>
               <View style={{...styles.learnTab.bottom}}>
                  <View style={{flex: 1}}>
                    {
                      this.isFirstPage()?
                      null:
                      <TouchableOpacity onPress = {()=>{
                          this.getTouchablePreviousAction()
                      }}>
                      <Image style={styles.learnTab.nextArrowSize} source={ BackArrow } resizeMode="contain" />
                      </TouchableOpacity>
                    }
                    </View>
                    <View style={{flex: 4}}/>
                    <View style={{flex: 1}}>
                      <View style={{marginLeft:'auto'}}>
                          {
                          this.isFinalPage()?
                          this.getNextTab():
                            this.canNavigate()?
                              <TouchableOpacity onPress = {()=>{
                                  this.getTouchableNextAction()
                              }}>
                                
                                <Image style={styles.learnTab.nextArrowSize} source={ FrontArrow}  resizeMode="contain" />
                              </TouchableOpacity>
                              : null
                        }
                      </View>
                    </View>
                  </View>
              
            </View>
        
        </>
        
      );
    }
};


const mapStateToProps = state => ({
  lockState: state
})

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({
    NEXT_INTRO_PAGE_ACTION,
    PREVIOUS_INTRO_PAGE_ACTION,
    NEXT_GCD_PAGE_ACTION,
    PREVIOUS_GCD_PAGE_ACTION,
    NEXT_ENCRYPT_PAGE_ACTION,
    NEXT_DECRYPT_PAGE_ACTION,
    PREVIOUS_DECRYPT_PAGE_ACTION,
    PREVIOUS_ENCRYPT_PAGE_ACTION,
    RESET_PAGE_ACTION,
    CHANGE_TAB_ACTION,
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
    NEXT_KEY_PAGE_ACTION,
    PREVIOUS_KEY_PAGE_ACTION,
    UPDATE_INVERSE_ACTION,
    UPDATE_PUBLIC_KEY_STRING_ACTION,
    UPDATE_PUBLIC_KEY_ARRAY_ACTION,
    UPDATE_ENCRYPTION_PADDING_ACTION,
    UPDATE_ENCRYPTION_BLOCKS_ACTION,
    UPDATE_ENCRYPTED_STRING_ACTION,
  }, dispatch)
});

export default  withNavigation(connect(mapStateToProps, mapDispatchToProps)(LearnTab));;