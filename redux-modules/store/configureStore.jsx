import { createStore, combineReducers, applyMiddleware } from 'redux';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import { persistStore, persistReducer, createMigrate } from 'redux-persist';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { AsyncStorage } from 'react-native';
import countReducer from '../reducers/countReducer';
import lessonPageReducer from '../reducers/lessonPageReducer';
import currentTabAndPageReducer from '../reducers/currentTabAndPageReducer';
import currentParametersReducer from '../reducers/currentParametersReducer';
import currentEncryptionReducer from '../reducers/currentEncryptionReducer';
import simulatorReducer from '../reducers/simulatorReducer';
import questionReducer from '../reducers/questionReducer';
import hintReducer from '../reducers/hintReducer';
import trophyReducer from '../reducers/trophyReducer';

import { MAX_INTRO_PAGES, MAX_GCD_PAGES, MAX_KEY_PAGES, MAX_ENCRYPT_PAGES, MAX_DECRYPT_PAGES } from '../constants';

const migrations = {
  0: state => {
    return {
      ...state,
      // todo: ADD DEFAULT MIGRATIONS HERE
      lessonPageTabAndPages: {
        ...state.lessonPageTabAndPages,
        maxPage: MAX_INTRO_PAGES,
        maxIntroPages: MAX_INTRO_PAGES,
        maxGcdPages: MAX_GCD_PAGES,
        maxKeyPages: MAX_KEY_PAGES,
        maxEncryptPages: MAX_ENCRYPT_PAGES,
        maxDecryptPages: MAX_DECRYPT_PAGES,
      },
      questions: {
        intro: [],
        algo: [],
        keygen: [],
        encrypt: [],
        decrypt: [],
      },
      hint: {
        linksHintLocked: true,
      },
    };
  },
  1: state => {
    return {
      ...state,
      // todo: ADD DEFAULT MIGRATIONS HERE
      lessonPageTabAndPages: {
        ...state.lessonPageTabAndPages,
        maxPage: MAX_INTRO_PAGES,
        maxIntroPages: MAX_INTRO_PAGES,
        maxGcdPages: MAX_GCD_PAGES,
        maxKeyPages: MAX_KEY_PAGES,
        maxEncryptPages: MAX_ENCRYPT_PAGES,
        maxDecryptPages: MAX_DECRYPT_PAGES,
      },
    };
  },
  2: state => {
    return {
      ...state,
      trophy: {
        trophyHistorian: false,
        trophyEzMath: false,
        trophyKeyRing: false,
        trophyConcealment: false,
        trophyReveal: false,
        trophyKeymaster: false,
        trophySafetyFirst: false,
        trophyBreakWall: false,
        showTrophy: false,
      },
    };
  },
};

const persistConfig = {
  key: 'root',
  version: 1,
  storage: AsyncStorage,
  stateReconciler: autoMergeLevel2,
  whitelist: ['encryption', 'lessonPage', 'lessonPageTabAndPages', 'updateParameters', 'encryption', 'hint', 'trophy'],
  migrate: createMigrate(migrations, { debug: true }),
};

const rootReducer = combineReducers({
  count: countReducer,
  lessonPage: lessonPageReducer,
  lessonPageTabAndPages: currentTabAndPageReducer,
  updateParameters: currentParametersReducer,
  encryption: currentEncryptionReducer,
  simulator: simulatorReducer,
  questions: questionReducer,
  hint: hintReducer,
  trophy: trophyReducer,
});

const configureStore = persistedReducer => {
  return createStore(persistedReducer, composeWithDevTools(applyMiddleware(thunk)));
};
const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = configureStore(persistedReducer);
const persistor = persistStore(store);

const getPersistor = () => persistor;
const getStore = () => store;
const getState = () => {
  return store.getState();
};

export { getStore, getState, getPersistor };
export default {
  getStore,
  getState,
  getPersistor,
};
