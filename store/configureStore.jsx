import { createStore, combineReducers,createMigrate } from 'redux';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import { persistStore, persistReducer } from 'redux-persist';
import { AsyncStorage } from 'react-native';
import countReducer from '../reducers/countReducer';
import lessonPageReducer from '../reducers/lessonPageReducer';
import currentTabAndPageReducer from '../reducers/currentTabAndPageReducer';
import currentParametersReducer from '../reducers/currentParametersReducer';
import currentEncryptionReducer from '../reducers/currentEncryptionReducer';
import simulatorReducer from '../reducers/simulatorReducer';
import hintReducer from '../reducers/hintReducer';

const migrations = {
  0: (state) => {
    return {
      ...state,
      // todo: ADD DEFAULT MIGRATIONS HERE
    }
  }
}

const persistConfig = {
  key:"root",
  version: 0,
  storage: AsyncStorage,
  stateReconciler: autoMergeLevel2,
  whitelist: ['encryption','lessonPage','lessonPageTabAndPages','updateParameters','encryption','hint'],
  migrate: createMigrate(migrations, { debug: true })
}

const rootReducer = combineReducers(
  { 
    count: countReducer,
    lessonPage: lessonPageReducer,
    lessonPageTabAndPages: currentTabAndPageReducer,
    updateParameters: currentParametersReducer,
    encryption: currentEncryptionReducer,
    simulator: simulatorReducer,
    hint: hintReducer,
  }
);

const configureStore = (persistedReducer) => {
  return createStore(persistedReducer);
}
const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = configureStore(persistedReducer);
const persistor = persistStore(store);


const getPersistor = () => persistor;
const getStore = () => store;
const getState = () => {
  return store.getState();
}

export {
  getStore,
  getState,
  getPersistor
};
export default {
  getStore,
  getState,
  getPersistor
}