import {
  NEXT_INTRO_PAGE,
  PREVIOUS_INTRO_PAGE,
  NEXT_KEY_PAGE,
  PREVIOUS_KEY_PAGE,
  RESET_PAGE,
  CHANGE_TAB,
  SET_NEXT_TAB,
  ALLOW_NEXT_PAGE,
} from '../constants';

const MAX_INTRO_PAGES=4;
const MAX_GCD_PAGES=1;
const MAX_KEY_PAGES=6;
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
  allowNextPage:true, // set to true by default. we turn it off as and when we need to.
  showErrorMessage: false, // set to fals eby default, we dont need to show an error
  errorMessage: "", // empty by default.
}


const currentTabAndPageReducer = (state=initialState, action) =>{
  switch(action.type){
      case NEXT_INTRO_PAGE:
          return {
            ...state,
            tabPage: (state.tabPage+1 > state.maxPage) ?  state.tabPage: state.tabPage+1,
            allowNextPage: true,
            showErrorMessage: false,
            errorMessage: "",
          }
      case PREVIOUS_INTRO_PAGE:
          return {
            ...state,
            tabPage: (state.tabPage-1 < 0) ? 0 : state.tabPage-1,
            allowNextPage: true, // intro does not have any requirements that we cant navigate to the next tab.
            showErrorMessage: false,
            errorMessage: "",
          }
          
      case NEXT_KEY_PAGE:
          // action to be passed in as a state.
          if(state.allowNextPage === true){
            console.log("Reset to false")
            return {
              ...state,
              tabPage: (state.tabPage+1 > state.maxPage) ?  state.tabPage: state.tabPage+1,
              allowNextPage: false, // so that you cant turn to the next page on the new page.
            }
          }else{
            return {
               ...state,
            }
          }
       
      case PREVIOUS_KEY_PAGE:
        if(state.tabName === "key"){
          console.log("Resetting key")
          if(state.tabPage === 5){
            console.log("Resetting inverse to 0")
            return {
              // reset the conditional checking that we prevented in our
              // infinite loop 
              ...state,
              inverse: 0,
              allowNextPage: true, // so that you cant turn to the next page on the new page.
              tabPage: (state.tabPage-1 < 0) ? 0 : state.tabPage-1,
            }
          }
          else if (state.tabPage === 6){
              return {
                  ...state,
                  publicKeyString: "",
                  publicKeyArr: [],
                  allowNextPage: true,
                  tabPage: (state.tabPage-1 < 0) ? 0 : state.tabPage-1,
              }
          }else{
            return {
              ...state,
              tabPage: (state.tabPage-1 < 0) ? 0 : state.tabPage-1,
            }
          }
        }else{
          return {
            ...state,
            tabPage: (state.tabPage-1 < 0) ? 0 : state.tabPage-1,
          }
        }

      case ALLOW_NEXT_PAGE:
          return {
            ...state,
            allowNextPage: true,
          }
1
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
          if (newTabName != null && newMaxPages != null){
            if (newTabName == "key"){
                return {
                  ...state,
                  tabName: newTabName,
                  maxPage: newMaxPages,
                  allowNextPage: false, // these pages do NOT allow next page to be navigatable by default.
                  showErrorMessage: false,
                  errorMessage: "",
                  tabPage: 1
              }
            }else{

              return {
                ...state,
                tabName: newTabName,
                maxPage: newMaxPages,
                allowNextPage: true, // by default, allow all to navigate to next page
                showErrorMessage: false,
                errorMessage: "",
                tabPage: 1
              }
            }
          } else{
            return {
              ...state,
            }

          }
      case SET_NEXT_TAB:
          return {
            ...state,
            allowNextPage: true,
          }
      case RESET_PAGE:
          return {
            ...initialState
          };
      default: return state;
  }
}

export default currentTabAndPageReducer;