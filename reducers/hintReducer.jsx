import {
    LINKS_HINT_DONE,
    LINKS_HINT_NOTDONE,
    RESET_ALL,
    UNLOCK_ALL,
} from '../constants';

const initialState = {
    linksHintLocked: true,
}

const noHint = {
    linksHintLocked: false,
}

const hintReducer = (state = initialState, action) => {
    switch (action.type) {
        case LINKS_HINT_DONE:
            return {
                ...state,
                linksHintLocked: false,
            };
        case LINKS_HINT_NOTDONE:
            return {
                ...state,
                linksHintLocked: true,
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