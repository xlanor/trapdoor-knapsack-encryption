/* For Redux - List of actions that can affect our states */
export const COUNTER_CHANGE = 'COUNTER_CHANGE';
// hint actions
export const LINKS_HINT_DONE = 'LINKS_HINT_DONE';
export const LINKS_HINT_NOTDONE = 'LINKS_HINT_NOTDONE';
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
export const NEXT_INTRO_PAGE = 'NEXT_INTRO_PAGE';
export const PREVIOUS_INTRO_PAGE = 'PREVIOUS_INTRO_PAGE';
export const NEXT_GCD_PAGE = 'NEXT_GCD_PAGE';
export const PREVIOUS_GCD_PAGE = 'PREVIOUS_GCD_PAGE';
export const NEXT_KEY_PAGE = 'NEXT_KEY_PAGE';
export const PREVIOUS_KEY_PAGE = 'PREVIOUS_KEY_PAGE';
export const PREVIOUS_ENCRYPT_PAGE = 'PREVIOUS_ENCRYPT_PAGE';
export const NEXT_ENCRYPT_PAGE = 'NEXT_ENCRYPT_PAGE';
export const NEXT_DECRYPT_PAGE = 'NEXT_DECRYPT_PAGE';
export const PREVIOUS_DECRYPT_PAGE = 'PREVIOUS_DECRYPT_PAGE';
export const CHANGE_INTRO_PAGE = 'CHANGE_INTRO_PAGE';
export const CHANGE_GCD_PAGE = 'CHANGE_GCD_PAGE';
export const RESET_PAGE = 'RESET_PAGE';
export const CHANGE_TAB = 'CHANGE_TAB';
export const SET_NEXT_TAB = 'SET_NEXT_TAB';
export const RESET_ERROR_MESSAGE = 'RESET_ERROR_MESSAGE';
export const SET_ERROR_MESSAGE = 'SET_ERROR_MESSAGE';
export const ALLOW_NEXT_PAGE = 'ALLOW_NEXT_PAGE';
export const DISABLE_NEXT_PAGE = 'DISABLE_NEXT_PAGE';


// handling state of the parameters
export const UPDATE_PRIVATE_KEY_STRING = 'UPDATE_PRIVATE_KEY_STRING';
export const UPDATE_PRIVATE_KEY_SUM = 'UPDATE_PRIVATE_KEY_SUM';
export const UPDATE_PRIVATE_KEY_ARRAY = 'UPDATE_PRIVATE_KEY_ARRAY';
export const UPDATE_MODULO = 'UPDATE_MODULO';
export const UPDATE_MULTIPLIER = 'UPDATE_MULTIPLIER';
export const UPDATE_INVERSE = 'UPDATE_INVERSE';
export const UPDATE_PUBLIC_KEY_STRING = 'UPDATE_PUBLIC_KEY_STRING';
export const UPDATE_PUBLIC_KEY_ARRAY = 'UPDATE_PUBLIC_KEY_ARRAY';

// for handling state of encryption
export const UPDATE_ENCRYPTION_STRING = "UPDATE_ENCRYPTION_STRING";
export const UPDATE_ENCRYPTION_ASCII_STRING = "UPDATE_ENCRYPTION_ASCII_STRING";
export const UPDATE_ENCRYPTION_BINARY_STRING = "UPDATE_ENCRYPTION_BINARY_STRING";
export const UPDATE_ENCRYPTION_PADDING = "UPDATE_ENCRYPTION_PADDING";
export const UPDATE_ENCRYPTION_BLOCKS = "UPDATE_ENCRYPTION_BLOCKS";
export const UPDATE_ENCRYPTED_STRING = "UPDATE_ENCRYPTED_STRING";

// for pulling questions from API
export const UPDATE_QUESTIONS = "UPDATE_QUESTIONS";
export const CALL_QUESTIONS_API = "CALL_QUESTIONS_API";
export const GET_QUESTIONS="GET_QUESTIONS";
// for handling state of decryption

/*

    privateKey: "",
    privateKeyValid: false,
    modulus: "",
    modulusValid: false,
    publicKey: "",
    genKeyCompleted: false,
    textToEncrypt: "",
    textToEncryptValid: false,
    textToDecrypt: "",
    decryptedText: "",
*/

// for handling state of simulator
export const UPDATE_SIMULATOR_PRIVATE_KEY = "UPDATE_SIMULATOR_PRIVATE_KEY";
export const UPDATE_SIMULATOR_PRIVATE_KEY_VALID = "UPDATE_SIMULATOR_PRIVATE_KEY_VALID";
export const UPDATE_SIMULATOR_MODULO = "UPDATE_SIMULATOR_MODULO";
export const UPDATE_SIMULATOR_MODULO_VALID = "UPDATE_SIMULATOR_MODULO_VALID";
export const UPDATE_SIMULATOR_PUBLIC_KEY = "UPDATE_SIMULATOR_PUBLIC_KEY";
export const UPDATE_SIMULATOR_GEN_KEY_COMPLETED = "UPDATE_SIMULATOR_GEN_KEY_COMPLETED";
export const UPDATE_SIMULATOR_TEXT_TO_ENC = "UPDATE_SIMULATOR_TEXT_TO_ENC";
export const UPDATE_SIMULATOR_TEXT_TO_ENC_VALID = "UPDATE_SIMULATOR_TEXT_TO_ENC_VALID";
export const UPDATE_SIMULATOR_TEXT_TO_DECRYPT = "UPDATE_SIMULATOR_TEXT_TO_DECRYPT";
export const UPDATE_SIMULATOR_DECRYPTED_TEXT = "UPDATE_SIMULATOR_DECRYPTED_TEXT";
export const UPDATE_SIMULATOR_PRIVATE_KEY_SUM = 'UPDATE_SIMULATOR_PRIVATE_KEY_SUM';
export const UPDATE_SIMULATOR_MULTIPLIER = "UPDATE_SIMULATOR_MULTIPLIER";
export const UPDATE_SIMULATOR_MULTIPLIER_VALID = "UPDATE_SIMULATOR_MULTIPLIER_VALID";
export const UPDATE_SIMULATOR_PADDING = "UPDATE_SIMULATOR_PADDING";
export const UPDATE_SIMULATOR_RESET_DEC = "UPDATE_SIMULATOR_RESET_DEC";
export const UPDATE_SIMULATOR_RESET_ENC = "UPDATE_SIMULATOR_RESET_ENC";


export const MAX_INTRO_PAGES=8;
export const MAX_GCD_PAGES=14;
export const MAX_KEY_PAGES=7;
export const MAX_ENCRYPT_PAGES=6;
export const MAX_DECRYPT_PAGES=3;
export const MAX_SIMULATOR_PAGES=1;