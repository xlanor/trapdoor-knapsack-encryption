import {
    HINT_DONE,
    HINT_NOTDONE,
    RESET_ALL,
    UNLOCK_ALL,
} from '../constants';

const initialState = {
    hintLocked: true,
}

const noHint = {
    hintLocked: false,
}

const hintReducer = (state = initialState, action) => {
    switch (action.type) {
        case HINT_NOTDONE:
            return {
                ...state,
                hintLocked: true,
            };
        case HINT_DONE:
            return {
                ...state,
                hintLocked: false,
            };
        case RESET_ALL:
            return {
                ...initialState
            };
        case UNLOCK_ALL:
            return {
                ...noHint
            }
        default: return state;
    }
}

export default hintReducer;