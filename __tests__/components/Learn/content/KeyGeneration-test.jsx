import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
// Testing Modules
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';

// Redux modules
import thunk from 'redux-thunk';

import { getStore } from '../../../../redux-modules/store/configureStore';

// redux actions

import { ALLOW_NEXT_PAGE_ACTION, NEXT_KEY_PAGE_ACTION } from '../../../../redux-modules/actions/tabPage';

import {
  UPDATE_PRIVATE_KEY_STRING_ACTION,
  UPDATE_PRIVATE_KEY_SUM_ACTION,
  UPDATE_PRIVATE_KEY_ARRAY_ACTION,
  UPDATE_MODULO_ACTION,
  UPDATE_MULTIPLIER_ACTION,
  UPDATE_INVERSE_ACTION,
  UPDATE_PUBLIC_KEY_STRING_ACTION,
  UPDATE_PUBLIC_KEY_ARRAY_ACTION,
} from '../../../../redux-modules/actions/updateParameters';

import { UNLOCK_TROPHY_KEYRING, SHOW_TROPHY_ACTION } from '../../../../redux-modules/actions/manageTrophies';

import {
  ENCRYPT_LOCK_ACTION,
  DECRYPT_LOCK_ACTION,
  ENCRYPT_UNLOCK_ACTION,
} from '../../../../redux-modules/actions/learnPageLock';

import KeyPage from '../../../../components/Learn/content/key/Tutorial';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

// the mocked start state of our redux.
const startState = {
  trophy: getStore().getState().trophy,
  updateParameters: getStore().getState().updateParameters,
  lessonPageTabAndPages: getStore().getState().lessonPageTabAndPages,
};

describe('Components/Learn/KeyGen testing', () => {
  jest.useFakeTimers();
  jest.mock('redux-persist/integration/react', () => ({
    PersistGate: props => props.children,
  }));
  it(`Ensure that the switch case renders all pages properly`, async () => {
    const store = mockStore(startState);
    const instanceOf = await renderer
      .create(
        <Provider store={store}>
          <KeyPage />
        </Provider>,
      );
      console.log(instanceOf.toJSON());
      console.log(instanceOf.getInstance());
    instanceOf.setPrivateKey('yoona');
    expect(instanceOf.state.currentPrivateKey).toEqual(`yoona`);
  });
});
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
