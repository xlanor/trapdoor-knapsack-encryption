/* Actions for redux */
import {
  NEXT_INTRO_PAGE,
  PREVIOUS_INTRO_PAGE,
  NEXT_GCD_PAGE,
  PREVIOUS_GCD_PAGE,
  NEXT_KEY_PAGE,
  PREVIOUS_KEY_PAGE,
  PREVIOUS_ENCRYPT_PAGE,
  NEXT_ENCRYPT_PAGE,
  PREVIOUS_DECRYPT_PAGE,
  NEXT_DECRYPT_PAGE,
  RESET_PAGE,
  CHANGE_TAB,
  SET_NEXT_TAB,
  RESET_ERROR_MESSAGE,
  SET_ERROR_MESSAGE,
  ALLOW_NEXT_PAGE,
  DISABLE_NEXT_PAGE,
} from '../constants';

export const NEXT_INTRO_PAGE_ACTION = () => {
  return {
    type: NEXT_INTRO_PAGE,
  };
};
export const PREVIOUS_INTRO_PAGE_ACTION = () => {
  return {
    type: PREVIOUS_INTRO_PAGE,
  };
};

export const NEXT_GCD_PAGE_ACTION = () => {
  return {
    type: NEXT_GCD_PAGE,
  };
};
export const PREVIOUS_GCD_PAGE_ACTION = () => {
  return {
    type: PREVIOUS_GCD_PAGE,
  };
};

export const NEXT_KEY_PAGE_ACTION = () => {
  return {
    type: NEXT_KEY_PAGE,
  };
};

export const PREVIOUS_KEY_PAGE_ACTION = () => {
  return {
    type: PREVIOUS_KEY_PAGE,
  };
};

export const PREVIOUS_ENCRYPT_PAGE_ACTION = () => {
  return {
    type: PREVIOUS_ENCRYPT_PAGE,
  };
};

export const NEXT_ENCRYPT_PAGE_ACTION = () => {
  return {
    type: NEXT_ENCRYPT_PAGE,
  };
};

export const PREVIOUS_DECRYPT_PAGE_ACTION = () => {
  return {
    type: PREVIOUS_DECRYPT_PAGE,
  };
};

export const NEXT_DECRYPT_PAGE_ACTION = () => {
  return {
    type: NEXT_DECRYPT_PAGE,
  };
};

export const SET_NEXT_TAB_ACTION = payload => {
  return {
    type: SET_NEXT_TAB,
    payload,
  };
};
export const RESET_PAGE_ACTION = () => {
  return {
    type: RESET_PAGE,
  };
};
export const RESET_ERROR_MESSAGE_ACTION = () => {
  return {
    type: RESET_ERROR_MESSAGE,
  };
};

export const ALLOW_NEXT_PAGE_ACTION = () => {
  return {
    type: ALLOW_NEXT_PAGE,
  };
};
export const DISABLE_NEXT_PAGE_ACTION = () => {
  return {
    type: DISABLE_NEXT_PAGE,
  };
};

export const SET_ERROR_MESSAGE_ACTION = payload => {
  return {
    type: SET_ERROR_MESSAGE,
    payload,
  };
};
export const CHANGE_TAB_ACTION = type => {
  return {
    type: CHANGE_TAB,
    payload: type,
  };
};
