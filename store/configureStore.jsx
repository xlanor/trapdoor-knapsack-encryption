import { createStore, combineReducers } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import { AsyncStorage } from 'react-native';
import countReducer from '../reducers/countReducer';
import lessonPageReducer from '../reducers/lessonPageReducer';
import currentTabAndPageReducer from '../reducers/currentTabAndPageReducer';
import currentParametersReducer from '../reducers/currentParametersReducer';
import currentEncryptionReducer from '../reducers/currentEncryptionReducer';
import simulatorReducer from '../reducers/simulatorReducer';


const persistConfig = {
  key:"root",
  storage: AsyncStorage,
  blacklist: ['simulator'],
}

const rootReducer = combineReducers(
  { 
    count: countReducer,
    lessonPage: lessonPageReducer,
    lessonPageTabAndPages: currentTabAndPageReducer,
    updateParameters: currentParametersReducer,
    encryption: currentEncryptionReducer,
    simulator: simulatorReducer,
  }
);

const configureStore = () => {
  return createStore(rootReducer);
}
const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = configureStore();
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