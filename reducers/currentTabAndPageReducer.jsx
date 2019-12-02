import {
  NEXT_PAGE,
  RESET_PAGE,
} from '../constants';

// we will have different tab names
// to be determined.
const initialState = {
  tabName: "introduction",
  tabPage: 1,
  minTabPage: 0,
  maxIntroPages: 5,
}

const nextPage = (tabName) =>{

} 

const currentTabAndPageReducer = (state=initialState, action) =>{
  switch(action.type){
      case NEXT_PAGE:
          return {

          }
      case RESET_PAGE:
          return initialState;
      default: return state;
  }
}
export default currentTabAndPageReducer;