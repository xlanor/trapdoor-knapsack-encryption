import { COUNTER_CHANGE } from '../constants';

export const changeCount = (count) =>{
    return{
      type: COUNTER_CHANGE,
      payload: count
    }
}