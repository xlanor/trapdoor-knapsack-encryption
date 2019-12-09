import {
  UPDATE_ENCRYPTION_STRING,
  UPDATE_ENCRYPTION_ASCII_STRING,
  UPDATE_ENCRYPTION_BINARY_STRING,
} from '../constants'

const initialState = {
    textToEncrypt: "",
    asciiString:"",
    binaryString:"",
}

const currentEncryptionReducer = (state=initialState, action) => {
  switch(action.type){
      case UPDATE_ENCRYPTION_STRING:
        return {
          ...state,
          textToEncrypt: action.payload,
        }
      case UPDATE_ENCRYPTION_ASCII_STRING:
        return {
          ...state,
          asciiString: action.payload,
        }
      case UPDATE_ENCRYPTION_BINARY_STRING:
          return {
            ...state,
            binaryString: action.payload,
          }
      default:
          return {
            ...state,
          }
  }
}

export default currentEncryptionReducer;