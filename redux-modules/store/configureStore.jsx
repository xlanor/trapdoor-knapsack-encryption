import { createStore, combineReducers,applyMiddleware } from 'redux';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import { persistStore, persistReducer,createMigrate } from 'redux-persist';
import { composeWithDevTools } from 'redux-devtools-extension'
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
  version: -1,
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
    questions: questionReducer,
    hint: hintReducer,
  }
);

const configureStore = (persistedReducer) => {
  return createStore(persistedReducer, composeWithDevTools(applyMiddleware(thunk)));
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