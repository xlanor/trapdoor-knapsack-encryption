import {
  NEXT_INTRO_PAGE,
  PREVIOUS_INTRO_PAGE,
  RESET_PAGE,
  CHANGE_TAB,

} from '../constants';

const MAX_INTRO_PAGES=4;
const MAX_GCD_PAGES=1;
const MAX_KEY_PAGES=1;
// we will have different tab names
// to be determined.
const initialState = {
  tabName: "intro",
  tabPage: 1,
  minTabPage: 0,
  maxPage: MAX_INTRO_PAGES,
  maxIntroPages: MAX_INTRO_PAGES,
  maxGcdPages: MAX_GCD_PAGES,
  maxKeyPages: MAX_KEY_PAGES,
}


const currentTabAndPageReducer = (state=initialState, action) =>{
  switch(action.type){
      case NEXT_INTRO_PAGE:
          return {
            ...state,
            tabPage: (state.tabPage+1 > state.maxPage) ?  state.tabPage: state.tabPage+1,
          }
      case PREVIOUS_INTRO_PAGE:
          return {
            ...state,
            tabPage: (state.tabPage-1 < 0) ? 0 : state.tabPage-1,
          }
      case CHANGE_TAB:
          let newTabName = null;
          let newMaxPages = null;
          switch(action.payload){
              case "intro":
                  newMaxPages = MAX_INTRO_PAGES;
                  newTabName = 'intro';
                  break;
              case "gcd":
                  newMaxPages = MAX_GCD_PAGES;
                  newTabName = 'gcd';
                  break;
              case "key":
                  newMaxPages = MAX_KEY_PAGES;
                  newTabName = 'key';
                  break;
              default: break;

          }
          console.log(action.payload);
          if (newTabName != null && newMaxPages != null){
            return {
              ...state,
              tabName: newTabName,
              maxPage: newMaxPages,

              tabPage: 1,
            }
          } else{
            return {
              ...state,
            }

          }
      case RESET_PAGE:
          return initialState;
      default: return state;
  }
}

export default currentTabAndPageReducer;