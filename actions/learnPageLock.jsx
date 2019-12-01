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
 const UNLOCK_ALL = () =>{
  return{
    type: UNLOCK_ALL
  }
} 
const RESET_ALL = () =>{
  return{
    type: RESET_ALL
  }
} 
 const KNAPSACK_SELECT = () =>{
  return{
    type: KNAPSACK_SELECT
  }
} 
const KNAPSACK_LOCK = () =>{
  return{
    type: KNAPSACK_LOCK
  }
} 
const KNAPSACK_UNLOCK = () =>{
  return{
    type: KNAPSACK_UNLOCK
  }
} 
 const ENCRYPT_SELECT = () =>{
  return{
    type: ENCRYPT_SELECT
  }
} 
const ENCRYPT_LOCK = () =>{
  return{
    type: ENCRYPT_LOCK
  }
} 
const ENCRYPT_UNLOCK = () =>{
  return{
    type: ENCRYPT_UNLOCK
  }
} 
 const DECRYPT_SELECT = () =>{
  return{
    type: DECRYPT_SELECT
  }
} 
const DECRYPT_LOCK = () =>{
  return{
    type: DECRYPT_LOCK
  }
} 
const DECRYPT_UNLOCK = () =>{
  return{
    type: DECRYPT_UNLOCK
  }
} 

 const KEY_SELECT = () =>{
  return{
    type: KEY_SELECT
  }
} 
const KEY_LOCK = () =>{
  return{
    type: KEY_LOCK
  }
} 
const KEY_UNLOCK = () =>{
  return{
    type: KEY_UNLOCK
  }
} 

const ALGO_SELECT = () =>{
  return{
    type: ALGO_SELECT
  }
} 
const ALGO_LOCK = () =>{
  return{
    type: ALGO_LOCK
  }
}
const ALGO_UNLOCK = () =>{
  return{
    type: ALGO_UNLOCK
  }
}
 const INTRO_SELECT = () =>{
  return{
    type: INTRO_SELECT
  }
}
const INTRO_LOCK = () =>{
  return{
    type: INTRO_LOCK
  }
}
const INTRO_UNLOCK = () =>{
  return{
    type: INTRO_UNLOCK
  }
}

export default { 
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
 };