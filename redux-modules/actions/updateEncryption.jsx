import {
  UPDATE_ENCRYPTION_STRING,
  UPDATE_ENCRYPTION_ASCII_STRING,
  UPDATE_ENCRYPTION_BINARY_STRING,
  UPDATE_ENCRYPTION_PADDING,
  UPDATE_ENCRYPTION_BLOCKS,
  UPDATE_ENCRYPTED_STRING,
  RESET_ALL,
} from '../constants'

export const UPDATE_ENCRYPTION_STRING_ACTION = (payload) => {
  return {
    type: UPDATE_ENCRYPTION_STRING,
    payload: payload,
  }
}

export const UPDATE_ENCRYPTION_ASCII_STRING_ACTION = (payload) => {
  return {
    type: UPDATE_ENCRYPTION_ASCII_STRING,
    payload: payload,
  }
}

export const UPDATE_ENCRYPTION_BINARY_STRING_ACTION = (payload) => {
  return {
    type: UPDATE_ENCRYPTION_BINARY_STRING,
    payload: payload,
  }
}

export const UPDATE_ENCRYPTION_BLOCKS_ACTION = (payload) => {
  return {
    type: UPDATE_ENCRYPTION_BLOCKS,
    payload: payload,
  }
}

export const UPDATE_ENCRYPTION_PADDING_ACTION = (payload) => {
  return {
    type: UPDATE_ENCRYPTION_PADDING,
    payload: payload,
  }
}
export const UPDATE_ENCRYPTED_STRING_ACTION = (payload) =>{
  return {
    type: UPDATE_ENCRYPTED_STRING,
    payload: payload,
  }
}
export const RESET_ENCRYPTED_ACTION = () => {
  return {
    type: RESET_ALL,
  }
}