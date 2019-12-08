import {
  UPDATE_PRIVATE_KEY_STRING,
  UPDATE_PRIVATE_KEY_SUM,
  UPDATE_PRIVATE_KEY_ARRAY,
  UPDATE_PUBLIC_KEY_ARRAY,
  UPDATE_PUBLIC_KEY_STRING,
  UPDATE_MODULO,
  UPDATE_MULTIPLIER,
  UPDATE_INVERSE,
} from '../constants'

const initialState = {
    privateKeyString: "",
    privateKeySum:0,
    privateKeyArr:[],
    modulo: 0,
    multiplier: 0,
    inverse: 0,
    publicKeyString: "",
    publicKeyArr: [],

}

const currentParametersReducer = ( state=initialState, action ) => {
    switch(action.type){
        case UPDATE_PRIVATE_KEY_STRING:
          return {
            ...state,
            privateKeyString: action.payload,
          }

        case UPDATE_PRIVATE_KEY_SUM:
          return {
            ...state,
            privateKeySum: action.payload,
          }

        case UPDATE_PRIVATE_KEY_ARRAY:
          return {
            ...state,
            privateKeyArr: action.payload,
          }
        case UPDATE_MODULO:
          return {
            ...state,
            modulo: action.payload,
          }
        case UPDATE_MULTIPLIER:
          return {
            ...state,
            multiplier: action.payload,
          }
        case UPDATE_INVERSE:
          return {
            ...state,
            inverse: action.payload,
          }
        case UPDATE_PUBLIC_KEY_ARRAY:
          return {
            ...state,
            publicKeyArr: action.payload,
          }
        case UPDATE_PUBLIC_KEY_STRING:
          return {
            ...state,
            publicKeyString: action.payload,
          }
        default:
          return {
            ...state,
          }
    } 
}

export default currentParametersReducer;