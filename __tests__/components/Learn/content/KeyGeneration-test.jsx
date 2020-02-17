import React from 'react';
// Testing Modules
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';

// Redux modules
import thunk from 'redux-thunk';

import { getStore } from '../../../../redux-modules/store/configureStore';

/*
Preparing for tomorrow

KeyPage.propTypes = {
  trophyKeyRing: PropTypes.bool.isRequired,
  modulo: PropTypes.number.isRequired,
  multiplier: PropTypes.number.isRequired,
  privateKeyString: PropTypes.string.isRequired,
  privateKeySum: PropTypes.number.isRequired,
  tabPage: PropTypes.number.isRequired,
  privateKeyArr: PropTypes.arrayOf(PropTypes.string),
  actions: PropTypes.shape({
    ALLOW_NEXT_PAGE_ACTION: PropTypes.func,
    UPDATE_PRIVATE_KEY_STRING_ACTION: PropTypes.func,
    UPDATE_PRIVATE_KEY_SUM_ACTION: PropTypes.func,
    UPDATE_PRIVATE_KEY_ARRAY_ACTION: PropTypes.func,
    UPDATE_MODULO_ACTION: PropTypes.func,
    UPDATE_MULTIPLIER_ACTION: PropTypes.func,
    UPDATE_INVERSE_ACTION: PropTypes.func,
    UPDATE_PUBLIC_KEY_ARRAY_ACTION: PropTypes.func,
    UPDATE_PUBLIC_KEY_STRING_ACTION: PropTypes.func,
    ENCRYPT_LOCK_ACTION: PropTypes.func,
    DECRYPT_LOCK_ACTION: PropTypes.func,
    NEXT_KEY_PAGE_ACTION: PropTypes.func,
    ENCRYPT_UNLOCK_ACTION: PropTypes.func,
    UNLOCK_TROPHY_KEYRING: PropTypes.func,
    SHOW_TROPHY_ACTION: PropTypes.func,
  }),
};

const mapStateToProps = state => ({
  lockState: state,
  trophyKeyRing: state.trophy.trophyKeyRing,
  trophyKeymaster: state.trophy.trophyKeymaster,
  modulo: state.updateParameters.modulo,
  multiplier: state.updateParameters.multiplier,
  privateKeyString: state.updateParameters.privateKeyString,
  privateKeyArr: state.updateParameters.privateKeyArr,
  privateKeySum: state.updateParameters.privateKeySum,
  tabPage: state.lessonPageTabAndPages.tabPage,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(
    {
      ALLOW_NEXT_PAGE_ACTION,
      UPDATE_PRIVATE_KEY_STRING_ACTION,
      UPDATE_PRIVATE_KEY_SUM_ACTION,
      UPDATE_PRIVATE_KEY_ARRAY_ACTION,
      UPDATE_MODULO_ACTION,
      UPDATE_MULTIPLIER_ACTION,
      UPDATE_INVERSE_ACTION,
      UPDATE_PUBLIC_KEY_ARRAY_ACTION,
      UPDATE_PUBLIC_KEY_STRING_ACTION,
      ENCRYPT_LOCK_ACTION,
      DECRYPT_LOCK_ACTION,
      NEXT_KEY_PAGE_ACTION,
      ENCRYPT_UNLOCK_ACTION,
      UNLOCK_TROPHY_KEYRING,
      SHOW_TROPHY_ACTION,
    },
    dispatch,
  ),
});
*/