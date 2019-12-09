import {
  UPDATE_ENCRYPTION_STRING,
  UPDATE_ENCRYPTION_ASCII_STRING,
  UPDATE_ENCRYPTION_BINARY_STRING,
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