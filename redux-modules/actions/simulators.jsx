import {
  UPDATE_SIMULATOR_PRIVATE_KEY,
  UPDATE_SIMULATOR_PRIVATE_KEY_VALID,
  UPDATE_SIMULATOR_MODULO,
  UPDATE_SIMULATOR_MODULO_VALID,
  UPDATE_SIMULATOR_PUBLIC_KEY,
  UPDATE_SIMULATOR_GEN_KEY_COMPLETED,
  UPDATE_SIMULATOR_TEXT_TO_ENC,
  UPDATE_SIMULATOR_TEXT_TO_ENC_VALID,
  UPDATE_SIMULATOR_TEXT_TO_DECRYPT,
  UPDATE_SIMULATOR_DECRYPTED_TEXT,
  UPDATE_SIMULATOR_PRIVATE_KEY_SUM,
  UPDATE_SIMULATOR_MULTIPLIER,
  UPDATE_SIMULATOR_MULTIPLIER_VALID,
  UPDATE_SIMULATOR_PADDING,
  UPDATE_SIMULATOR_RESET_ENC,
  UPDATE_SIMULATOR_RESET_DEC,
} from '../constants';

export const UPDATE_SIMULATOR_PRIVATE_KEY_ACTION = payload => {
  return {
    type: UPDATE_SIMULATOR_PRIVATE_KEY,
    payload,
  };
};

export const UPDATE_SIMULATOR_PRIVATE_KEY_VALID_ACTION = payload => {
  return {
    type: UPDATE_SIMULATOR_PRIVATE_KEY_VALID,
    payload,
  };
};

export const UPDATE_SIMULATOR_MODULO_ACTION = payload => {
  return {
    type: UPDATE_SIMULATOR_MODULO,
    payload,
  };
};

export const UPDATE_SIMULATOR_MODULO_VALID_ACTION = payload => {
  return {
    type: UPDATE_SIMULATOR_MODULO_VALID,
    payload,
  };
};

export const UPDATE_SIMULATOR_PUBLIC_KEY_ACTION = payload => {
  return {
    type: UPDATE_SIMULATOR_PUBLIC_KEY,
    payload,
  };
};

export const UPDATE_SIMULATOR_GEN_KEY_COMPLETED_ACTION = payload => {
  return {
    type: UPDATE_SIMULATOR_GEN_KEY_COMPLETED,
    payload,
  };
};

export const UPDATE_SIMULATOR_TEXT_TO_ENC_ACTION = payload => {
  return {
    type: UPDATE_SIMULATOR_TEXT_TO_ENC,
    payload,
  };
};

export const UPDATE_SIMULATOR_TEXT_TO_ENC_VALID_ACTION = payload => {
  return {
    type: UPDATE_SIMULATOR_TEXT_TO_ENC_VALID,
    payload,
  };
};

export const UPDATE_SIMULATOR_TEXT_TO_DECRYPT_ACTION = payload => {
  return {
    type: UPDATE_SIMULATOR_TEXT_TO_DECRYPT,
    payload,
  };
};

export const UPDATE_SIMULATOR_DECRYPTED_TEXT_ACTION = payload => {
  return {
    type: UPDATE_SIMULATOR_DECRYPTED_TEXT,
    payload,
  };
};

export const UPDATE_SIMULATOR_PRIVATE_KEY_SUM_ACTION = payload => {
  return {
    type: UPDATE_SIMULATOR_PRIVATE_KEY_SUM,
    payload,
  };
};

export const UPDATE_SIMULATOR_MULTIPLIER_ACTION = payload => {
  return {
    type: UPDATE_SIMULATOR_MULTIPLIER,
    payload,
  };
};

export const UPDATE_SIMULATOR_MULTIPLIER_VALID_ACTION = payload => {
  return {
    type: UPDATE_SIMULATOR_MULTIPLIER_VALID,
    payload,
  };
};

export const UPDATE_SIMULATOR_PADDING_ACTION = payload => {
  return {
    type: UPDATE_SIMULATOR_PADDING,
    payload,
  };
};
export const UPDATE_SIMULATOR_RESET_DEC_ACTION = () => {
  return {
    type: UPDATE_SIMULATOR_RESET_DEC,
  };
};

export const UPDATE_SIMULATOR_RESET_ENC_ACTION = () => {
  return {
    type: UPDATE_SIMULATOR_RESET_ENC,
  };
};
