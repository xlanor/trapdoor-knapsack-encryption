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
} from './content'

import {
  NEXT_INTRO_PAGE_ACTION,
  PREVIOUS_INTRO_PAGE_ACTION,
  RESET_PAGE_ACTION,
  CHANGE_TAB_ACTION,
} from '../../actions/tabPage';

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
      switch(currentTab){
        case "intro":
          return lockState.lessonPageTabAndPages.tabPage >= lockState.lessonPageTabAndPages.maxIntroPages 
                  ? true : false;
        default:
          return true;

      }
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
            null:
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
  }, dispatch)
});

export default  withNavigation(connect(mapStateToProps, mapDispatchToProps)(LearnTab));;