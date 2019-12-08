/* For Redux - List of actions that can affect our states */
export const COUNTER_CHANGE = 'COUNTER_CHANGE';
// intro actions
export const INTRO_SELECT = 'INTRO_SELECT';
export const INTRO_LOCK = 'INTRO_LOCK';
export const INTRO_UNLOCK = 'INTRO_UNLOCK';
// Algo actions
export const ALGO_SELECT = 'ALGO_SELECT';
export const ALGO_LOCK = 'ALGO_LOCK';
export const ALGO_UNLOCK = 'ALGO_UNLOCK';
// key actions
export const KEY_SELECT = 'KEY_SELECT';
export const KEY_LOCK = 'KEY_LOCK';
export const KEY_UNLOCK = 'KEY_UNLOCK';
// decrypt actions
export const DECRYPT_SELECT = 'DECRYPT_SELECT';
export const DECRYPT_LOCK = 'DECRYPT_LOCK';
export const DECRYPT_UNLOCK = 'DECRYPT_UNLOCK';
// encrypt actions
export const ENCRYPT_SELECT = 'ENCRYPT_SELECT';
export const ENCRYPT_LOCK = 'ENCRYPT_LOCK';
export const ENCRYPT_UNLOCK = 'ENCRYPT_UNLOCK';
//knapsack actions
export const KNAPSACK_SELECT = 'KNAPSACK_SELECT';
export const KNAPSACK_LOCK = 'KNAPSACK_LOCK';
export const KNAPSACK_UNLOCK = 'KNAPSACK_UNLOCK';
// cheat code
export const UNLOCK_ALL = 'UNLOCK_ALL';
export const RESET_ALL = 'RESET_ALL';

// for navigating pages
export const NEXT_INTRO_PAGE='NEXT_INTRO_PAGE';
export const PREVIOUS_INTRO_PAGE='PREVIOUS_INTRO_PAGE';
export const NEXT_KEY_PAGE='NEXT_KEY_PAGE';
export const PREVIOUS_KEY_PAGE='PREVIOUS_KEY_PAGE';
export const CHANGE_INTRO_PAGE='CHANGE_INTRO_PAGE';
export const CHANGE_GCD_PAGE='CHANGE_GCD_PAGE';
export const RESET_PAGE='RESET_PAGE';
export const CHANGE_TAB='CHANGE_TAB';
export const SET_NEXT_TAB='SET_NEXT_TAB';
export const RESET_ERROR_MESSAGE='RESET_ERROR_MESSAGE';
export const SET_ERROR_MESSAGE='SET_ERROR_MESSAGE';
export const ALLOW_NEXT_PAGE='ALLOW_NEXT_PAGE';


// handling state of the parameters
export const UPDATE_PRIVATE_KEY_STRING='UPDATE_PRIVATE_KEY_STRING';
export const UPDATE_PRIVATE_KEY_SUM='UPDATE_PRIVATE_KEY_SUM';
export const UPDATE_PRIVATE_KEY_ARRAY='UPDATE_PRIVATE_KEY_ARRAY';
export const UPDATE_MODULO='UPDATE_MODULO';
export const UPDATE_MULTIPLIER='UPDATE_MULTIPLIER';
export const UPDATE_INVERSE='UPDATE_INVERSE';
export const UPDATE_PUBLIC_KEY_STRING='UPDATE_PUBLIC_KEY_STRING';
export const UPDATE_PUBLIC_KEY_ARRAY='UPDATE_PUBLIC_KEY_ARRAY';

