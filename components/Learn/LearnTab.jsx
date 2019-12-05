import React, { Component } from 'react';
import { withNavigation } from 'react-navigation';
import { 
  View, 
  Button,  
  Text, 
  Image, 
  TouchableOpacity,
  FlatList 
} from 'react-native';

import { Algo } from '../../assets/images'

import Pages  from './Pages'

import { 
  introPageOne,
  introPageTwo,
  introPageThree,
  introPageFour,
  gcdPageOne,
  keyPageOne,

} from './content'

import {
  NEXT_INTRO_PAGE_ACTION,
  PREVIOUS_INTRO_PAGE_ACTION,
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

// begin redux imports
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// importing image assets
// unlocked
import Next from '../../assets/images/Next.png';

// import stylesheet.
import styles from './styles';

// we will use ONE tab that will contain state
class LearnTab extends Component{
    constructor(props){
      super(props);
      // temporary state.
      this.state = {
         tab: "intro",
         page: 1
      }
    }
    getNextTab = () => {
      // to be defined  - hardcoded.
      // from current name, get next possible name.
      // if not, return none.
      const { lockState, actions } = this.props;
      let currentTab = lockState.lessonPageTabAndPages.tabName
      let isFound = false;
      switch(currentTab){
        case "intro":
          isFound = true; break;
        case "gcd":
          isFound = true; break;

        default: break;
      }
      if (!isFound) 
        return null;
      else{
        // return a button. to be designed.
        return (<Button title={"Unlock next tab"} onPress={()=>{
          console.log(currentTab)
          switch(currentTab){
            case "intro":
                return actions.ALGO_UNLOCK_ACTION();
            case "gcd":
                return actions.KEY_UNLOCK_ACTION();
            default: return null;
          }
        }} />
        );
      }
      
      
    }
    getTouchablePreviousAction = () => {
      const { lockState, actions } = this.props;
      let currentTab = lockState.lessonPageTabAndPages.tabName
      switch(currentTab){
        case "intro": return actions.PREVIOUS_INTRO_PAGE_ACTION();
        default: return actions.PREVIOUS_INTRO_PAGE_ACTION();
      }

    }
    getTouchableNextAction = () => {
      const { lockState, actions } = this.props;
      let currentTab = lockState.lessonPageTabAndPages.tabName
      switch(currentTab){
        case "intro": return actions.NEXT_INTRO_PAGE_ACTION();
        default: return actions.NEXT_INTRO_PAGE_ACTION();
      }

    }
    isFinalPage = () => {
      const { lockState } = this.props;
      let currentTab = lockState.lessonPageTabAndPages.tabName
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
              case 2:
                return introPageTwo;
              case 3:
                return introPageThree;
              case 4:
                return introPageFour;
              default: return introPageOne;
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
        default: return null;
      }
    }

    loadIntro = () =>{
      const { tab, page } = this.state;
      let curPage = this.getContent()
      return (
        <Pages
          key={`${tab}-${page}-page`}
          title={curPage.title}
          renderText={curPage.text}
        />
      )
        
    }

    render(){
      return(
        <View>
          {this.loadIntro()}
          {
            this.isFirstPage()?
            null:
            <TouchableOpacity onPress = {()=>{
                this.getTouchablePreviousAction()
            }}>
              <Text>Previous Page</Text>
            </TouchableOpacity>
          }
          {
            this.isFinalPage()?
            this.getNextTab():
            <TouchableOpacity onPress = {()=>{
                this.getTouchableNextAction()
            }}>
              
              <Image style={styles.learnTab.nextArrowSize} source={Next}/>
            </TouchableOpacity>
          }

        </View>
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
  }, dispatch)
});

export default  withNavigation(connect(mapStateToProps, mapDispatchToProps)(LearnTab));;