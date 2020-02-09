import {
  UPDATE_PRIVATE_KEY_STRING,
  UPDATE_PRIVATE_KEY_SUM,
  UPDATE_PRIVATE_KEY_ARRAY,
  UPDATE_MODULO,
  UPDATE_MULTIPLIER,
  UPDATE_INVERSE,
  UPDATE_PUBLIC_KEY_STRING,
  UPDATE_PUBLIC_KEY_ARRAY,
  RESET_ALL,
} from '../constants';

export const UPDATE_PRIVATE_KEY_STRING_ACTION = payload => {
  return {
    type: UPDATE_PRIVATE_KEY_STRING,
    payload,
  };
};

export const UPDATE_PRIVATE_KEY_SUM_ACTION = payload => {
  return {
    type: UPDATE_PRIVATE_KEY_SUM,
    payload,
  };
};

export const UPDATE_PRIVATE_KEY_ARRAY_ACTION = payload => {
  return {
    type: UPDATE_PRIVATE_KEY_ARRAY,
    payload,
  };
};

export const UPDATE_MODULO_ACTION = payload => {
  return {
    type: UPDATE_MODULO,
    payload,
  };
};

export const UPDATE_MULTIPLIER_ACTION = payload => {
  return {
    type: UPDATE_MULTIPLIER,
    payload,
  };
};

export const UPDATE_INVERSE_ACTION = payload => {
  return {
    type: UPDATE_INVERSE,
    payload,
  };
};
export const UPDATE_PUBLIC_KEY_STRING_ACTION = payload => {
  return {
    type: UPDATE_PUBLIC_KEY_STRING,
    payload,
  };
};

export const UPDATE_PUBLIC_KEY_ARRAY_ACTION = payload => {
  return {
    type: UPDATE_PUBLIC_KEY_ARRAY,
    payload,
  };
};

export const RESET_PARAMETERS_ACTION = () => {
  return {
    type: RESET_ALL,
  };
};
