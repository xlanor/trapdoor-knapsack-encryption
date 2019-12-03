import {
  NEXT_INTRO_PAGE,
  PREVIOUS_INTRO_PAGE,
  RESET_PAGE,

} from '../constants';

// we will have different tab names
// to be determined.
const initialState = {
  tabName: "intro",
  tabPage: 1,
  minTabPage: 0,
  maxIntroPages: 4,
}


const currentTabAndPageReducer = (state=initialState, action) =>{
  switch(action.type){
      case NEXT_INTRO_PAGE:
          return {
            ...state,
            tabPage: (state.tabPage+1 > state.maxIntroPages) ?  state.tabPage: state.tabPage+1,
          }
      case PREVIOUS_INTRO_PAGE:
          return {
            ...state,
            tabPage: (state.tabPage-1 < 0) ? 0 : state.tabPage-1,
          }
      case RESET_PAGE:
          return initialState;
      default: return state;
  }
}

export default currentTabAndPageReducer;