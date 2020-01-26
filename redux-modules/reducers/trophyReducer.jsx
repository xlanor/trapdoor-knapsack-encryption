import {
    TROPHY_HISTORIAN,
    TROPHY_EZ_MATH,
    TROPHY_KEYRING,
    TROPHY_CONCEALMENT,
    TROPHY_REVEAL,
    TROPHY_KEYMASTER,
    TROPHY_SAFETY_FIRST,
    TROPHY_BREAK_WALL,
    TROPHY_RESET,
    SHOW_TROPHY,
    HIDE_TROPHY
} from '../constants';

const initialState = {
    trophyHistorian: false,
    trophyEzMath: false,
    trophyKeyRing: false,
    trophyConcealment: false,
    trophyReveal: false,
    trophyKeymaster: false,
    trophySafetyFirst: false,
    trophyBreakWall: false,
    showTrophy:false,
}

const trophyReducer = (state = initialState, action) => {
    switch(action.type){
        case TROPHY_HISTORIAN:
            return {
                ...state,
                trophyHistorian: true,
            }
        case TROPHY_EZ_MATH:
            return {
                ...state,
                trophyEzMath: true,
            }
        case TROPHY_KEYRING:
            return {
                ...state,
                trophyKeyRing: true,
            }
        case TROPHY_CONCEALMENT:
            return {
                ...state,
                trophyConcealment: true,
            }
        case TROPHY_REVEAL:
            return {
                ...state,
                trophyReveal: true,
            }
        case TROPHY_KEYMASTER:
            return {
                ...state,
                trophyKeymaster: true,
            }
        case TROPHY_SAFETY_FIRST:
            return {
                ...state,
                trophySafetyFirst: true,
            }
        case TROPHY_BREAK_WALL:
            return {
                ...state,
                trophyBreakWall: true,
            }
        case SHOW_TROPHY:
            return {
                ...state,
                showTrophy: true,
            }
        case HIDE_TROPHY:
            return {
                ...state,
                showTrophy: false,
            }
        case TROPHY_RESET:
            return {
                ...initialState
            }
        default:
            return state;
    }
}

export default trophyReducer;