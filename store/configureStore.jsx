import { createStore, combineReducers } from 'redux';

import countReducer from '../reducers/countReducer';
import lessonPageReducer from '../reducers/lessonPageReducer';

const rootReducer = combineReducers(
  { 
    count: countReducer,
    lessonPage: lessonPageReducer,
  }
  
  
);

const configureStore = () => {
  return createStore(rootReducer);
}

export default configureStore;