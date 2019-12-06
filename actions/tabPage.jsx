/* Actions for redux */
import { 
  NEXT_INTRO_PAGE,
  PREVIOUS_INTRO_PAGE,
  NEXT_KEY_PAGE,
  PREVIOUS_KEY_PAGE,
  RESET_PAGE,
  CHANGE_TAB,
  SET_NEXT_TAB,
  RESET_ERROR_MESSAGE,
  SET_ERROR_MESSAGE,
 } from '../constants';


 export const NEXT_INTRO_PAGE_ACTION = () => {
   return {
     type: NEXT_INTRO_PAGE,
   }
 }
 export const PREVIOUS_INTRO_PAGE_ACTION = () => {
   return {
     type: PREVIOUS_INTRO_PAGE,
   }
 }

 export const NEXT_KEY_PAGE_ACTION = () => {
   return{
     type: NEXT_KEY_PAGE,
   }
 }

 export const PREVIOUS_KEY_PAGE_ACTION = () => {
   return {
     type: PREVIOUS_KEY_PAGE,
   }
 }

 export const SET_NEXT_TAB_ACTION = (payload) => {
   return {
     type: SET_NEXT_TAB,
     payload: payload,
   }
 }
 export const RESET_PAGE_ACTION = () => {
    return {
        type: RESET_PAGE,
    }
 }
export const RESET_ERROR_MESSAGE_ACTION = () => {
    return {
        type: RESET_ERROR_MESSAGE,
    }
}

export const SET_ERROR_MESSAGE_ACTION = (payload) => {
    return {
        type: SET_ERROR_MESSAGE,
        payload: payload,
    }
}
 export const CHANGE_TAB_ACTION = (type) => {
    return {
       type: CHANGE_TAB,
       payload: type,
    }
 }