import { createStore, combineReducers } from 'redux';

import countReducer from '../reducers/countReducer';
import lessonPageReducer from '../reducers/lessonPageReducer';
import currentTabAndPageReducer from '../reducers/currentTabAndPageReducer';
import currentParametersReducer from '../reducers/currentParametersReducer';

const rootReducer = combineReducers(
  { 
    count: countReducer,
    lessonPage: lessonPageReducer,
    lessonPageTabAndPages: currentTabAndPageReducer,
    updateParameters: currentParametersReducer,
  }
);

const configureStore = () => {
  return createStore(rootReducer);
}

export default configureStore;