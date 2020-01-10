import {
    HINT_SELECT,
    HINT_DONE,
    HINT_NOTDONE,
    RESET_HINT
} from '../constants';

// we will have different tab names
// to be determined.
const initialState = {
    hintSelected: true,
    hintLocked: false,
}

const hintReducer = (state = initialState, action) => {
    switch (action.type) {
        case HINT_SELECT:
            return {
                ...state,
                hintSelected: true,
                hintLocked: false,
            };
        case HINT_NOTDONE:
            return {
                ...state,
                hintSelected: false,
                hintLocked: true,
            };
        case HINT_DONE:
            return {
                ...state,
                hintLocked: false,
            };
        case RESET_HINT:
          return {
            ...initialState
          };
        default: return state;
    }
}

export default hintReducer;