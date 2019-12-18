import { createStore, combineReducers } from 'redux';

import countReducer from '../reducers/countReducer';
import lessonPageReducer from '../reducers/lessonPageReducer';
import currentTabAndPageReducer from '../reducers/currentTabAndPageReducer';
import currentParametersReducer from '../reducers/currentParametersReducer';
import currentEncryptionReducer from '../reducers/currentEncryptionReducer';
import simulatorReducer from '../reducers/simulatorReducer';

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

export default configureStore;