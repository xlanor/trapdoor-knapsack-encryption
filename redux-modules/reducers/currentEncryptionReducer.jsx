import {
  UPDATE_ENCRYPTION_STRING,
  UPDATE_ENCRYPTION_ASCII_STRING,
  UPDATE_ENCRYPTION_BINARY_STRING,
  UPDATE_ENCRYPTION_PADDING,
  UPDATE_ENCRYPTION_BLOCKS,
  UPDATE_ENCRYPTED_STRING,
  RESET_ALL,
} from '../constants';

const initialState = {
  textToEncrypt: '',
  asciiString: '',
  binaryString: '',
  padding: 0,
  binaryBlocks: [],
  encryptedText: [],
};

const currentEncryptionReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_ENCRYPTION_STRING:
      return {
        ...state,
        textToEncrypt: action.payload,
      };
    case UPDATE_ENCRYPTION_ASCII_STRING:
      return {
        ...state,
        asciiString: action.payload,
      };
    case UPDATE_ENCRYPTION_BINARY_STRING:
      return {
        ...state,
        binaryString: action.payload,
      };
    case UPDATE_ENCRYPTION_PADDING:
      return {
        ...state,
        padding: action.payload,
      };
    case UPDATE_ENCRYPTION_BLOCKS:
      return {
        ...state,
        binaryBlocks: action.payload,
      };
    case UPDATE_ENCRYPTED_STRING:
      return {
        ...state,
        encryptedText: action.payload,
      };
    case RESET_ALL:
      return {
        ...initialState,
      };
    default:
      return state;
  }
};

export default currentEncryptionReducer;
