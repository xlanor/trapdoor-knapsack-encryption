/* Actions for redux */
import { 
  INTRO_SELECT,
  INTRO_LOCK,
  INTRO_UNLOCK,
  ALGO_SELECT,
  ALGO_LOCK,
  ALGO_UNLOCK,
  KEY_SELECT,
  KEY_LOCK,
  KEY_UNLOCK,
  DECRYPT_SELECT,
  DECRYPT_LOCK,
  DECRYPT_UNLOCK,
  ENCRYPT_SELECT,
  ENCRYPT_LOCK,
  ENCRYPT_UNLOCK,
  KNAPSACK_SELECT,
  KNAPSACK_LOCK,
  KNAPSACK_UNLOCK,
  UNLOCK_ALL,
  RESET_ALL,
 } from '../constants';
 
export const UNLOCK_ALL_ACTION = () =>{
  return{
    type: UNLOCK_ALL
  }
} 
export const RESET_ALL_ACTION = () =>{
  return{
    type: RESET_ALL
  }
} 
export const KNAPSACK_SELECT_ACTION = () =>{
  return{
    type: KNAPSACK_SELECT
  }
} 
export const KNAPSACK_LOCK_ACTION = () =>{
  return{
    type: KNAPSACK_LOCK
  }
} 
export const KNAPSACK_UNLOCK_ACTION = () =>{
  return{
    type: KNAPSACK_UNLOCK
  }
} 
export const ENCRYPT_SELECT_ACTION = () =>{
  return{
    type: ENCRYPT_SELECT
  }
} 
export const ENCRYPT_LOCK_ACTION = () =>{
  return{
    type: ENCRYPT_LOCK
  }
} 
export const ENCRYPT_UNLOCK_ACTION = () =>{
  return{
    type: ENCRYPT_UNLOCK
  }
} 
export const DECRYPT_SELECT_ACTION = () =>{
  return{
    type: DECRYPT_SELECT
  }
} 
export const DECRYPT_LOCK_ACTION = () =>{
  return{
    type: DECRYPT_LOCK
  }
} 
export const DECRYPT_UNLOCK_ACTION = () =>{
  return{
    type: DECRYPT_UNLOCK
  }
} 

export const KEY_SELECT_ACTION = () =>{
  return{
    type: KEY_SELECT
  }
} 
export const KEY_LOCK_ACTION = () =>{
  return{
    type: KEY_LOCK
  }
} 
export const KEY_UNLOCK_ACTION = () =>{
  return{
    type: KEY_UNLOCK
  }
} 

export const ALGO_SELECT_ACTION = () =>{
  return{
    type: ALGO_SELECT
  }
} 
export const ALGO_LOCK_ACTION = () =>{
  return{
    type: ALGO_LOCK
  }
}
export const ALGO_UNLOCK_ACTION = () =>{
  return{
    type: ALGO_UNLOCK
  }
}
export const INTRO_SELECT_ACTION = () =>{
  return{
    type: INTRO_SELECT
  }
}
export const INTRO_LOCK_ACTION = () =>{
  return{
    type: INTRO_LOCK
  }
}
export const INTRO_UNLOCK_ACTION = () =>{
  return{
    type: INTRO_UNLOCK
  }
}

