import {
  NEXT_INTRO_PAGE,
  PREVIOUS_INTRO_PAGE,
  NEXT_GCD_PAGE,
  PREVIOUS_GCD_PAGE,
  NEXT_KEY_PAGE,
  PREVIOUS_KEY_PAGE,
  PREVIOUS_ENCRYPT_PAGE,
  NEXT_ENCRYPT_PAGE,
  NEXT_DECRYPT_PAGE,
  PREVIOUS_DECRYPT_PAGE,
  RESET_PAGE,
  CHANGE_TAB,
  SET_NEXT_TAB,
  ALLOW_NEXT_PAGE,
} from '../constants';

const MAX_INTRO_PAGES=6;
const MAX_GCD_PAGES=13;
const MAX_KEY_PAGES=6;
const MAX_ENCRYPT_PAGES=5;
const MAX_DECRYPT_PAGES=3;
const MAX_SIMULATOR_PAGES=1;
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
  maxEncryptPages: MAX_ENCRYPT_PAGES,
  maxDecryptPages: MAX_DECRYPT_PAGES,
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
      case NEXT_GCD_PAGE:
        return{
          ...state,
          tabPage: (state.tabPage + 1 > state.maxPage) ? state.tabPage : state.tabPage + 1,
          allowNextPage: true,
          showErrorMessage: false,
          errorMessage: "",
        }
      case PREVIOUS_GCD_PAGE:
        return{
          ...state,
          tabPage: (state.tabPage - 1 < 0) ? 0 : state.tabPage - 1,
          allowNextPage: true, // gcd does not have any requirements that we cant navigate to the next tab.
          showErrorMessage: false,
          errorMessage: "",
        }
      case PREVIOUS_ENCRYPT_PAGE:
       return {
         ...state,
         tabPage: (state.tabPage-1 < 0) ? 0 : state.tabPage-1,
       }
      case NEXT_ENCRYPT_PAGE:
          if(state.allowNextPage === true){
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
          console.log("TabPage is "+state.tabPage)
          // this entire part is to prevent the damn thing from having an infinite loop in render.
          if(state.tabPage === 4){
            console.log("Resetting the inverse,")
            console.log(state)
            return {
              ...state,
              allowNextPage: true, // so that you can turn to the next page on the new page.
              tabPage: (state.tabPage-1 < 0) ? 0 : state.tabPage-1,
            }
          }
          else if (state.tabPage === 5){
              return {
                  ...state,
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
      case NEXT_DECRYPT_PAGE:
          return {
            ...state,
            tabPage: (state.tabPage+1 > state.maxPage) ?  state.tabPage: state.tabPage+1,
            allowNextPage: false, // so that you cant turn to the next page on the new page.
          }
      case PREVIOUS_DECRYPT_PAGE:
          return {
            ...state,
            tabPage: (state.tabPage-1 < 0) ? 0 : state.tabPage-1,
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
              case "encrypt":
                  newMaxPages = MAX_ENCRYPT_PAGES
                  newTabName = "encrypt"
                  break;
              case "decrypt":
                  newMaxPages = MAX_DECRYPT_PAGES
                  newTabName = "decrypt"
                  break;
              case "simulator":
                  newMaxPages = MAX_SIMULATOR_PAGES
                  newTabName = "simulator"
              default: break;

          }
          if (newTabName != null && newMaxPages != null){
            if (newTabName === "key" || newTabName === "decrypt" || newTabName === "encrypt"){
                console.log("Switching tab to "+newTabName)
                return {
                  ...state,
                  tabName: newTabName,
                  maxPage: newMaxPages,
                  allowNextPage: false, // these pages do NOT allow next page to be navigatable by default.
                  showErrorMessage: false,
                  errorMessage: "",
                  tabPage: 1
              }
            }
            else{

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