import { createStore, combineReducers } from 'redux';
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


const persistConfig = {
  key:"root",
  storage: AsyncStorage,
  stateReconciler: autoMergeLevel2,
  whitelist: ['encryption','lessonPage','lessonPageTabAndPages','updateParameters','encryption','hint']
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