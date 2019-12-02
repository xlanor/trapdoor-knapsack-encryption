/* Actions for redux */
import { 
  NEXT_INTRO_PAGE,
  PREVIOUS_INTRO_PAGE,
  RESET_PAGE,
  CHANGE_TAB,
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

 export const RESET_PAGE_ACTION = () => {
    return {
        type: RESET_PAGE,
    }
 }

 export const CHANGE_TAB_ACTION = () => {
    return {
       type: CHANGE_TAB
    }
 }