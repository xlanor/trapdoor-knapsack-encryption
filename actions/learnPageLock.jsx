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
 const UNLOCK_ALL_ACTION = () =>{
  return{
    type: UNLOCK_ALL
  }
} 
const RESET_ALL_ACTION = () =>{
  return{
    type: RESET_ALL
  }
} 
 const KNAPSACK_SELECT_ACTION = () =>{
  return{
    type: KNAPSACK_SELECT
  }
} 
const KNAPSACK_LOCK_ACTION = () =>{
  return{
    type: KNAPSACK_LOCK
  }
} 
const KNAPSACK_UNLOCK_ACTION = () =>{
  return{
    type: KNAPSACK_UNLOCK
  }
} 
 const ENCRYPT_SELECT_ACTION = () =>{
  return{
    type: ENCRYPT_SELECT
  }
} 
const ENCRYPT_LOCK_ACTION = () =>{
  return{
    type: ENCRYPT_LOCK
  }
} 
const ENCRYPT_UNLOCK_ACTION = () =>{
  return{
    type: ENCRYPT_UNLOCK
  }
} 
 const DECRYPT_SELECT_ACTION = () =>{
  return{
    type: DECRYPT_SELECT
  }
} 
const DECRYPT_LOCK_ACTION = () =>{
  return{
    type: DECRYPT_LOCK
  }
} 
const DECRYPT_UNLOCK_ACTION = () =>{
  return{
    type: DECRYPT_UNLOCK
  }
} 

 const KEY_SELECT_ACTION = () =>{
  return{
    type: KEY_SELECT
  }
} 
const KEY_LOCK_ACTION = () =>{
  return{
    type: KEY_LOCK
  }
} 
const KEY_UNLOCK_ACTION = () =>{
  return{
    type: KEY_UNLOCK
  }
} 

const ALGO_SELECT_ACTION = () =>{
  return{
    type: ALGO_SELECT
  }
} 
const ALGO_LOCK_ACTION = () =>{
  return{
    type: ALGO_LOCK
  }
}
const ALGO_UNLOCK_ACTION = () =>{
  return{
    type: ALGO_UNLOCK
  }
}
 const INTRO_SELECT_ACTION = () =>{
  return{
    type: INTRO_SELECT
  }
}
const INTRO_LOCK_ACTION = () =>{
  return{
    type: INTRO_LOCK
  }
}
const INTRO_UNLOCK_ACTION = () =>{
  return{
    type: INTRO_UNLOCK
  }
}

export default { 
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
 };