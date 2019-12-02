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

const initialState = {
    introSelected: true,
    introLocked: false,
    algoSelected: false,
    algoLocked: true,
    keySelected: false,
    keyLocked: true,
    decryptSelected: false,
    decryptLocked: true,
    encryptSelected: false,
    encryptLocked: true,
    knapSackSelected: false,
    knapSackLocked: true, 
};

const allUnlocked = {
  introSelected: true,
  introLocked: false,
  algoSelected: false,
  algoLocked: false,
  keySelected: false,
  keyLocked: false,
  decryptSelected: false,
  decryptLocked: false,
  encryptSelected: false,
  encryptLocked: false,
  knapSackSelected: false,
  knapSackLocked: false, 
};

const lessonPageReducer = (state = initialState, action ) => {
  switch(action.type){
      case INTRO_SELECT:
          return {
            ...state,
            introSelected: true,
            introLocked: false,
            // unset all other selected
            algoSelected: false,
            keySelected: false,
            knapSackSelected: false,
            encryptSelected: false,
            decryptSelected: false,
          };
      // should never be triggered in an ideal scenario - intro should never be locked
      case INTRO_LOCK:
          return {
            ...state,
            introSelected: false,
            introLocked: true,
          };
      // should never be triggered in an ideal scenario - intro should never be locked
    case INTRO_UNLOCK:
          return {
            ...state,
            introLocked: false,
          };
    case ALGO_SELECT:
          return {
            ...state,
            algoSelected: true,
            algoLocked: false,
            // unset all other selected
            introSelected: false,
            keySelected: false,
            knapSackSelected: false,
            encryptSelected: false,
            decryptSelected: false,
          }
    // all the locks should never be triggered in an ideal scenario.
    case ALGO_LOCK:
          return {
            ...state,
            algoLocked: true,
            algoSelected: false,
          }
    case ALGO_UNLOCK:
        return {
            ...state,
            algoLocked: false,
        }
    case KEY_SELECT:
      return {
        ...state,
        keySelected: true,
        keyLocked: false,

        // unset all other selected
        introSelected: false,
        algoSelected: false,
        knapSackSelected: false,
        encryptSelected: false,
        decryptSelected: false,
      }
    // all the locks should never be triggered in an ideal scenario.
    case KEY_LOCK:
      return {
        ...state,
        keySelected: false,
        keyLocked: true,
      }
    case KEY_UNLOCK:
      return {
        ...state,
        keyLocked: false,
      }
    case DECRYPT_SELECT:
      return {
        ...state,
        decryptSelected: true,
        decryptLocked: false,
        // unset all other selected
        introSelected: false,
        algoSelected: false,
        keySelected: false,
        knapSackSelected: false,
        encryptSelected: false,
      }
    case DECRYPT_LOCK:
      return {
        ...state,
        decryptLocked: true,
        decryptSelected: false,
      }
    case DECRYPT_UNLOCK:
      return {
        ...state,
        decryptLocked: false,
      }
    case ENCRYPT_SELECT:
      return {
        ...state,
        encryptLocked: false,
        encryptSelected: true,
        // unset all other selected
        introSelected: false,
        algoSelected: false,
        keySelected: false,
        knapSackSelected: false,
        decryptSelected: false,
      }
    case ENCRYPT_LOCK:
      return {
        ...state,
        encryptLocked: true,
        encryptSelected: false,
      }
    case ENCRYPT_UNLOCK:
      return {
        ...state,
        encryptLocked: false,
      }
    case KNAPSACK_SELECT:
      return {
        ...state,
        knapSackSelected: true,
        knapSackLocked: false,
        // unset all other selected
        introSelected: false,
        algoSelected: false,
        keySelected: false,
        encryptSelected: false,
        decryptSelected: false,
      }
    case KNAPSACK_LOCK:
      return {
        ...state,
        knapSackLocked: true,
        knapSackSelected: false,
      }
    case KNAPSACK_UNLOCK:
      return {
        ...state,
        KNAPSACK_UNLOCK: true,
    }
    case UNLOCK_ALL:
      return allUnlocked;
    case RESET_ALL:
      return initialState;
    default:
      return state;
  }
}

export default lessonPageReducer;